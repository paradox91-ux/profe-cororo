/* Matemática 9.º · Capítulo 4. Trabajo con variables, ecuaciones de segundo grado y funciones cuadráticas */
(function () {
  'use strict';
  var C = window.CHISPA, c = C.c, n = C.n, m = C.m, o = C.o;
  C.matChapters = C.matChapters || [];
  C.matChapters.push({
    id: 4,
    name: 'Trabajo con variables, ecuaciones de segundo grado y funciones cuadráticas',
    short: 'Ecuaciones y funciones cuadráticas',
    color: '#ff9600', dark: '#e08600',
    subs: [
      {
        n: '4.1', t: 'Repaso sobre el trabajo con variables',
        tip: 'Los términos semejantes tienen la misma parte literal y se pueden reducir sumando sus coeficientes. El grado de un polinomio es el mayor exponente de la variable.',
        qs: [
          c('¿Qué son términos semejantes?', 'Los que tienen la misma parte literal', ['Los que tienen el mismo coeficiente', 'Los que tienen distinto exponente'], 'Por ejemplo 3x y 5x son semejantes; 3x y 5x² no.'),
          n('Calcula el valor numérico de 3x − 2 para x = 4.', ['10'], '3 · 4 − 2 = 12 − 2 = 10.'),
          n('Reduce: 5a + 3a − 2a (escribe el resultado, por ejemplo 4a).', ['6a'], 'Se suman los coeficientes: 5 + 3 − 2 = 6.'),
          c('¿Cuál es el grado del polinomio x³ + 2x − 5?', '3', ['1', '2', '5'], 'El mayor exponente de la variable es 3.'),
          n('Calcula y reduce: (2x + 3) + (x − 5)', ['3x-2', '-2+3x'], '2x + x = 3x y 3 − 5 = −2.'),
          n('Calcula y reduce: 2(x − 3) − (x − 4)', ['x-2', '-2+x'], '2x − 6 − x + 4 = x − 2. Cuidado con el signo menos delante del paréntesis.')
        ]
      },
      {
        n: '4.2.1', t: 'Cuadrado de la suma y de la diferencia de dos términos',
        tip: '(a + b)² = a² + 2ab + b²  y  (a − b)² = a² − 2ab + b². El doble producto es la parte que más se olvida.',
        qs: [
          c('¿A qué es igual (a + b)²?', 'a² + 2ab + b²', ['a² + b²', 'a² + ab + b²', '2a + 2b'], 'Es el cuadrado del primero, más el doble producto, más el cuadrado del segundo.'),
          c('Calcula (x + 3)²', 'x² + 6x + 9', ['x² + 9', 'x² + 3x + 9', 'x² + 6x + 6'], 'x² + 2 · x · 3 + 3² = x² + 6x + 9.'),
          c('Calcula (y − 4)²', 'y² − 8y + 16', ['y² − 16', 'y² − 4y + 16', 'y² + 8y + 16'], 'y² − 2 · y · 4 + 4² = y² − 8y + 16.'),
          n('Calcula 51² con (50 + 1)².', ['2601'], '2500 + 100 + 1 = 2601.'),
          n('Calcula 99² con (100 − 1)².', ['9801'], '10 000 − 200 + 1 = 9801.'),
          c('La expresión x² + 10x + 25 se puede escribir como…', '(x + 5)²', ['(x + 10)²', '(x + 5)(x − 5)', 'x(x + 35)'], 'x² + 2 · x · 5 + 5² = (x + 5)².')
        ]
      },
      {
        n: '4.2.2', t: 'Suma por la diferencia de dos términos',
        tip: '(a + b)(a − b) = a² − b². Los términos del medio se anulan y queda una diferencia de cuadrados.',
        qs: [
          c('¿A qué es igual (a + b)(a − b)?', 'a² − b²', ['a² + b²', 'a² − 2ab + b²', '2a'], 'Los productos cruzados +ab y −ab se cancelan.'),
          c('Calcula (x + 5)(x − 5)', 'x² − 25', ['x² + 25', 'x² − 10x + 25', 'x² − 5'], 'x² − 5² = x² − 25.'),
          c('Calcula (2y − 3)(2y + 3)', '4y² − 9', ['2y² − 9', '4y² − 6', '4y² + 9'], '(2y)² − 3² = 4y² − 9.'),
          n('Calcula 52 · 48 con (50 + 2)(50 − 2).', ['2496'], '2500 − 4 = 2496.'),
          n('Calcula 103 · 97 con (100 + 3)(100 − 3).', ['9991'], '10 000 − 9 = 9991.'),
          c('Calcula (x + 0,2)(x − 0,2)', 'x² − 0,04', ['x² − 0,4', 'x² − 0,2', 'x² + 0,04'], '0,2² = 0,04.')
        ]
      },
      {
        n: '4.2.3', t: 'Producto de dos binomios que tienen un término común',
        tip: '(x + a)(x + b) = x² + (a + b)x + ab. Se suman los números para el término en x y se multiplican para el término independiente.',
        qs: [
          c('¿A qué es igual (x + a)(x + b)?', 'x² + (a + b)x + ab', ['x² + abx + a + b', 'x² + a² + b²', 'x² + (a · b)x + a + b'], 'La suma da el coeficiente de x y el producto da el término independiente.'),
          c('Calcula (x + 2)(x + 5)', 'x² + 7x + 10', ['x² + 10x + 7', 'x² + 7x + 7', 'x² + 3x + 10'], '2 + 5 = 7 y 2 · 5 = 10.'),
          c('Calcula (x − 3)(x + 4)', 'x² + x − 12', ['x² − x − 12', 'x² + 7x − 12', 'x² + x + 12'], '−3 + 4 = 1 y (−3) · 4 = −12.'),
          c('Calcula (x − 6)(x − 2)', 'x² − 8x + 12', ['x² − 8x − 12', 'x² + 8x + 12', 'x² − 4x + 12'], '−6 + (−2) = −8 y (−6)(−2) = 12.'),
          n('Si (x + 4)(x + b) = x² + 9x + 20, ¿cuánto vale b?', ['5'], '4 + b = 9, así que b = 5 (y 4 · 5 = 20).'),
          n('Calcula 53 · 52 con (50 + 3)(50 + 2).', ['2756'], '2500 + 5 · 50 + 6 = 2500 + 250 + 6 = 2756.')
        ]
      },
      {
        n: '4.3.1', t: 'Extracción del factor común',
        tip: 'Factorizar es escribir una expresión como producto. Con el factor común se extrae el mayor número y la menor potencia de cada letra que se repiten en todos los términos.',
        qs: [
          c('¿Cuál es el factor común numérico de 6x + 9?', '3', ['6', '9', 'x'], '3 es el mayor número que divide a 6 y a 9.'),
          c('Factoriza 4x + 8', '4(x + 2)', ['4(x + 8)', 'x(4 + 8)', '4(x + 4)'], '4x : 4 = x y 8 : 4 = 2.'),
          c('Factoriza x² + 3x', 'x(x + 3)', ['x²(1 + 3)', '3(x² + x)', 'x(x + 3x)'], 'x² : x = x y 3x : x = 3.'),
          c('Extrae el mayor factor común de 6m²n + 8mn', '2mn(3m + 4)', ['2m(3mn + 4n)', '6mn(m + 8)', 'mn(6m + 8)'], 'El mayor factor común es 2mn: 6m²n : 2mn = 3m y 8mn : 2mn = 4.'),
          c('Factoriza x⁶ − x³', 'x³(x³ − 1)', ['x³(x² − 1)', 'x(x⁵ − x²)', 'x⁶(1 − x³)'], 'Se toma la menor potencia, x³: x⁶ : x³ = x³ y x³ : x³ = 1.'),
          n('Calcula 37 · 19 + 37 · 81 sacando factor común.', ['3700'], '37(19 + 81) = 37 · 100 = 3700.')
        ]
      },
      {
        n: '4.3.2', t: 'Diferencia de dos cuadrados',
        tip: 'a² − b² = (a + b)(a − b). Se reconoce porque hay dos cuadrados perfectos separados por un signo menos.',
        qs: [
          c('¿Cómo se factoriza a² − b²?', '(a + b)(a − b)', ['(a − b)²', '(a + b)²', '(a² + b²)'], 'Es la regla de la suma por la diferencia, al revés.'),
          c('Factoriza x² − 49', '(x + 7)(x − 7)', ['(x − 7)²', '(x + 7)²', '(x − 49)(x + 1)'], 'x² − 7² = (x + 7)(x − 7).'),
          c('Factoriza 9y² − 16', '(3y + 4)(3y − 4)', ['(3y − 4)²', '(9y + 16)(y − 1)', '(3y + 16)(3y − 1)'], '(3y)² − 4² = (3y + 4)(3y − 4).'),
          c('Factoriza completamente 2m² − 18', '2(m + 3)(m − 3)', ['(2m + 3)(2m − 3)', '2(m² − 9)', '2(m − 3)²'], 'Primero el factor común 2: 2(m² − 9); luego diferencia de cuadrados.'),
          n('Calcula 75² − 25² con una diferencia de cuadrados.', ['5000'], '(75 + 25)(75 − 25) = 100 · 50 = 5000.'),
          c('Factoriza (p + 5)² − 36q⁶', '(p + 5 + 6q³)(p + 5 − 6q³)', ['(p + 5 − 6q³)²', '(p + 5 + 36q³)(p + 5 − 36q³)', '(p − 1)(p + 11)'], '36q⁶ = (6q³)², así que es una diferencia de cuadrados con a = p + 5 y b = 6q³.')
        ]
      },
      {
        n: '4.3.3', t: 'Descomposición factorial de trinomios',
        tip: 'Trinomio cuadrado perfecto: a² ± 2ab + b² = (a ± b)². Trinomio x² + bx + c: busca dos números que sumen b y se multipliquen para dar c.',
        qs: [
          c('¿Cómo se factoriza x² + 6x + 9?', '(x + 3)²', ['(x + 9)(x − 1)', '(x + 3)(x − 3)', '(x + 6)²'], 'Es un cuadrado perfecto: x² + 2 · x · 3 + 3².'),
          c('Factoriza x² − 5x + 6', '(x − 2)(x − 3)', ['(x + 2)(x + 3)', '(x − 1)(x − 6)', '(x − 5)(x + 6)'], 'Dos números que sumen −5 y multipliquen 6: −2 y −3.'),
          c('Factoriza x² + 2x − 15', '(x + 5)(x − 3)', ['(x − 5)(x + 3)', '(x + 15)(x − 1)', '(x + 3)(x + 5)'], 'Suman 2 y multiplican −15: 5 y −3.'),
          c('Factoriza x² − 18x + 80', '(x − 8)(x − 10)', ['(x − 8)(x + 10)', '(x − 16)(x − 5)', '(x + 8)(x + 10)'], '−8 + (−10) = −18 y (−8)(−10) = 80.'),
          c('Factoriza a²b² − 14abc + 49c²', '(ab − 7c)²', ['(ab + 7c)²', '(ab − 7c)(ab + 7c)', '(ab − 14c)²'], '(ab)² − 2 · ab · 7c + (7c)² = (ab − 7c)².'),
          c('Factoriza 6m² + m − 15', '(3m + 5)(2m − 3)', ['(3m − 5)(2m + 3)', '(6m − 5)(m + 3)', '(3m + 3)(2m − 5)'], 'Al multiplicar: 6m² − 9m + 10m − 15 = 6m² + m − 15.')
        ]
      },
      {
        n: '4.4', t: 'Ecuaciones cuadráticas o de segundo grado',
        tip: 'Una ecuación cuadrática tiene la forma ax² + bx + c = 0 con a ≠ 0. Si el producto de dos factores es 0, alguno de ellos es 0: así se resuelve al factorizar.',
        qs: [
          c('¿Cuál de estas es una ecuación cuadrática?', 'x² − 5x + 6 = 0', ['2x + 6 = 0', 'x³ − 1 = 0', '3x − y = 4'], 'Su mayor exponente es 2.'),
          m('Une cada forma con su nombre.', [['ax² + c = 0', 'Incompleta, sin término en x'], ['ax² + bx = 0', 'Incompleta, sin término independiente'], ['ax² + bx + c = 0', 'Completa']], 'Las incompletas se resuelven más fácilmente.'),
          n('Resuelve x² = 49. Escribe la solución positiva.', ['7'], 'x = ±√49, es decir 7 o −7.'),
          n('Resuelve x² − 5x = 0. Escribe la solución distinta de 0.', ['5'], 'x(x − 5) = 0, así que x = 0 o x = 5.'),
          c('Soluciones de (x − 2)(x + 3) = 0', 'x = 2 y x = −3', ['x = −2 y x = 3', 'x = 2 y x = 3', 'x = −2 y x = −3'], 'Cada factor igualado a cero: x − 2 = 0 o x + 3 = 0.'),
          c('Soluciones de x² − 5x + 6 = 0', 'x = 2 y x = 3', ['x = −2 y x = −3', 'x = 1 y x = 6', 'x = −1 y x = 6'], 'Se factoriza (x − 2)(x − 3) = 0.')
        ]
      },
      {
        n: '4.4.1', t: 'Ecuación general para la resolución de ecuaciones de segundo grado',
        tip: 'Fórmula general: x = (−b ± √(b² − 4ac)) / 2a. El discriminante D = b² − 4ac dice cuántas soluciones reales hay.',
        qs: [
          c('¿Cuál es la fórmula general de la ecuación ax² + bx + c = 0?', 'x = (−b ± √(b² − 4ac)) / 2a', ['x = (b ± √(b² − 4ac)) / a', 'x = (−b ± √(b² + 4ac)) / 2a', 'x = −b / 2a'], 'Es la fórmula que sirve para cualquier ecuación cuadrática.'),
          m('Une el discriminante con el número de soluciones.', [['D > 0', 'Dos soluciones reales distintas'], ['D = 0', 'Una solución real (doble)'], ['D < 0', 'Ninguna solución real']], 'Si D es negativo no existe la raíz cuadrada en los reales.'),
          n('Calcula el discriminante de x² + 2x − 3 = 0.', ['16'], 'D = 2² − 4 · 1 · (−3) = 4 + 12 = 16.'),
          n('Resuelve x² + 2x − 3 = 0. Escribe la solución positiva.', ['1'], 'x = (−2 ± 4) / 2, es decir x = 1 o x = −3.'),
          n('Calcula el discriminante de x² + x + 1 = 0.', ['-3'], 'D = 1 − 4 = −3. Como es negativo, no tiene soluciones reales.'),
          n('Resuelve 2x² − 3x − 2 = 0. Escribe la solución positiva.', ['2'], 'D = 9 + 16 = 25; x = (3 ± 5) / 4, es decir x = 2 o x = −1/2.'),
          c('La ecuación x² − 6x + 9 = 0 tiene…', 'Una solución doble, x = 3', ['Dos soluciones distintas', 'Ninguna solución real', 'Una solución, x = −3'], 'D = 36 − 36 = 0; x = 6/2 = 3.')
        ]
      },
      {
        n: '4.4.2', t: 'Despeje de variables en ecuaciones',
        tip: 'Despejar es dejar una variable sola en un miembro usando operaciones inversas, igual que al resolver una ecuación.',
        qs: [
          c('Despeja b en A = (b · h) / 2', 'b = 2A / h', ['b = A · h / 2', 'b = A / (2h)', 'b = 2h / A'], 'Se multiplica por 2 y se divide entre h.'),
          n('En V = a · b · c, si V = 60, a = 3 y b = 4, ¿cuánto vale c?', ['5'], '60 = 12c, entonces c = 5.'),
          c('Despeja r en A = πr² (r > 0)', 'r = √(A / π)', ['r = A / π', 'r = A / (2π)', 'r = (A / π)²'], 'Se divide entre π y luego se extrae la raíz cuadrada.'),
          n('En x² = y + 5, si y = 20, ¿cuánto vale x (positivo)?', ['5'], 'x² = 25, así que x = 5.'),
          c('Despeja c en a² + b² = c² (c > 0)', 'c = √(a² + b²)', ['c = a + b', 'c = a² + b²', 'c = √(a² − b²)'], 'Se extrae la raíz cuadrada de ambos miembros.'),
          n('En h = ½ · g · t², si g = 10 y h = 20, ¿cuánto vale t (positivo)?', ['2'], '20 = 5t², t² = 4 y t = 2.')
        ]
      },
      {
        n: '4.4.3', t: 'Problemas que conducen a ecuaciones cuadráticas',
        tip: 'Define la incógnita, escribe la ecuación cuadrática, resuélvela y descarta las soluciones que no tienen sentido en el problema (por ejemplo, longitudes negativas).',
        qs: [
          o('Ordena los pasos para resolver un problema con una ecuación cuadrática.', ['Definir la incógnita', 'Plantear la ecuación cuadrática', 'Resolver la ecuación', 'Descartar las soluciones sin sentido', 'Escribir la respuesta'], 'Las dos soluciones de la ecuación no siempre sirven para el problema.'),
          n('Un cuadrado tiene un área de 81 cm². ¿Cuánto mide su lado en cm?', ['9'], 'x² = 81, x = 9 (el −9 no sirve para una longitud).'),
          n('El cuadrado de un número positivo es igual al número más 12. ¿Cuál es ese número?', ['4'], 'x² = x + 12 → x² − x − 12 = 0 → (x − 4)(x + 3) = 0; solo sirve x = 4.'),
          n('Dos números positivos consecutivos tienen producto 56. ¿Cuál es el menor?', ['7'], 'x(x + 1) = 56 → x² + x − 56 = 0 → (x + 8)(x − 7) = 0; x = 7.'),
          n('El largo de un rectángulo excede en 3 cm a su ancho y su área es 40 cm². ¿Cuánto mide el ancho en cm?', ['5'], 'x(x + 3) = 40 → x² + 3x − 40 = 0 → (x + 8)(x − 5) = 0; x = 5.'),
          c('Al resolver un problema sobre el lado de un cuadrado se obtuvo x = 4 y x = −5. ¿Qué se responde?', 'El lado mide 4, porque una longitud no puede ser negativa', ['El lado mide −5', 'Hay dos cuadrados posibles', 'El problema no tiene solución'], 'Hay que comprobar cada solución con el contexto del problema.')
        ]
      },
      {
        n: '4.5', t: 'Repaso sobre la función lineal',
        tip: 'La función lineal y = mx + n tiene pendiente m y corta al eje y en (0, n). Si m > 0 es creciente y si m < 0 es decreciente. Su cero es x = −n / m.',
        qs: [
          c('En y = 2x + 3, ¿cuál es la pendiente?', '2', ['3', '5', '−3'], 'En y = mx + n, la pendiente es m, el número que multiplica a x.'),
          c('¿En qué punto corta al eje y la recta y = 2x + 3?', '(0, 3)', ['(3, 0)', '(0, 2)', '(2, 3)'], 'Cuando x = 0, y = n = 3.'),
          n('Calcula el cero de y = 2x − 6.', ['3'], '0 = 2x − 6 → x = 3.'),
          c('La función y = −x + 4 es…', 'Decreciente, porque la pendiente es negativa', ['Creciente, porque corta al eje y en 4', 'Constante', 'Creciente, porque 4 > 0'], 'Con m = −1 < 0, al aumentar x disminuye y.'),
          n('Una recta pasa por (0, 1) y (2, 5). ¿Cuál es su pendiente?', ['2'], 'm = (5 − 1) / (2 − 0) = 2.'),
          n('En y = 3x − 2, ¿cuánto vale y cuando x = −1?', ['-5'], '3 · (−1) − 2 = −5.')
        ]
      },
      {
        n: '4.6', t: 'El concepto de función cuadrática',
        tip: 'Una función cuadrática tiene la forma y = ax² + bx + c con a ≠ 0. Su gráfica es una parábola y su dominio son todos los números reales.',
        qs: [
          c('¿Cuál de estas es una función cuadrática?', 'y = x² − 4x + 3', ['y = 3x + 1', 'y = 1 / x', 'y = 2x'], 'Tiene un término x² y a ≠ 0.'),
          c('¿Cómo se llama la gráfica de una función cuadrática?', 'Parábola', ['Recta', 'Hipérbola', 'Circunferencia'], 'Tiene forma de «U» o de «U» invertida.'),
          n('Si y = x² − 4, ¿cuánto vale y cuando x = 3?', ['5'], '9 − 4 = 5.'),
          n('Si y = −x² + 2x, ¿cuánto vale y cuando x = 2?', ['0'], '−4 + 4 = 0.'),
          c('¿Cuál es el dominio de una función cuadrática?', 'Todos los números reales', ['Solo los naturales', 'Solo los números positivos', 'Solo los enteros'], 'Se puede sustituir cualquier número real en x.'),
          m('Une cada función con su tipo.', [['y = 2x + 1', 'Función lineal'], ['y = x² + 1', 'Función cuadrática'], ['y = 5', 'Función constante']], 'El tipo depende del mayor exponente de x.')
        ]
      },
      {
        n: '4.6.1', t: 'Representación gráfica de y = ax² y sus propiedades',
        tip: 'La parábola y = ax² tiene vértice (0, 0) y eje de simetría x = 0. Si a > 0 abre hacia arriba (mínimo); si a < 0, hacia abajo (máximo). Cuanto mayor es |a|, más estrecha.',
        qs: [
          c('¿Cuál es el vértice de y = ax²?', '(0, 0)', ['(a, 0)', '(0, a)', '(1, a)'], 'La parábola siempre pasa por el origen.'),
          c('La parábola y = 3x² abre hacia…', 'Arriba, porque a > 0', ['Abajo, porque a > 0', 'Abajo, porque 3 es impar', 'La derecha'], 'Con a positivo la parábola se abre hacia arriba.'),
          c('Para y = −2x², ¿qué valor extremo tiene?', 'Un máximo igual a 0', ['Un mínimo igual a 0', 'Un máximo igual a −2', 'Un mínimo igual a −2'], 'Abre hacia abajo y su punto más alto es el vértice (0, 0).'),
          n('Para y = 2x², ¿cuánto vale y cuando x = −3?', ['18'], '2 · (−3)² = 2 · 9 = 18.'),
          c('¿Cuál de estas parábolas es la más estrecha?', 'y = 5x²', ['y = x²', 'y = 0,5x²'], 'Cuanto mayor es |a|, más cerrada es la parábola.'),
          n('La parábola y = ax² pasa por el punto (2, 12). ¿Cuánto vale a?', ['3'], '12 = a · 4, entonces a = 3.')
        ]
      },
      {
        n: '4.6.2', t: 'La función cuadrática y = ax² + bx + c',
        tip: 'Su vértice tiene abscisa x = −b / (2a); la ordenada se calcula sustituyendo. Corta al eje y en (0, c) y sus ceros son las soluciones de ax² + bx + c = 0.',
        qs: [
          c('¿Cuál es la abscisa del vértice de y = ax² + bx + c?', '−b / (2a)', ['b / (2a)', '−b / a', 'c / a'], 'Se obtiene en el punto medio entre los ceros.'),
          n('En y = x² − 6x + 5, ¿cuál es la abscisa del vértice?', ['3'], 'x = −(−6) / (2 · 1) = 3.'),
          n('En y = x² − 6x + 5, ¿cuál es la ordenada del vértice?', ['-4'], 'y = 3² − 6 · 3 + 5 = 9 − 18 + 5 = −4.'),
          n('¿En qué ordenada corta y = x² − 6x + 5 al eje y?', ['5'], 'Cuando x = 0, y = c = 5.'),
          n('Calcula los ceros de y = x² − 6x + 5. Escribe el mayor.', ['5'], '(x − 1)(x − 5) = 0, así que x = 1 o x = 5.'),
          c('La función y = −x² + 4x tiene…', 'Un máximo en x = 2 con valor 4', ['Un mínimo en x = 2 con valor 4', 'Un máximo en x = 4', 'Un mínimo en x = −2'], 'a < 0 abre hacia abajo; x = −4 / (−2) = 2 y y = −4 + 8 = 4.')
        ]
      },
      {
        n: '4.6.3', t: 'Traslación de la parábola en la dirección de los ejes',
        tip: 'La gráfica de y = a(x − h)² + k es la de y = ax² trasladada h unidades en x y k unidades en y. Su vértice es (h, k).',
        qs: [
          c('¿Cuál es el vértice de y = (x − 3)²?', '(3, 0)', ['(−3, 0)', '(0, 3)', '(0, −3)'], 'Con y = a(x − h)² + k, el vértice es (h, k) = (3, 0).'),
          c('La parábola y = x² + 2 es y = x² desplazada…', '2 unidades hacia arriba', ['2 unidades hacia abajo', '2 unidades a la derecha', '2 unidades a la izquierda'], 'Sumar k mueve la parábola en vertical.'),
          c('¿Cuál es el vértice de y = (x + 1)² − 4?', '(−1, −4)', ['(1, −4)', '(−1, 4)', '(1, 4)'], 'x + 1 = x − (−1), así que h = −1 y k = −4.'),
          m('Une cada función con su desplazamiento respecto a y = x².', [['y = x² − 3', 'Baja 3 unidades'], ['y = (x − 3)²', 'Se mueve 3 a la derecha'], ['y = (x + 3)²', 'Se mueve 3 a la izquierda'], ['y = x² + 3', 'Sube 3 unidades']], 'El cambio dentro del paréntesis es horizontal y con signo contrario.'),
          n('¿Cuál es el valor mínimo de y = (x − 2)² + 1?', ['1'], 'El vértice es (2, 1) y la parábola abre hacia arriba.'),
          n('¿Cuál es el valor máximo de y = −(x − 1)² + 5?', ['5'], 'El vértice es (1, 5) y abre hacia abajo.'),
          c('Al completar cuadrados, y = x² − 4x + 7 se escribe…', 'y = (x − 2)² + 3', ['y = (x − 2)² + 7', 'y = (x + 2)² + 3', 'y = (x − 4)² + 7'], '(x − 2)² = x² − 4x + 4; a 7 le sobran 3.')
        ]
      }
    ]
  });
})();
