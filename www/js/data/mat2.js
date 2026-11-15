/* Matemática 9.º · Capítulo 2. Geometría Plana */
(function () {
  'use strict';
  var C = window.CHISPA, c = C.c, n = C.n, m = C.m;
  C.matChapters = C.matChapters || [];
  C.matChapters.push({
    id: 2,
    name: 'Geometría Plana',
    short: 'Geometría plana',
    color: '#1cb0f6', dark: '#1899d6',
    subs: [
      {
        n: '2.1.1', t: 'Razones y proporciones entre longitudes de segmentos',
        tip: 'La razón entre dos segmentos es el cociente de sus longitudes (en la misma unidad). Una proporción es una igualdad de razones: a/b = c/d, y entonces a·d = b·c.',
        qs: [
          c('Dos segmentos miden 6 cm y 9 cm. ¿Cuál es la razón del primero al segundo?', '2/3', ['3/2', '1/3', '6'], '6/9 se simplifica dividiendo entre 3: 2/3.'),
          n('Resuelve la proporción: x/6 = 4/3', ['8'], 'Producto cruzado: 3x = 24, así que x = 8.'),
          c('En la proporción a/b = c/d, ¿qué igualdad se cumple?', 'a · d = b · c', ['a · b = c · d', 'a + d = b + c', 'a · c = b · d'], 'Es la propiedad fundamental: el producto de los extremos es igual al de los medios.'),
          n('AB = 15 cm y CD = 10 cm. ¿Cuál es la razón AB : CD? (decimal o fracción)', ['1.5', '3/2'], '15/10 = 3/2 = 1,5.'),
          n('La razón entre dos segmentos es 3/5 y el segundo mide 20 cm. ¿Cuánto mide el primero?', ['12'], 'x/20 = 3/5, luego x = 20 · 3 : 5 = 12.'),
          n('Dos segmentos suman 36 cm y su razón (menor a mayor) es 4/5. ¿Cuánto mide el mayor?', ['20'], 'Las partes son 4k y 5k: 9k = 36, k = 4. El mayor mide 5 · 4 = 20 cm.')
        ]
      },
      {
        n: '2.1.2', t: 'Teorema de las transversales',
        tip: 'Si varias rectas paralelas son cortadas por dos transversales, los segmentos que determinan sobre una de ellas son proporcionales a los correspondientes de la otra.',
        qs: [
          c('¿Qué dice el teorema de las transversales?', 'Rectas paralelas cortadas por transversales determinan segmentos proporcionales', ['Los ángulos de un triángulo suman 180°', 'En un triángulo rectángulo a² + b² = c²'], 'Es el teorema de Tales: paralelas ⇒ segmentos proporcionales.'),
          c('¿Qué condición es necesaria para aplicarlo?', 'Las rectas que cortan a las transversales deben ser paralelas', ['Las transversales deben ser perpendiculares', 'Todos los segmentos deben ser iguales'], 'Sin paralelismo no hay proporcionalidad garantizada.'),
          n('Tres paralelas cortan a dos transversales. En la primera, AB = 4 y BC = 6; en la segunda, A′B′ = 6. Halla B′C′.', ['9'], 'AB/BC = A′B′/B′C′ → 4/6 = 6/x → 4x = 36 → x = 9.'),
          n('AB = 3, BC = 5 y A′B′ = 9. Halla B′C′.', ['15'], '3/5 = 9/x → 3x = 45 → x = 15.'),
          n('En el triángulo ABC, DE ∥ BC con D en AB y E en AC. Si AD = 2, DB = 3 y AE = 4, ¿cuánto mide EC?', ['6'], 'AD/DB = AE/EC → 2/3 = 4/x → 2x = 12 → x = 6.'),
          n('En el triángulo ABC, DE ∥ BC. AD = 5, DB = 10 y AC = 21. ¿Cuánto mide AE?', ['7'], 'AB = 15. AD/AB = AE/AC → 5/15 = x/21 → x = 7.')
        ]
      },
      {
        n: '2.1.3', t: 'Aplicaciones del teorema de las transversales',
        tip: 'La proporcionalidad permite calcular alturas y distancias que no se pueden medir directamente, por ejemplo con sombras (los rayos del Sol llegan paralelos) o con escalas de mapas.',
        qs: [
          c('Para hallar la altura de un árbol con su sombra se usa…', 'La proporción entre alturas y sombras a la misma hora', ['La suma de la sombra y la altura de una persona', 'La diferencia entre las dos sombras'], 'A la misma hora los rayos solares son paralelos y se forman triángulos semejantes.'),
          n('Un poste de 2 m proyecta una sombra de 3 m. A la misma hora, un árbol proyecta 12 m. ¿Qué altura tiene el árbol (en metros)?', ['8'], '2/3 = h/12 → h = 24 : 3 = 8.'),
          n('Se divide un segmento de 20 cm en razón 1 : 3. ¿Cuánto mide la parte menor?', ['5'], 'Hay 1 + 3 = 4 partes iguales de 5 cm; la menor es 1 parte = 5 cm.'),
          n('Un segmento de 35 cm se divide en razón 2 : 5. ¿Cuánto mide la parte mayor?', ['25'], '2 + 5 = 7 partes; cada una mide 5 cm; la mayor mide 5 · 5 = 25 cm.'),
          n('Una persona de 1,6 m proyecta 2 m de sombra y un edificio proyecta 30 m. ¿Qué altura tiene el edificio (en metros)?', ['24'], '1,6/2 = h/30 → h = 1,6 · 30 : 2 = 24.'),
          n('En un mapa a escala 1 : 50 000, dos ciudades están a 4 cm. ¿A cuántos kilómetros están en la realidad?', ['2'], '4 · 50 000 = 200 000 cm = 2 000 m = 2 km.')
        ]
      },
      {
        n: '2.2', t: 'Figuras semejantes',
        tip: 'Dos figuras son semejantes si tienen la misma forma: sus ángulos correspondientes son iguales y sus lados correspondientes son proporcionales. La razón entre esos lados es la razón de semejanza.',
        qs: [
          c('Dos figuras son semejantes si…', 'Tienen ángulos iguales y lados correspondientes proporcionales', ['Tienen igual área', 'Tienen todos sus lados iguales', 'Tienen igual perímetro'], 'Semejante significa «misma forma», no necesariamente el mismo tamaño.'),
          c('¿Son semejantes todos los cuadrados?', 'Sí, tienen ángulos de 90° y lados proporcionales', ['No, solo si tienen el mismo lado', 'No, solo si tienen la misma área'], 'Cualquier cuadrado es una ampliación o reducción de otro.'),
          n('Un rectángulo de 4 × 6 cm es semejante a otro cuyo lado menor mide 6 cm. ¿Cuánto mide el lado mayor del segundo?', ['9'], 'La razón es 6/4 = 1,5; el lado mayor mide 6 · 1,5 = 9 cm.'),
          n('Dos figuras semejantes tienen lados correspondientes de 5 cm y 15 cm. ¿Cuántas veces mayor es la segunda?', ['3'], '15 : 5 = 3.'),
          n('Dos polígonos semejantes tienen razón de semejanza 2. Un lado del menor mide 7 cm. ¿Cuánto mide el lado correspondiente del mayor?', ['14'], '7 · 2 = 14 cm.'),
          n('Un triángulo tiene lados 3, 4 y 5 cm. Otro, semejante, tiene su lado mayor de 15 cm. ¿Cuál es su perímetro en cm?', ['36'], 'La razón es 15/5 = 3, así que los lados miden 9, 12 y 15: perímetro 36 cm.')
        ]
      },
      {
        n: '2.3', t: 'Semejanza de triángulos',
        tip: 'Dos triángulos son semejantes (ΔABC ∼ ΔDEF) si sus tres ángulos son iguales y sus tres lados correspondientes son proporcionales. Los vértices se escriben en el orden en que se corresponden.',
        qs: [
          c('¿Qué significa ΔABC ∼ ΔDEF?', 'Tienen ángulos iguales y lados proporcionales', ['Tienen la misma área', 'Son exactamente iguales (congruentes)', 'Solo tienen el mismo perímetro'], 'El símbolo ∼ indica semejanza; el de congruencia es ≅.'),
          m('Une cada símbolo con su significado.', [['∼', 'Es semejante a'], ['≅', 'Es congruente con'], ['∥', 'Es paralelo a'], ['⊥', 'Es perpendicular a']], 'Estos símbolos aparecen en todos los teoremas de geometría.'),
          c('Si ΔABC ∼ ΔDEF, ¿qué lado corresponde al lado AB?', 'DE', ['EF', 'DF', 'AC'], 'A ↔ D y B ↔ E, por eso AB corresponde a DE.'),
          n('ΔABC ∼ ΔDEF con ∠A = 50° y ∠B = 60°. ¿Cuántos grados mide ∠F?', ['70'], '∠C = 180° − 50° − 60° = 70° y C ↔ F, entonces ∠F = 70°.'),
          n('ΔABC tiene lados 6, 8 y 10 cm. ΔDEF es semejante y su lado menor mide 3 cm. ¿Cuánto mide su lado mayor?', ['5'], 'La razón es 3/6 = 1/2, entonces 10 · 1/2 = 5 cm.'),
          n('En ΔABC ∼ ΔDEF se tiene AB = 12 y DE = 4. ¿Cuál es la razón de semejanza de ΔABC a ΔDEF?', ['3'], '12 : 4 = 3.')
        ]
      },
      {
        n: '2.3.1', t: 'Teoremas de semejanza de triángulos',
        tip: 'No hace falta comprobar todo: dos triángulos son semejantes si tienen dos ángulos iguales (a, a), tres lados proporcionales (l, l, l) o dos lados proporcionales y el ángulo comprendido igual (l, a, l).',
        qs: [
          c('Dos triángulos tienen dos ángulos iguales. ¿Por qué ya son semejantes?', 'Porque el tercer ángulo también es igual (suman 180°)', ['Porque sus lados son iguales', 'Porque tienen la misma área'], 'Al conocer dos ángulos, el tercero se calcula y es igual en ambos.'),
          m('Une cada condición con su teorema.', [['Dos ángulos iguales', 'Teorema (a, a)'], ['Tres lados proporcionales', 'Teorema (l, l, l)'], ['Dos lados proporcionales y el ángulo comprendido igual', 'Teorema (l, a, l)']], 'Los tres son criterios de semejanza de triángulos.'),
          c('ΔABC: ∠A = 40° y ∠B = 70°. ΔDEF: ∠D = 40° y ∠E = 70°. ¿Son semejantes?', 'Sí, por el teorema (a, a)', ['Sí, por el teorema (l, l, l)', 'No, porque no se conocen sus lados'], 'Tienen dos ángulos iguales.'),
          n('Un triángulo tiene lados 3, 4 y 6, y otro tiene lados 6, 8 y 12. ¿Cuál es la razón de semejanza del segundo al primero?', ['2'], '6/3 = 8/4 = 12/6 = 2: se cumple (l, l, l).'),
          n('ΔABC: AB = 6, AC = 9, ∠A = 50°. ΔDEF: DE = 4, DF = 6, ∠D = 50°. ¿Cuál es la razón AB/DE? (decimal o fracción)', ['1.5', '3/2'], '6/4 = 9/6 = 1,5 y el ángulo comprendido es igual: son semejantes por (l, a, l).'),
          c('ΔABC tiene lados 2, 3 y 4. ΔDEF tiene lados 4, 6 y 9. ¿Son semejantes?', 'No: 4/2 = 6/3 = 2, pero 9/4 no es 2', ['Sí, por el teorema (l, l, l)', 'Sí, porque los dos son triángulos'], 'Para (l, l, l) las tres razones deben ser iguales.')
        ]
      },
      {
        n: '2.3.2', t: 'Razón entre perímetros y áreas en triángulos semejantes',
        tip: 'Si la razón de semejanza es k, los perímetros están en razón k y las áreas en razón k².',
        qs: [
          c('Dos triángulos semejantes tienen razón de semejanza 3. ¿Cuál es la razón de sus perímetros?', '3', ['9', '6', '27'], 'Los perímetros están en la misma razón que los lados.'),
          c('Con razón de semejanza 3, ¿cuál es la razón de sus áreas?', '9', ['3', '6', '27'], 'Las áreas están en razón k² = 3² = 9.'),
          n('Razón de semejanza 2 y perímetro del menor 15 cm. ¿Cuál es el perímetro del mayor?', ['30'], '15 · 2 = 30 cm.'),
          n('Razón de semejanza 2 y área del menor 12 cm². ¿Cuál es el área del mayor?', ['48'], 'La razón de áreas es 2² = 4: 12 · 4 = 48 cm².'),
          n('Dos triángulos semejantes tienen áreas de 9 cm² y 36 cm². ¿Cuál es la razón de semejanza (mayor a menor)?', ['2'], '36 : 9 = 4 = k², luego k = 2.'),
          n('Un triángulo rectángulo con catetos 5 y 12 cm tiene área 30 cm². Otro semejante tiene su cateto menor de 10 cm. ¿Cuál es su área en cm²?', ['120'], 'k = 10/5 = 2; el área se multiplica por k² = 4: 30 · 4 = 120.')
        ]
      },
      {
        n: '2.4', t: 'Grupo de teoremas de Pitágoras',
        tip: 'En un triángulo rectángulo: Pitágoras a² + b² = c² (c es la hipotenusa); altura h² = p · q; catetos a² = c · p, donde p y q son las proyecciones de los catetos sobre la hipotenusa.',
        qs: [
          c('En un triángulo rectángulo, ¿qué es la hipotenusa?', 'El lado opuesto al ángulo recto, que es el mayor', ['Cualquiera de los lados que forman el ángulo recto', 'La altura del triángulo'], 'Los lados que forman el ángulo recto son los catetos.'),
          n('Los catetos de un triángulo rectángulo miden 6 y 8 cm. ¿Cuánto mide la hipotenusa?', ['10'], '6² + 8² = 36 + 64 = 100; √100 = 10.'),
          n('Una escalera de 5 m se apoya en una pared con su base a 3 m de ella. ¿A qué altura (en m) toca la pared?', ['4'], 'h² = 5² − 3² = 25 − 9 = 16, así que h = 4.'),
          n('La hipotenusa mide 13 cm y un cateto 5 cm. ¿Cuánto mide el otro cateto?', ['12'], 'b² = 169 − 25 = 144; b = 12.'),
          m('Une cada teorema con su fórmula.', [['Teorema de Pitágoras', 'a² + b² = c²'], ['Teorema de la altura', 'h² = p · q'], ['Teorema de los catetos', 'a² = c · p']], 'p y q son las partes en que la altura divide a la hipotenusa.'),
          n('La altura sobre la hipotenusa la divide en p = 4 y q = 9. ¿Cuánto mide la altura?', ['6'], 'h² = 4 · 9 = 36; h = 6.'),
          n('En un triángulo rectángulo la hipotenusa es c = 10 y la proyección del cateto a sobre ella es p = 6,4. ¿Cuánto mide a?', ['8'], 'a² = c · p = 10 · 6,4 = 64; a = 8.')
        ]
      },
      {
        n: '2.5', t: 'Razones trigonométricas en un triángulo rectángulo',
        tip: 'Para un ángulo agudo α: sen α = cateto opuesto / hipotenusa; cos α = cateto adyacente / hipotenusa; tan α = cateto opuesto / cateto adyacente. Valores útiles: sen 30° = 1/2, tan 45° = 1.',
        qs: [
          m('Une cada razón trigonométrica con su cociente.', [['sen α', 'Cateto opuesto / hipotenusa'], ['cos α', 'Cateto adyacente / hipotenusa'], ['tan α', 'Cateto opuesto / cateto adyacente']], 'Recuerda: la hipotenusa nunca aparece en la tangente.'),
          n('Triángulo 3-4-5 con α opuesto al cateto 3. ¿Cuánto vale sen α? (decimal o fracción)', ['0.6', '3/5'], 'sen α = 3/5 = 0,6.'),
          n('En ese triángulo, ¿cuánto vale cos α?', ['0.8', '4/5'], 'El cateto adyacente es 4: cos α = 4/5 = 0,8.'),
          n('En ese triángulo, ¿cuánto vale tan α?', ['0.75', '3/4'], 'tan α = 3/4 = 0,75.'),
          c('¿Cuánto vale sen 30°?', '1/2', ['√3/2', '√2/2', '1'], 'Es un valor notable: sen 30° = 1/2.'),
          n('Un triángulo rectángulo tiene hipotenusa 10 cm y un ángulo de 30°. ¿Cuánto mide el cateto opuesto a ese ángulo?', ['5'], 'sen 30° = cateto/10 → cateto = 10 · 1/2 = 5 cm.'),
          n('Desde un punto a 20 m de la base de una torre, el ángulo de elevación a su punta es 45°. ¿Qué altura tiene la torre (en m)?', ['20'], 'tan 45° = h/20 y tan 45° = 1, por tanto h = 20 m.')
        ]
      }
    ]
  });
})();
