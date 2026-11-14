/* Ayudantes para escribir el contenido de forma compacta.
   c = opción múltiple (la primera opción es la correcta; la app las baraja)
   i = respuesta escrita (ac: distingue tildes, cs: distingue mayúsculas)
   m = unir pares (izquierda con derecha)
   o = ordenar (las piezas se escriben en el orden correcto; la app las baraja) */
(function () {
  'use strict';
  var C = (window.CHISPA = window.CHISPA || { chapters: [] });
  C.c = function (q, right, wrong, why) {
    return { t: 'c', q: q, o: [right].concat(wrong), a: 0, why: why };
  };
  C.i = function (q, answers, why, opt) {
    var r = { t: 'i', q: q, a: answers, show: answers[0], ph: 'Escribe tu respuesta', why: why };
    if (opt) for (var k in opt) r[k] = opt[k];
    return r;
  };
  C.m = function (q, pairs, why) {
    return { t: 'm', q: q, pairs: pairs, why: why };
  };
  C.o = function (q, parts, why) {
    return { t: 'o', q: q, parts: parts, why: why };
  };
})();
