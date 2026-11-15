// Valida la estructura del contenido de Español antes de compilar la app.
// Uso: node scripts/validate-content.mjs
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dir = path.join(root, 'www', 'js', 'data');
const files = ['helpers.js', ...[1, 2, 3, 4, 5, 6].map((n) => `cap${n}.js`)];
const matFiles = [1, 2, 3, 4, 5].map((n) => `mat${n}.js`).filter((f) => fs.existsSync(path.join(dir, f)));

const sandbox = { window: {} };
vm.createContext(sandbox);
for (const f of [...files, ...matFiles]) {
  vm.runInContext(fs.readFileSync(path.join(dir, f), 'utf8'), sandbox, { filename: f });
}
const chapters = sandbox.window.CHISPA.chapters;
const matChapters = sandbox.window.CHISPA.matChapters || [];

const errors = [];
const err = (where, msg) => errors.push(`${where}: ${msg}`);
const stats = { subs: 0, qs: 0, c: 0, i: 0, m: 0, o: 0 };

function validate(chapters, label, expectedSubs, sequential) {
  if (chapters.length !== Object.keys(expectedSubs).length) err(label, `se esperaban ${Object.keys(expectedSubs).length} capítulos y hay ${chapters.length}`);
  const seen = new Set();
  for (const ch of chapters) {
    if (ch.subs.length !== expectedSubs[ch.id]) err(`${label} cap ${ch.id}`, `se esperaban ${expectedSubs[ch.id]} epígrafes y hay ${ch.subs.length}`);
    ch.subs.forEach((s, idx) => {
      stats.subs++;
      const where = `${label} epígrafe ${s.n}`;
      if (!s.n.startsWith(ch.id + '.')) err(where, 'el número no corresponde al capítulo');
      if (sequential && s.n !== `${ch.id}.${idx + 1}`) err(where, `se esperaba ${ch.id}.${idx + 1}`);
      if (seen.has(s.n)) err(where, 'número repetido');
      seen.add(s.n);
      if (!s.t || !s.tip) err(where, 'falta título o resumen');
      if (s.qs.length < 5 || s.qs.length > 7) err(where, `tiene ${s.qs.length} ejercicios (se esperan 5 a 7)`);
      s.qs.forEach((q, k) => {
        stats.qs++;
        stats[q.t]++;
        const w = `${where} ej.${k + 1}`;
        if (!q.q || !q.why) err(w, 'falta enunciado o explicación');
        if (q.t === 'c') {
          if (q.o.length < 3 || q.o.length > 4) err(w, `opciones: ${q.o.length}`);
          if (new Set(q.o).size !== q.o.length) err(w, 'opciones repetidas');
          if (q.a !== 0) err(w, 'la respuesta correcta debe ser la primera');
        } else if (q.t === 'i') {
          if (!q.a.length) err(w, 'sin respuestas');
        } else if (q.t === 'm') {
          const L = q.pairs.map((p) => p[0]), R = q.pairs.map((p) => p[1]);
          if (q.pairs.length < 3 || q.pairs.length > 5) err(w, `pares: ${q.pairs.length}`);
          if (new Set(L).size !== L.length || new Set(R).size !== R.length) err(w, 'pares repetidos');
        } else if (q.t === 'o') {
          if (q.parts.length < 3 || q.parts.length > 6) err(w, `piezas: ${q.parts.length}`);
          if (new Set(q.parts).size !== q.parts.length) err(w, 'piezas repetidas');
        } else err(w, `tipo desconocido ${q.t}`);
      });
    });
  }
}

validate(chapters, 'Español', { 1: 4, 2: 8, 3: 4, 4: 8, 5: 8, 6: 11 }, true);
if (matChapters.length) {
  // Matemática: un subnivel por cada epígrafe numerado del libro
  validate(matChapters, 'Matemática', { 1: 5, 2: 9, 3: 7, 4: 16, 5: 9 }, false);
}

console.log(`Capítulos: ${chapters.length + matChapters.length} | Epígrafes: ${stats.subs} | Ejercicios: ${stats.qs}`);
console.log(`Opción múltiple: ${stats.c} | Escribir: ${stats.i} | Unir: ${stats.m} | Ordenar: ${stats.o}`);
if (errors.length) {
  console.error('\nProblemas encontrados:\n- ' + errors.join('\n- '));
  process.exit(1);
}
console.log('Contenido válido.');
