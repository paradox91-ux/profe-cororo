/* Matemática 9.º · Capítulo 1. Estadística Descriptiva */
(function () {
  'use strict';
  var C = window.CHISPA, c = C.c, n = C.n, m = C.m, o = C.o;
  C.matChapters = C.matChapters || [];
  C.matChapters.push({
    id: 1,
    name: 'Estadística Descriptiva',
    short: 'Estadística',
    color: '#58cc02', dark: '#58a700',
    subs: [
      {
        n: '1.1', t: 'Sistematización sobre los conjuntos numéricos',
        tip: 'Los números naturales (ℕ) se incluyen en los enteros (ℤ); estos en los racionales (ℚ, fracciones) y todos ellos en los reales (ℝ). Los irracionales, como √2 o π, no se pueden escribir como fracción.',
        qs: [
          c('¿A qué conjunto pertenece el número −3?', 'A los enteros (ℤ), pero no a los naturales', ['A los naturales (ℕ)', 'A ningún conjunto numérico'], 'Los naturales son 0, 1, 2, 3… Los enteros añaden los negativos: −3 es entero.'),
          m('Une cada número con la clase a la que pertenece.', [['7', 'Natural'], ['−4', 'Entero negativo'], ['3/5', 'Racional no entero'], ['√2', 'Irracional']], '√2 tiene infinitos decimales sin período, por eso es irracional.'),
          c('¿Cuál de estos números es irracional?', 'π', ['0,25', '−7', '4/9'], '0,25 = 1/4 y 4/9 son fracciones; −7 es entero. π no se puede escribir como fracción.'),
          n('Calcula: 3/4 + 1/2 (puedes escribir una fracción o un decimal).', ['5/4', '1.25'], 'Con denominador 4: 3/4 + 2/4 = 5/4 = 1,25.'),
          n('Calcula: √81 − 2³', ['1'], 'Primero las potencias y raíces: 9 − 8 = 1.'),
          n('Calcula: (−2)² · 3 − 10 : (−5)', ['14'], '(−2)² = 4; 4 · 3 = 12; 10 : (−5) = −2; 12 − (−2) = 14.')
        ]
      },
      {
        n: '1.2', t: 'Estadística Descriptiva para datos simples',
        tip: 'Media: suma de los datos entre la cantidad de datos. Mediana: dato central cuando están ordenados. Moda: dato que más se repite. Rango: mayor dato menos menor dato.',
        qs: [
          c('¿Qué medida es el dato que más se repite?', 'La moda', ['La media', 'La mediana', 'El rango'], 'La moda es el dato con mayor frecuencia.'),
          m('Une cada medida con su significado.', [['Media', 'Suma de los datos entre su cantidad'], ['Mediana', 'Valor central de los datos ordenados'], ['Moda', 'Dato con mayor frecuencia'], ['Rango', 'Mayor dato menos menor dato']], 'Cada medida resume los datos de una forma distinta.'),
          n('Datos: 4, 6, 6, 8, 11. ¿Cuál es la moda?', ['6'], 'El 6 aparece dos veces; los demás una sola.'),
          n('Datos: 4, 6, 6, 8, 11. ¿Cuál es la media?', ['7'], '(4 + 6 + 6 + 8 + 11) : 5 = 35 : 5 = 7.'),
          n('Datos: 9, 3, 7, 5. ¿Cuál es la mediana?', ['6'], 'Ordenados: 3, 5, 7, 9. Como son 4 datos, se promedian los dos del centro: (5 + 7) : 2 = 6.'),
          n('La media de 5 notas es 8. Cuatro de ellas son 7, 9, 8 y 10. ¿Cuál es la quinta nota?', ['6'], 'La suma total es 5 · 8 = 40. Las cuatro notas suman 34, así que falta 40 − 34 = 6.')
        ]
      },
      {
        n: '1.3.1', t: 'Distribución de frecuencias para datos agrupados en clases',
        tip: 'Cuando hay muchos datos distintos se agrupan en clases de igual amplitud. La frecuencia absoluta es cuántos datos caen en cada clase; la relativa es esa cantidad entre el total.',
        qs: [
          c('¿Qué indica la frecuencia absoluta de una clase?', 'Cuántos datos caen en esa clase', ['La suma de todos los datos', 'El mayor dato de la clase', 'El punto medio de la clase'], 'Se obtiene contando los datos que pertenecen a la clase.'),
          n('La clase va de 10 a 20. ¿Cuál es su amplitud?', ['10'], 'Amplitud = límite superior − límite inferior = 20 − 10 = 10.'),
          n('¿Cuál es la marca de clase de la clase 20–30?', ['25'], 'La marca de clase es el punto medio: (20 + 30) : 2 = 25.'),
          m('Une cada concepto con su definición.', [['Amplitud', 'Límite superior menos límite inferior'], ['Marca de clase', 'Punto medio de la clase'], ['Frecuencia absoluta', 'Cantidad de datos en la clase'], ['Frecuencia relativa', 'Frecuencia absoluta entre el total']], 'Estos cuatro conceptos son la base de una tabla de frecuencias.'),
          n('Los datos tienen rango 40 y se quieren 5 clases iguales. ¿Qué amplitud tiene cada clase?', ['8'], '40 : 5 = 8.'),
          n('Hay 40 datos y una clase tiene frecuencia absoluta 10. ¿Cuál es su frecuencia relativa (decimal o fracción)?', ['0.25', '1/4'], '10 : 40 = 0,25.'),
          n('Las frecuencias absolutas de 4 clases son 5, 8, 12 y 15. ¿Cuál es la frecuencia acumulada de la tercera clase?', ['25'], 'Se suman las frecuencias hasta esa clase: 5 + 8 + 12 = 25.')
        ]
      },
      {
        n: '1.3.2', t: 'Construcción de histogramas y polígonos de frecuencia',
        tip: 'En un histograma las barras van juntas y su altura es la frecuencia de cada clase. El polígono de frecuencias une los puntos medios de la parte superior de las barras.',
        qs: [
          c('¿Cómo se dibujan las barras de un histograma?', 'Juntas, sin espacio entre ellas', ['Separadas, como en un gráfico de barras común', 'Todas con la misma altura'], 'Las clases son continuas, por eso las barras se tocan.'),
          c('¿Qué se coloca en el eje horizontal de un histograma?', 'Las clases', ['Las frecuencias', 'La media de cada clase'], 'Las clases van en el eje horizontal y las frecuencias en el vertical.'),
          o('Ordena los pasos para construir un histograma.', ['Ordenar los datos y hallar el rango', 'Fijar el número de clases y la amplitud', 'Contar la frecuencia de cada clase', 'Dibujar una barra por clase con su frecuencia como altura'], 'Primero se organizan los datos y al final se dibuja.'),
          c('¿Qué puntos se unen para formar el polígono de frecuencias?', 'Los puntos medios de la parte superior de las barras', ['Las esquinas izquierdas de las barras', 'Los puntos más bajos de cada barra'], 'Esos puntos corresponden a las marcas de clase.'),
          n('Un histograma tiene barras de alturas 3, 7, 12 y 8. ¿Cuántos datos hay en total?', ['30'], '3 + 7 + 12 + 8 = 30.'),
          c('En ese histograma (alturas 3, 7, 12 y 8), ¿cuál es la clase modal?', 'La de la barra más alta, de frecuencia 12', ['La de frecuencia 3', 'La de frecuencia 7', 'La de frecuencia 8'], 'La clase modal es la que tiene mayor frecuencia.')
        ]
      },
      {
        n: '1.3.3', t: 'Medidas de tendencia central para datos agrupados',
        tip: 'Media de datos agrupados = (suma de marca de clase × frecuencia) ÷ total de datos. La clase modal es la de mayor frecuencia.',
        qs: [
          c('Al calcular la media de datos agrupados, ¿qué valor representa a cada clase?', 'Su marca de clase', ['Su límite inferior', 'Su amplitud', 'Su frecuencia relativa'], 'Se supone que los datos de la clase están alrededor de su punto medio.'),
          n('Clases 0–10, 10–20 y 20–30 con frecuencias 4, 6 y 10. ¿Cuál es la marca de clase de 10–20?', ['15'], '(10 + 20) : 2 = 15.'),
          c('En esa misma tabla (frecuencias 4, 6 y 10), ¿cuál es la clase modal?', '20–30', ['0–10', '10–20'], 'La mayor frecuencia es 10, que corresponde a 20–30.'),
          n('En esa tabla, ¿cuántos datos hay en total?', ['20'], '4 + 6 + 10 = 20.'),
          n('Calcula la media de esa tabla (marcas 5, 15 y 25).', ['18'], '5·4 + 15·6 + 25·10 = 20 + 90 + 250 = 360; 360 : 20 = 18.'),
          n('Clases 10–20, 20–30, 30–40 y 40–50 con frecuencias 2, 8, 5 y 5. ¿Cuál es la media? (usa punto o coma decimal)', ['31.5', '63/2'], 'Marcas: 15, 25, 35, 45. 15·2 + 25·8 + 35·5 + 45·5 = 30 + 200 + 175 + 225 = 630; 630 : 20 = 31,5.')
        ]
      }
    ]
  });
})();
