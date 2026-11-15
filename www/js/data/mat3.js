/* Matemática 9.º · Capítulo 3. Sistemas de ecuaciones lineales */
(function () {
  'use strict';
  var C = window.CHISPA, c = C.c, n = C.n, m = C.m, o = C.o;
  C.matChapters = C.matChapters || [];
  C.matChapters.push({
    id: 3,
    name: 'Sistemas de ecuaciones lineales',
    short: 'Sistemas de ecuaciones',
    color: '#ce82ff', dark: '#a560e8',
    subs: [
      {
        n: '3.1', t: 'Ecuaciones lineales con dos variables',
        tip: 'Una ecuación lineal con dos variables tiene la forma ax + by = c. Sus soluciones son pares (x, y) que la cumplen, y hay infinitos pares.',
        qs: [
          c('¿Cuál de estas es una ecuación lineal con dos variables?', '2x + 3y = 7', ['x² + y = 4', 'x · y = 6', 'x² + y² = 1'], 'En una ecuación lineal las variables van solo a la primera potencia y no se multiplican entre sí.'),
          c('¿Es (2, 1) una solución de x + 2y = 4?', 'Sí, porque 2 + 2 · 1 = 4', ['No, porque 2 + 1 no es 4', 'No, porque da 5'], 'Se sustituye x = 2 y y = 1: 2 + 2 = 4 y la igualdad se cumple.'),
          n('En x + y = 10, si x = 3, ¿cuánto vale y?', ['7'], '3 + y = 10, entonces y = 7.'),
          n('En 2x − y = 5, si x = 4, ¿cuánto vale y?', ['3'], '8 − y = 5, entonces y = 3.'),
          n('En 3x + 2y = 12, si y = 0, ¿cuánto vale x?', ['4'], '3x = 12, entonces x = 4.'),
          c('¿Cuántas soluciones tiene una ecuación lineal con dos variables?', 'Infinitas', ['Una sola', 'Exactamente dos', 'Ninguna'], 'Por cada valor de x hay un valor de y que la cumple.')
        ]
      },
      {
        n: '3.2', t: 'Sistemas de ecuaciones lineales con dos variables',
        tip: 'Un sistema es un conjunto de dos ecuaciones. Su solución es el par que cumple las dos a la vez. Puede tener una solución, ninguna o infinitas.',
        qs: [
          c('¿Qué es la solución de un sistema de dos ecuaciones?', 'El par que cumple las dos ecuaciones a la vez', ['El par que cumple solo la primera', 'La suma de las dos ecuaciones'], 'Debe satisfacer ambas ecuaciones simultáneamente.'),
          c('¿Es (3, 1) solución del sistema x + y = 4 y x − y = 2?', 'Sí, cumple las dos ecuaciones', ['Solo cumple la primera', 'Solo cumple la segunda', 'No cumple ninguna'], '3 + 1 = 4 y 3 − 1 = 2: se cumplen ambas.'),
          n('Sistema: x + y = 5 y x − y = 1. ¿Cuánto vale x?', ['3'], 'Al sumar: 2x = 6, entonces x = 3.'),
          n('En ese mismo sistema, ¿cuánto vale y?', ['2'], '3 + y = 5, entonces y = 2.'),
          m('Une cada situación con el número de soluciones.', [['Rectas que se cortan', 'Una solución'], ['Rectas paralelas', 'Ninguna solución'], ['Rectas coincidentes', 'Infinitas soluciones']], 'Cada ecuación lineal es una recta, y la solución es lo que tienen en común.'),
          c('El sistema x + y = 3 y 2x + 2y = 6 tiene…', 'Infinitas soluciones, porque la segunda ecuación es el doble de la primera', ['Una única solución', 'Ninguna solución'], 'Las dos ecuaciones representan la misma recta.')
        ]
      },
      {
        n: '3.3', t: 'Procedimiento gráfico para resolver sistemas',
        tip: 'Se dibuja la recta de cada ecuación. Si se cortan, las coordenadas del punto de corte son la solución del sistema.',
        qs: [
          c('En el método gráfico, ¿dónde está la solución del sistema?', 'En el punto donde se cortan las dos rectas', ['En el origen de coordenadas', 'En el punto donde cada recta corta al eje y'], 'Ese punto pertenece a ambas rectas.'),
          n('Para graficar y = x + 1, ¿cuánto vale y cuando x = 2?', ['3'], 'y = 2 + 1 = 3, así que el punto (2, 3) está en la recta.'),
          n('La recta x + y = 6 corta al eje y cuando x = 0. ¿Cuánto vale y en ese punto?', ['6'], '0 + y = 6.'),
          c('Si dos rectas son paralelas y distintas, el sistema…', 'No tiene solución', ['Tiene una solución', 'Tiene infinitas soluciones'], 'Las rectas nunca se cortan.'),
          n('Las rectas y = x e y = −x + 4 se cortan en un punto. ¿Cuál es su abscisa (valor de x)?', ['2'], 'x = −x + 4 → 2x = 4 → x = 2 (el punto es (2, 2)).'),
          c('¿Cuál es una limitación del método gráfico?', 'Si la solución no es un par entero, el dibujo es poco exacto', ['No sirve cuando hay solución única', 'Solo funciona con números negativos'], 'Por eso también se aprenden los métodos analíticos.')
        ]
      },
      {
        n: '3.4', t: 'Procedimientos analíticos para resolver sistemas',
        tip: 'Los procedimientos analíticos (sustitución y adición-sustracción) transforman el sistema en una ecuación con una sola variable, que ya sabes resolver.',
        qs: [
          c('¿Cuál es la idea de los procedimientos analíticos?', 'Reducir el sistema a una ecuación con una sola variable', ['Dibujar las dos rectas', 'Multiplicar las dos soluciones'], 'Primero se halla una variable y luego la otra.'),
          m('Une cada método con su idea.', [['Sustitución', 'Despejar una variable y sustituirla en la otra ecuación'], ['Adición-sustracción', 'Sumar o restar las ecuaciones para eliminar una variable'], ['Gráfico', 'Hallar el punto de corte de dos rectas']], 'Los tres métodos llegan a la misma solución.'),
          c('En el sistema x = 2y y x + y = 9, ¿qué método resulta cómodo?', 'Sustitución, porque x ya está despejada', ['Gráfico, porque no hay números', 'Ninguno se puede aplicar'], 'Basta reemplazar x por 2y en la segunda ecuación.'),
          n('Al sumar x + y = 7 con x − y = 3, se obtiene 2x = …', ['10'], '(x + y) + (x − y) = 7 + 3, luego 2x = 10.'),
          n('En ese sistema (x + y = 7 y x − y = 3), ¿cuánto vale x?', ['5'], '2x = 10, entonces x = 5.'),
          n('En ese sistema, ¿cuánto vale y?', ['2'], '5 + y = 7, entonces y = 2.')
        ]
      },
      {
        n: '3.4.1', t: 'Procedimiento de sustitución',
        tip: 'Pasos: despeja una variable en una ecuación, sustitúyela en la otra, resuelve la ecuación que queda, calcula la otra variable y comprueba.',
        qs: [
          o('Ordena los pasos del procedimiento de sustitución.', ['Despejar una variable en una de las ecuaciones', 'Sustituir la expresión en la otra ecuación', 'Resolver la ecuación con una variable', 'Calcular la otra variable y comprobar'], 'Siempre se termina comprobando la solución en las dos ecuaciones.'),
          n('En el sistema y = 2x y x + y = 9, al sustituir resulta 3x = 9. ¿Cuánto vale x?', ['3'], 'x + 2x = 9 → 3x = 9 → x = 3.'),
          n('En ese sistema, ¿cuánto vale y?', ['6'], 'y = 2 · 3 = 6.'),
          n('Sistema: x = y + 1 y 2x + y = 11. ¿Cuánto vale y?', ['3'], '2(y + 1) + y = 11 → 3y + 2 = 11 → y = 3.'),
          n('En ese sistema (x = y + 1 y 2x + y = 11), ¿cuánto vale x?', ['4'], 'x = 3 + 1 = 4.'),
          n('Sistema: x + 2y = 8 y 3x − y = 3. Despejando x = 8 − 2y, ¿cuánto vale y?', ['3'], '3(8 − 2y) − y = 3 → 24 − 7y = 3 → y = 3 (y entonces x = 2).')
        ]
      },
      {
        n: '3.4.2', t: 'Procedimiento de adición-sustracción',
        tip: 'Se suman o restan las ecuaciones para que una variable desaparezca. Si hace falta, antes se multiplica una ecuación para igualar los coeficientes.',
        qs: [
          c('Para eliminar y en x + y = 7 y x − y = 3, hay que…', 'Sumar las dos ecuaciones', ['Restar las dos ecuaciones', 'Multiplicar las dos ecuaciones'], '+y y −y se anulan al sumar. Restando se eliminaría x.'),
          n('En 2x + y = 8 y x − y = 1, al sumar resulta 3x = …', ['9'], '(2x + y) + (x − y) = 8 + 1 → 3x = 9.'),
          n('En ese sistema (2x + y = 8 y x − y = 1), ¿cuánto vale y?', ['2'], 'x = 3 y 2 · 3 + y = 8, entonces y = 2.'),
          c('Para eliminar x en 2x + 3y = 12 y x + y = 5, conviene…', 'Multiplicar la segunda por 2 y restar', ['Sumar sin multiplicar', 'Multiplicar la segunda por 3 y restar'], 'Así las dos ecuaciones tienen 2x y al restar desaparece x.'),
          n('Sistema: x + y = 5 y 2x + 3y = 12. Si multiplicas la primera por 2 y restas, ¿cuánto vale y?', ['2'], '2x + 2y = 10; restando: (2x + 3y) − (2x + 2y) = 12 − 10 → y = 2.'),
          n('En ese sistema (x + y = 5 y 2x + 3y = 12), ¿cuánto vale x?', ['3'], 'x = 5 − 2 = 3.'),
          n('Sistema: 3x + 2y = 16 y 2x − 3y = 2. ¿Cuánto vale x?', ['4'], 'Multiplica la primera por 3 y la segunda por 2: 9x + 6y = 48 y 4x − 6y = 4. Sumando: 13x = 52, x = 4 (y = 2).')
        ]
      },
      {
        n: '3.5', t: 'Resolución de problemas que conducen a sistemas de ecuaciones',
        tip: 'Para resolver un problema: define las dos variables, escribe dos ecuaciones con los datos, resuelve el sistema y responde comprobando que la solución tiene sentido.',
        qs: [
          o('Ordena los pasos para resolver un problema con un sistema.', ['Leer y entender el problema', 'Definir las dos variables', 'Plantear el sistema de ecuaciones', 'Resolver el sistema', 'Comprobar y escribir la respuesta'], 'Plantear bien el sistema es la parte más importante.'),
          n('La suma de dos números es 20 y su diferencia es 4. ¿Cuál es el número mayor?', ['12'], 'x + y = 20 y x − y = 4: 2x = 24, x = 12.'),
          n('En un aula hay 30 estudiantes y hay 4 niñas más que niños. ¿Cuántas niñas hay?', ['17'], 'n + a = 30 y a = n + 4: 2n + 4 = 30, n = 13 y a = 17.'),
          n('Un bolígrafo y un lápiz cuestan 5 pesos; 2 bolígrafos y un lápiz cuestan 8 pesos. ¿Cuánto cuesta el bolígrafo?', ['3'], 'Al restar: (2b + l) − (b + l) = 8 − 5, luego b = 3 (y el lápiz cuesta 2).'),
          n('El perímetro de un rectángulo es 36 cm y su largo excede en 4 cm al ancho. ¿Cuánto mide el largo?', ['11'], '2(a + l) = 36 → a + l = 18 y l = a + 4: 2a + 4 = 18, a = 7 y l = 11.'),
          n('Tres entradas de adulto y dos de niño cuestan 19 pesos; dos de adulto y tres de niño cuestan 16 pesos. ¿Cuánto cuesta la de adulto?', ['5'], '3a + 2n = 19 y 2a + 3n = 16. Multiplica por 3 y por 2: 9a + 6n = 57 y 4a + 6n = 32; restando 5a = 25, a = 5 (y n = 2).')
        ]
      }
    ]
  });
})();
