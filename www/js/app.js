(function () {
  'use strict';
  var CH = window.CHISPA.chapters;
  var $ = function (s) { return document.querySelector(s); };
  var KEY = 'chispa-espanol9-v1';
  var HEARTS = 5;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Nodos del camino ---------- */
  // Cada epígrafe es un subnivel; al final de cada capítulo hay un repaso.
  var NODES = [];
  CH.forEach(function (ch) {
    ch.subs.forEach(function (s) { NODES.push({ id: s.n, type: 'sub', ch: ch, sub: s }); });
    NODES.push({ id: 'r' + ch.id, type: 'review', ch: ch });
  });
  function reviewQs(ch) {
    var picks = ch.subs.map(function (s) { return s.qs[s.qs.length - 1]; });
    if (picks.length > 8) {
      var out = [];
      for (var j = 0; j < 8; j++) out.push(picks[Math.floor(j * picks.length / 8)]);
      picks = out;
    }
    return picks;
  }
  function nodeQs(n) { return n.type === 'sub' ? n.sub.qs : reviewQs(n.ch); }

  /* ---------- Estado ---------- */
  var state = { xp: 0, streak: 0, last: '', done: {} };
  try {
    var raw = localStorage.getItem(KEY);
    if (raw) {
      var p = JSON.parse(raw);
      if (p && typeof p === 'object') {
        state.xp = +p.xp || 0; state.streak = +p.streak || 0; state.last = p.last || '';
        state.done = (p.done && typeof p.done === 'object') ? p.done : {};
      }
    }
  } catch (e) {}
  function save() { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {} }
  function dayKey(d) { return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate(); }
  function shownStreak() {
    if (!state.last) return 0;
    var t = dayKey(new Date()), y = dayKey(new Date(Date.now() - 864e5));
    return (state.last === t || state.last === y) ? state.streak : 0;
  }
  function isOpen(i) { return i === 0 || !!state.done[NODES[i - 1].id]; }
  function currentIndex() {
    for (var i = 0; i < NODES.length; i++) if (!state.done[NODES[i].id]) return i;
    return -1;
  }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

  /* ---------- Íconos y mascota ---------- */
  var I = {
    flame: '<svg viewBox="0 0 24 24"><path d="M12 2c1 4 5 5.5 5 11a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-6 1-10z" fill="#ff9600"/><path d="M12 22a3 3 0 0 1-3-3c0-1.6 1.2-2.4 2-3.5.3 1 1 1.5 1.6 1.5.7.7.4 1.6.4 2.5a3 3 0 0 1-1 2.5z" fill="#ffc800"/></svg>',
    bolt: '<svg viewBox="0 0 24 24"><path d="M13 2L4 14h7l-1 8 9-12h-7z" fill="#ffc800" stroke="#e0a800" stroke-width="1.2" stroke-linejoin="round"/></svg>',
    heart: '<svg viewBox="0 0 24 24"><path d="M12 21s-8-5.2-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 5.8-8 11-8 11z" fill="#ff4b4b"/></svg>',
    star: '<svg viewBox="0 0 24 24"><path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3 6.1 20.6l1.3-6.6L2.5 9.4l6.6-.8z"/></svg>',
    check: '<svg viewBox="0 0 24 24"><path d="M4.5 12.5l5 5 10-11" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    lock: '<svg viewBox="0 0 24 24"><rect x="5" y="10.5" width="14" height="10.5" rx="2.5"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/></svg>',
    trophy: '<svg viewBox="0 0 24 24"><path d="M7 3h10v5a5 5 0 0 1-10 0z"/><path d="M7 5H4v2a3 3 0 0 0 3 3M17 5h3v2a3 3 0 0 1-3 3" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><rect x="10.5" y="13" width="3" height="4"/><rect x="7.5" y="17" width="9" height="3" rx="1"/></svg>',
    ok: '<svg viewBox="0 0 24 24"><path d="M5 12.5l5 5 9-10"/></svg>',
    no: '<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg>'
  };
  function mascot(mood) {
    mood = mood || 'happy';
    var arms = mood === 'cheer'
      ? '<ellipse cx="13" cy="60" rx="8" ry="14" transform="rotate(-25 13 60)" fill="#ffb800"/><ellipse cx="107" cy="60" rx="8" ry="14" transform="rotate(25 107 60)" fill="#ffb800"/>'
      : '<ellipse cx="15" cy="78" rx="8" ry="13" transform="rotate(15 15 78)" fill="#ffb800"/><ellipse cx="105" cy="78" rx="8" ry="13" transform="rotate(-15 105 78)" fill="#ffb800"/>';
    var mouth = mood === 'sad'
      ? '<path d="M50 88q10-10 20 0" fill="none" stroke="#1f2a30" stroke-width="3.5" stroke-linecap="round"/>'
      : mood === 'cheer'
        ? '<path d="M47 77q13 25 26 0z" fill="#c93a3a" stroke="#1f2a30" stroke-width="3" stroke-linejoin="round"/>'
        : '<path d="M50 79q10 11 20 0" fill="none" stroke="#1f2a30" stroke-width="3.5" stroke-linecap="round"/>';
    var brows = mood === 'sad' ? '<path d="M32 40l16 5M88 40l-16 5" stroke="#1f2a30" stroke-width="3.5" stroke-linecap="round"/>' : '';
    return '<svg class="mascot ' + mood + '" viewBox="0 -8 120 128" aria-hidden="true" focusable="false">'
      + '<g class="spark"><path d="M60 18V34" stroke="#e08600" stroke-width="4" stroke-linecap="round"/><path d="M60-6l4 8 8 4-8 4-4 8-4-8-8-4 8-4z" fill="#ff9600"/></g>'
      + '<ellipse cx="42" cy="110" rx="12" ry="6" fill="#ff9600"/><ellipse cx="78" cy="110" rx="12" ry="6" fill="#ff9600"/>'
      + arms
      + '<ellipse cx="60" cy="70" rx="44" ry="40" fill="#ffc800"/><ellipse cx="60" cy="84" rx="30" ry="21" fill="#ffe27a"/>'
      + '<g class="eyes"><circle cx="44" cy="58" r="12" fill="#fff"/><circle cx="76" cy="58" r="12" fill="#fff"/><circle cx="46" cy="60" r="6" fill="#1f2a30"/><circle cx="78" cy="60" r="6" fill="#1f2a30"/><circle cx="48" cy="57.5" r="2" fill="#fff"/><circle cx="80" cy="57.5" r="2" fill="#fff"/></g>'
      + brows
      + '<circle cx="28" cy="76" r="6" fill="#ff8a7a" opacity=".6"/><circle cx="92" cy="76" r="6" fill="#ff8a7a" opacity=".6"/>'
      + mouth + '</svg>';
  }

  /* ---------- Pantalla principal ---------- */
  function renderStats() {
    $('#stStreak').innerHTML = I.flame + '<b>' + shownStreak() + '</b>';
    $('#stStreak').setAttribute('aria-label', 'Racha: ' + shownStreak() + ' días');
    $('#stXp').innerHTML = I.bolt + '<b>' + state.xp + '</b>';
    $('#stXp').setAttribute('aria-label', 'Puntos de experiencia: ' + state.xp);
    var total = NODES.length;
    var done = NODES.filter(function (n) { return state.done[n.id]; }).length;
    var pct = Math.round(done / total * 100);
    $('#heroTitle').textContent = done === 0 ? '¡Hola! Soy Chispi.' : done === total ? '¡Lo lograste!' : '¡Qué bueno verte!';
    $('#heroText').textContent = done === 0
      ? 'Vamos a repasar Español y Literatura, capítulo a capítulo.'
      : done === total ? 'Completaste todos los capítulos. ¡Eres una chispa!'
        : 'Llevas ' + done + ' de ' + total + ' lecciones. ¡Sigue así!';
    $('#totalFill').style.width = pct + '%';
    $('#totalBar').setAttribute('aria-valuenow', pct);
  }
  var OFFSETS = [0, 46, 70, 46, 0, -46, -70, -46];
  function renderPath(popId) {
    var cur = currentIndex();
    var h = '';
    var idx = 0;
    CH.forEach(function (ch) {
      var nodes = NODES.filter(function (n) { return n.ch === ch; });
      var doneN = nodes.filter(function (n) { return state.done[n.id]; }).length;
      h += '<section class="chap" style="--s:' + ch.color + ';--sd:' + ch.dark + '" aria-label="Capítulo ' + ch.id + '">'
        + '<div class="unit"><div><p>Capítulo ' + ch.id + '</p><h2>' + esc(ch.name) + '</h2></div><span class="count">' + doneN + '/' + nodes.length + '</span></div>'
        + '<div class="steps">';
      nodes.forEach(function (n) {
        var gi = NODES.indexOf(n);
        var st = state.done[n.id] ? 'done' : (isOpen(gi) ? 'current' : 'locked');
        var ic = st === 'done' ? I.check : st === 'locked' ? I.lock : (n.type === 'review' ? I.trophy : I.star);
        var title = n.type === 'sub' ? n.sub.t : 'Repaso del capítulo';
        var small = n.type === 'sub' ? 'Epígrafe ' + n.sub.n : 'Pon a prueba lo aprendido';
        h += '<div class="step' + (popId === n.id ? ' pop' : '') + '" style="--dx:' + OFFSETS[idx % OFFSETS.length] + 'px">'
          + (gi === cur ? '<div class="go"><span>Empezar</span></div>' : '')
          + '<button type="button" class="node ' + st + (n.type === 'review' ? ' review' : '') + (gi === cur ? ' current' : '') + '" data-i="' + gi + '" aria-label="' + (st === 'locked' ? 'Bloqueada: ' : '') + esc(title) + '">' + ic + '</button>'
          + '<div class="lbl">' + esc(title) + '<small>' + esc(small) + '</small></div></div>';
        idx++;
      });
      h += '</div></section>';
    });
    $('#path').innerHTML = h;
  }
  function render(popId) { renderStats(); renderPath(popId); }

  var toastT;
  function toast(msg) {
    var t = $('#toast'); t.textContent = msg; t.hidden = false;
    clearTimeout(toastT); toastT = setTimeout(function () { t.hidden = true }, 2400);
  }

  $('#path').addEventListener('click', function (e) {
    var b = e.target.closest('.node'); if (!b) return;
    if (b.classList.contains('locked')) {
      b.classList.remove('shake'); void b.offsetWidth; b.classList.add('shake');
      toast('Completa la lección anterior para abrir esta.'); return;
    }
    openLesson(+b.dataset.i);
  });
  var rt;
  $('#reset').addEventListener('click', function () {
    var b = $('#reset');
    if (b.dataset.arm) {
      state = { xp: 0, streak: 0, last: '', done: {} }; save();
      delete b.dataset.arm; b.textContent = 'Reiniciar progreso'; render(); scrollToCurrent(); toast('Progreso reiniciado');
    } else {
      b.dataset.arm = '1'; b.textContent = 'Toca otra vez para confirmar';
      clearTimeout(rt); rt = setTimeout(function () { delete b.dataset.arm; b.textContent = 'Reiniciar progreso' }, 4000);
    }
  });
  function scrollToCurrent() {
    var n = document.querySelector('.node.current');
    if (n && n.scrollIntoView) { try { n.scrollIntoView({ block: 'center', behavior: reduce ? 'auto' : 'smooth' }); } catch (e) { n.scrollIntoView(); } }
  }

  /* ---------- Lección ---------- */
  var L = null;
  var PRAISE = ['¡Muy bien!', '¡Excelente!', '¡Genial!', '¡Correcto!', '¡Así se hace!', '¡Perfecto!'];
  function shuffle(a) { for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t } return a }
  function range(n) { var r = []; for (var i = 0; i < n; i++) r.push(i); return r }
  function shuffledNot(n) {
    // Mezcla sin dejar el orden original (así el ejercicio no sale resuelto).
    var a = shuffle(range(n)), tries = 0;
    while (tries++ < 12 && a.every(function (v, k) { return v === k })) a = shuffle(range(n));
    return a;
  }
  function prep(q) {
    var c = Object.assign({}, q);
    if (q.t === 'c') c.order = shuffle(range(q.o.length));
    if (q.t === 'm') c.ro = shuffledNot(q.pairs.length);
    if (q.t === 'o') c.tray = shuffledNot(q.parts.length);
    return c;
  }
  function clean(s, q) {
    s = String(s).trim().replace(/\s+/g, ' ');
    if (!q.cs) s = s.toLowerCase();
    s = q.ac ? s.normalize('NFC') : s.normalize('NFD').replace(/[̀-ͯ]/g, '');
    return s.replace(/[.,;:!¡¿?«»"“”]/g, '').trim();
  }
  function heartsHTML() { return I.heart + '<span>' + L.hearts + '</span>'; }
  function setBar() {
    var pct = Math.round(L.solved / L.total * 100);
    $('#barFill').style.width = pct + '%';
    $('#barWrap').setAttribute('aria-valuenow', pct);
  }
  function setFooter(mode, q, extra) {
    var f = $('#lfoot'), fb = $('#fb'), b = $('#lbtn');
    f.className = 'lfoot' + (mode === 'ok' ? ' ok' : mode === 'bad' ? ' bad' : '');
    b.className = 'btn' + (mode === 'bad' ? ' red' : '');
    if (mode === 'idle') { fb.innerHTML = ''; b.textContent = 'Comprobar'; b.disabled = true; }
    else if (mode === 'intro') { fb.innerHTML = ''; b.textContent = 'Empezar'; b.disabled = false; }
    else if (mode === 'ok') {
      fb.innerHTML = '<span class="fb-ic">' + I.ok + '</span><div><p class="fb-t">' + PRAISE[Math.floor(Math.random() * PRAISE.length)] + '</p>'
        + (q.why ? '<p class="fb-d">' + esc(q.why) + '</p>' : '') + '</div>';
      b.textContent = 'Continuar'; b.disabled = false;
    } else if (mode === 'bad') {
      var lead;
      if (q.t === 'c') lead = 'Respuesta correcta: <b>' + esc(q.o[q.a]) + '</b>. ';
      else if (q.t === 'i') lead = 'Respuesta correcta: <b>' + esc(q.show) + '</b>. ';
      else lead = 'Revisa la respuesta correcta que te mostramos. ';
      fb.innerHTML = '<span class="fb-ic">' + I.no + '</span><div><p class="fb-t">' + (q.t === 'c' || q.t === 'i' ? 'Respuesta correcta' : 'Casi lo logras') + '</p><p class="fb-d">' + lead + esc(q.why) + '</p></div>';
      b.textContent = 'Entendido'; b.disabled = false;
    } else if (mode === 'end') { fb.innerHTML = ''; b.disabled = false; }
  }
  var prevFocus = null;
  function openLesson(gi) {
    var n = NODES[gi], ch = n.ch;
    if ($('#lesson').hidden) prevFocus = document.activeElement;
    var qs = nodeQs(n);
    L = {
      gi: gi, node: n, queue: qs.map(prep), total: qs.length, solved: 0, first: 0, wrong: 0, hearts: HEARTS,
      phase: 'intro', sel: null, ok: false, end: null, popId: undefined,
      pairs: {}, left: null, placed: []
    };
    var el = $('#lesson');
    el.style.setProperty('--s', ch.color);
    el.classList.remove('end'); el.hidden = false;
    $('#app').inert = true; document.body.classList.add('lock');
    $('#quit').hidden = true;
    $('#lhearts').innerHTML = heartsHTML();
    setBar();
    showIntro();
  }
  function showIntro() {
    var n = L.node, ch = n.ch;
    L.phase = 'intro';
    var title = n.type === 'sub' ? n.sub.t : 'Repaso del capítulo ' + ch.id;
    var tag = n.type === 'sub' ? 'Epígrafe ' + n.sub.n : 'Capítulo ' + ch.id + ' · ' + ch.short;
    var tip = n.type === 'sub' ? n.sub.tip : 'Responde una pregunta difícil de cada epígrafe del capítulo «' + ch.name + '». ¡Demuestra todo lo que aprendiste!';
    $('#lin').innerHTML = '<div class="intro">' + mascot('happy')
      + '<p class="tag">' + esc(tag) + '</p><h2>' + esc(title) + '</h2>'
      + '<div class="card"><h3>' + (n.type === 'sub' ? 'Antes de empezar' : 'Repaso') + '</h3><p>' + esc(tip) + '</p></div>'
      + '<p class="meta">' + L.total + ' ejercicios · ' + HEARTS + ' corazones</p></div>';
    $('#lbody').scrollTop = 0;
    setFooter('intro');
    setTimeout(function () { $('#lbtn').focus(); }, 50);
  }
  function kickFor(q) {
    return q.t === 'c' ? 'Elige la respuesta' : q.t === 'i' ? 'Escribe la respuesta' : q.t === 'm' ? 'Une las parejas' : 'Ordena las piezas';
  }
  function renderQ() {
    var q = L.queue[0]; L.phase = 'answer'; L.sel = null; L.pairs = {}; L.left = null; L.placed = [];
    setFooter('idle');
    var h = '<div class="qwrap"><div class="ask">' + mascot('happy') + '<div class="bubble"><p class="kick">' + kickFor(q) + '</p><h2>' + esc(q.q) + '</h2></div></div>';
    if (q.t === 'c') {
      h += '<div class="choices" role="group" aria-label="Opciones">' + q.order.map(function (oi, pos) {
        return '<button type="button" class="choice" data-pos="' + pos + '" aria-pressed="false"><span class="key">' + (pos + 1) + '</span><span>' + esc(q.o[oi]) + '</span></button>';
      }).join('') + '</div>';
    } else if (q.t === 'i') {
      h += '<div><label class="sr" for="ans">Tu respuesta</label><input id="ans" class="ans" type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" placeholder="' + esc(q.ph || 'Escribe aquí') + '"></div>';
    } else if (q.t === 'm') {
      h += '<div class="pairs" id="pairs"></div><p class="hint">Toca un elemento de la izquierda y luego su pareja de la derecha. Toca de nuevo para deshacer.</p>';
    } else {
      h += '<div class="slots" id="slots" aria-label="Tu respuesta"></div><div class="bank" id="bank" aria-label="Piezas disponibles"></div>';
    }
    h += '</div>';
    $('#lin').innerHTML = h;
    $('#lbody').scrollTop = 0;
    if (q.t === 'm') drawPairs();
    if (q.t === 'o') drawOrder();
    if (q.t === 'i') setTimeout(function () { var a = $('#ans'); if (a) a.focus(); }, 60);
  }

  /* Unir pares */
  function pairOfRight(k) { for (var l in L.pairs) if (L.pairs[l] === k) return +l; return -1; }
  function drawPairs(result) {
    var q = L.queue[0], box = $('#pairs'); if (!box) return;
    var left = '<div class="pcol">', right = '<div class="pcol">';
    q.pairs.forEach(function (p, li) {
      var rk = L.pairs[li], paired = rk !== undefined;
      var cls = 'pbtn' + (L.left === li ? ' sel' : '') + (paired ? ' paired' : '');
      var st = paired ? ' style="--pc:var(--p' + (li % 5) + ')"' : '';
      if (result) cls += result[li] ? ' right' : ' wrong';
      left += '<button type="button" class="' + cls + '" data-l="' + li + '"' + st + (result ? ' disabled' : '') + '>' + esc(p[0]) + (paired ? '<span class="badge">' + (li + 1) + '</span>' : '') + '</button>';
    });
    q.ro.forEach(function (ri, k) {
      var li = pairOfRight(ri), paired = li >= 0;
      var cls = 'pbtn' + (paired ? ' paired' : '');
      var st = paired ? ' style="--pc:var(--p' + (li % 5) + ')"' : '';
      if (result && paired) cls += result[li] ? ' right' : ' wrong';
      right += '<button type="button" class="' + cls + '" data-r="' + ri + '"' + st + (result ? ' disabled' : '') + '>' + esc(q.pairs[ri][1]) + (paired ? '<span class="badge">' + (li + 1) + '</span>' : '') + '</button>';
    });
    box.innerHTML = left + '</div>' + right + '</div>';
    $('#lbtn').disabled = result ? false : Object.keys(L.pairs).length !== q.pairs.length;
  }
  function onPairClick(e) {
    if (!L || L.phase !== 'answer') return;
    var b = e.target.closest('.pbtn'); if (!b) return;
    if (b.dataset.l !== undefined) {
      var li = +b.dataset.l;
      if (L.pairs[li] !== undefined) { delete L.pairs[li]; L.left = null; }
      else L.left = (L.left === li) ? null : li;
    } else {
      var ri = +b.dataset.r, owner = pairOfRight(ri);
      if (owner >= 0) { delete L.pairs[owner]; }
      else if (L.left !== null) { L.pairs[L.left] = ri; L.left = null; }
      else { toast('Primero toca un elemento de la izquierda.'); }
    }
    drawPairs();
  }

  /* Ordenar piezas */
  function drawOrder(result) {
    var q = L.queue[0], slots = $('#slots'), bank = $('#bank'); if (!slots) return;
    var s = '';
    for (var k = 0; k < q.parts.length; k++) {
      var pi = L.placed[k];
      s += '<div class="slot"><span class="n">' + (k + 1) + '</span>';
      if (pi !== undefined) {
        var cls = 'tok' + (result ? (pi === k ? ' right' : ' wrong') : '');
        s += '<button type="button" class="' + cls + '" data-placed="' + k + '"' + (result ? ' disabled' : '') + '>' + esc(q.parts[pi]) + '</button>';
      }
      s += '</div>';
    }
    slots.innerHTML = s;
    bank.innerHTML = q.tray.filter(function (pi) { return L.placed.indexOf(pi) < 0; }).map(function (pi) {
      return '<button type="button" class="tok" data-part="' + pi + '"' + (result ? ' disabled' : '') + '>' + esc(q.parts[pi]) + '</button>';
    }).join('');
    $('#lbtn').disabled = result ? false : L.placed.length !== q.parts.length;
  }
  function onOrderClick(e) {
    if (!L || L.phase !== 'answer') return;
    var t = e.target.closest('.tok'); if (!t) return;
    if (t.dataset.part !== undefined) L.placed.push(+t.dataset.part);
    else if (t.dataset.placed !== undefined) L.placed.splice(+t.dataset.placed, 1);
    drawOrder();
  }

  $('#lin').addEventListener('click', function (e) {
    var c = e.target.closest('.choice');
    if (c && L && L.phase === 'answer') return pick(+c.dataset.pos);
    if (e.target.closest('.pbtn')) return onPairClick(e);
    if (e.target.closest('.tok')) return onOrderClick(e);
  });
  $('#lin').addEventListener('input', function (e) {
    if (e.target.id === 'ans' && L && L.phase === 'answer') $('#lbtn').disabled = !e.target.value.trim();
  });
  function pick(pos) {
    L.sel = pos;
    document.querySelectorAll('#lin .choice').forEach(function (b, i) { b.setAttribute('aria-pressed', i === pos); });
    $('#lbtn').disabled = false;
  }
  function solutionCard(q) {
    var h = '<div class="sol"><h3>Respuesta correcta</h3>';
    if (q.t === 'm') h += '<ul>' + q.pairs.map(function (p) { return '<li>' + esc(p[0]) + ' → <b>' + esc(p[1]) + '</b></li>'; }).join('') + '</ul>';
    else h += '<ol>' + q.parts.map(function (p) { return '<li>' + esc(p) + '</li>'; }).join('') + '</ol>';
    return h + '</div>';
  }
  function check() {
    if (!L || L.phase !== 'answer') return;
    var q = L.queue[0], ok = false, result = null;
    if (q.t === 'c') {
      if (L.sel == null) return;
      ok = q.order[L.sel] === q.a;
      document.querySelectorAll('#lin .choice').forEach(function (b, i) {
        b.disabled = true;
        if (q.order[i] === q.a) b.classList.add('right');
        else if (i === L.sel) b.classList.add('wrong');
        b.setAttribute('aria-pressed', false);
      });
    } else if (q.t === 'i') {
      var inp = $('#ans'), v = inp.value;
      if (!v.trim()) return;
      ok = q.a.some(function (a) { return clean(a, q) === clean(v, q); });
      inp.readOnly = true; inp.classList.add(ok ? 'right' : 'wrong');
    } else if (q.t === 'm') {
      if (Object.keys(L.pairs).length !== q.pairs.length) return;
      result = q.pairs.map(function (_, li) { return L.pairs[li] === li; });
      ok = result.every(Boolean);
      drawPairs(result);
      if (!ok) $('#lin').querySelector('.qwrap').insertAdjacentHTML('beforeend', solutionCard(q));
    } else {
      if (L.placed.length !== q.parts.length) return;
      ok = L.placed.every(function (pi, k) { return pi === k; });
      drawOrder(true);
      if (!ok) $('#lin').querySelector('.qwrap').insertAdjacentHTML('beforeend', solutionCard(q));
    }
    L.phase = 'feedback'; L.ok = ok;
    if (ok) {
      L.queue.shift(); L.solved++; if (!q.failed) L.first++;
      setBar(); setFooter('ok', q);
    } else {
      L.hearts--; L.wrong++; q.failed = true;
      L.queue.shift(); L.queue.push(prep(q));
      var hd = $('#lhearts'); hd.innerHTML = heartsHTML(); hd.classList.remove('hit'); void hd.offsetWidth; hd.classList.add('hit');
      setFooter('bad', q);
    }
  }
  function advance() {
    if (!L) return;
    if (L.phase === 'intro') return renderQ();
    if (L.phase === 'answer') return check();
    if (L.phase === 'feedback') {
      if (L.hearts <= 0 && !L.ok) return fail();
      if (!L.queue.length) return finish();
      return renderQ();
    }
    if (L.phase === 'end') {
      if (L.end === 'retry') { var gi = L.gi; closeLesson(true); openLesson(gi); }
      else closeLesson();
    }
  }
  function showEnd(html, label, kind) {
    L.phase = 'end';
    $('#lesson').classList.add('end');
    $('#lin').innerHTML = html;
    $('#lbody').scrollTop = 0;
    setFooter('end');
    var b = $('#lbtn'); b.textContent = label; b.className = 'btn';
    L.end = kind;
    setTimeout(function () { b.focus(); }, 50);
  }
  function finish() {
    var n = L.node, ch = n.ch;
    var xp = L.first * 10 + (L.wrong === 0 ? 5 : 0);
    var acc = Math.round(L.first / L.total * 100);
    var isNew = !state.done[n.id];
    state.done[n.id] = true;
    state.xp += xp;
    var t = dayKey(new Date()), y = dayKey(new Date(Date.now() - 864e5));
    if (state.last !== t) { state.streak = (state.last === y) ? state.streak + 1 : 1; state.last = t; }
    save();
    var chapterDone = ch.subs.every(function (s) { return state.done[s.n]; }) && state.done['r' + ch.id];
    var title = (n.type === 'review' && chapterDone && isNew) ? '¡Capítulo completado!' : '¡Lección completada!';
    var msg = acc === 100 ? 'Sin errores. ¡Eres una chispa!' : acc >= 75 ? 'Muy buen trabajo. Casi perfecto.' : 'Cada intento te hace más fuerte. ¡Sigue practicando!';
    var h = '<div class="res">' + mascot('cheer') + '<h2>' + title + '</h2><p>' + msg + '</p>'
      + '<div class="tiles"><div class="tile"><h4>XP ganado</h4><p>+' + xp + '</p></div>'
      + '<div class="tile g"><h4>Precisión</h4><p>' + acc + '%</p></div>'
      + '<div class="tile o"><h4>Racha</h4><p>' + shownStreak() + '</p></div></div></div>';
    L.popId = isNew ? n.id : undefined;
    showEnd(h, 'Continuar', 'close');
    confetti();
  }
  function fail() {
    var h = '<div class="res">' + mascot('sad') + '<h2>¡Te quedaste sin corazones!</h2><p>No pasa nada. Repasa y vuelve a intentarlo, ¡tú puedes!</p>'
      + '<button type="button" class="btn ghost" id="failQuit">Salir</button></div>';
    showEnd(h, 'Intentar de nuevo', 'retry');
    var q = $('#failQuit'); if (q) q.addEventListener('click', function () { closeLesson(); });
  }
  function closeLesson(silent) {
    var pop = L ? L.popId : undefined;
    $('#lesson').hidden = true;
    $('#app').inert = false; document.body.classList.remove('lock');
    $('#quit').hidden = true;
    var c = $('#confetti'); c.getContext('2d').clearRect(0, 0, c.width, c.height);
    if (!silent) {
      L = null;
      render(pop);
      if (pop) setTimeout(scrollToCurrent, 120);
      if (prevFocus && prevFocus.focus && document.contains(prevFocus)) { try { prevFocus.focus({ preventScroll: true }); } catch (e) {} }
    }
  }
  $('#lbtn').addEventListener('click', advance);
  $('#lx').addEventListener('click', function () { $('#quit').hidden = false; $('#stay').focus(); });
  $('#stay').addEventListener('click', function () { $('#quit').hidden = true; });
  $('#leave').addEventListener('click', function () { closeLesson(); });
  $('#quitMascot').innerHTML = mascot('sad');

  document.addEventListener('keydown', function (e) {
    if ($('#lesson').hidden) return;
    if (!$('#quit').hidden) { if (e.key === 'Escape') $('#quit').hidden = true; return; }
    if (e.key === 'Escape') { $('#quit').hidden = false; $('#stay').focus(); return; }
    if (e.key === 'Enter') {
      var id = document.activeElement && document.activeElement.id;
      if (id === 'failQuit' || id === 'lx') return;
      e.preventDefault();
      if (!$('#lbtn').disabled) advance();
      return;
    }
    if (L && L.phase === 'answer' && L.queue[0] && L.queue[0].t === 'c' && /^[1-9]$/.test(e.key)) {
      var k = +e.key - 1;
      if (k < L.queue[0].order.length) pick(k);
    }
  });

  /* Botón «atrás» de Android */
  try {
    var AppPlugin = window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.App;
    if (AppPlugin && AppPlugin.addListener) {
      AppPlugin.addListener('backButton', function () {
        if (!$('#lesson').hidden) {
          var q = $('#quit');
          if (L && L.phase === 'end') closeLesson();
          else q.hidden = !q.hidden;
        } else if (AppPlugin.exitApp) AppPlugin.exitApp();
      });
    }
  } catch (e) {}

  /* ---------- Confeti ---------- */
  function confetti() {
    if (reduce) return;
    var c = $('#confetti'), ctx = c.getContext('2d');
    var dpr = window.devicePixelRatio || 1, W = window.innerWidth, H = window.innerHeight;
    c.width = W * dpr; c.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    var cols = ['#58cc02', '#1cb0f6', '#ffc800', '#ff9600', '#ce82ff', '#ff4b4b'];
    var P = []; for (var i = 0; i < 120; i++) { P.push({ x: Math.random() * W, y: -20 - Math.random() * H * .5, w: 6 + Math.random() * 6, h: 8 + Math.random() * 8, vx: -1.5 + Math.random() * 3, vy: 2 + Math.random() * 3.5, r: Math.random() * 6, vr: -.2 + Math.random() * .4, c: cols[Math.floor(Math.random() * cols.length)] }) }
    var t0 = performance.now();
    function f(t) {
      ctx.clearRect(0, 0, W, H);
      for (var i = 0; i < P.length; i++) {
        var p = P[i]; p.x += p.vx; p.y += p.vy; p.vy += .04; p.r += p.vr;
        ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r); ctx.fillStyle = p.c; ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h); ctx.restore();
      }
      if (t - t0 < 3400) requestAnimationFrame(f); else ctx.clearRect(0, 0, W, H);
    }
    requestAnimationFrame(f);
  }

  /* ---------- Inicio ---------- */
  $('#logoMascot').innerHTML = mascot('happy');
  $('#heroMascot').innerHTML = mascot('happy');
  render();
  setTimeout(scrollToCurrent, 350);

  // Para pruebas automáticas
  window.__chispa = { NODES: NODES, state: function () { return state; }, openLesson: openLesson };
})();
