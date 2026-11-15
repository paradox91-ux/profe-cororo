/* Matemática 9.º · Capítulo 5. Cuerpos */
(function () {
  'use strict';
  var C = window.CHISPA, c = C.c, n = C.n, m = C.m;
  C.matChapters = C.matChapters || [];
  C.matChapters.push({
    id: 5,
    name: 'Cuerpos',
    short: 'Cuerpos',
    color: '#ff4b4b', dark: '#ea2b2b',
    subs: [
      {
        n: '5.1', t: 'Repaso sobre cálculo de áreas y volúmenes del prisma y la pirámide',
        tip: 'Prisma: V = área de la base · altura. Pirámide: V = (área de la base · altura) / 3. El área lateral de un prisma es el perímetro de la base por la altura.',
        qs: [
          c('¿Cómo se calcula el volumen de un prisma?', 'Área de la base por la altura', ['Perímetro de la base por la altura', 'Un tercio del área de la base por la altura', 'Área de la base más la altura'], 'V = A_base · h.'),
          c('¿Cómo se calcula el volumen de una pirámide?', 'Un tercio del área de la base por la altura', ['Área de la base por la altura', 'La mitad del perímetro por la altura'], 'Una pirámide ocupa la tercera parte de un prisma con igual base y altura.'),
          n('Un prisma de base cuadrada de lado 4 cm tiene altura 5 cm. ¿Cuál es su volumen en cm³?', ['80'], 'A_base = 16; V = 16 · 5 = 80.'),
          n('Un cubo tiene arista 3 cm. ¿Cuál es su área total en cm²?', ['54'], 'Tiene 6 caras de 9 cm²: 6 · 9 = 54.'),
          n('Una pirámide tiene base rectangular de 6 × 5 cm y altura 9 cm. ¿Cuál es su volumen en cm³?', ['90'], 'V = (30 · 9) / 3 = 90.'),
          n('Un prisma triangular tiene por base un triángulo de base 6 cm y altura 4 cm, y su altura es 10 cm. ¿Cuál es su volumen en cm³?', ['120'], 'A_base = 6 · 4 / 2 = 12; V = 12 · 10 = 120.')
        ]
      },
      {
        n: '5.2', t: 'El cilindro, el cono y la esfera',
        tip: 'Son cuerpos redondos: el cilindro tiene dos bases circulares, el cono una base circular y un vértice, y la esfera todos sus puntos a igual distancia del centro.',
        qs: [
          m('Une cada cuerpo con su descripción.', [['Cilindro', 'Dos bases circulares y superficie lateral curva'], ['Cono', 'Una base circular y un vértice'], ['Esfera', 'Todos sus puntos están a igual distancia del centro']], 'Son los tres cuerpos redondos del grado.'),
          c('Si giras un rectángulo alrededor de uno de sus lados, obtienes…', 'Un cilindro', ['Un cono', 'Una esfera', 'Un prisma'], 'El lado opuesto describe la superficie lateral.'),
          c('Si giras un triángulo rectángulo alrededor de uno de sus catetos, obtienes…', 'Un cono', ['Un cilindro', 'Una esfera', 'Una pirámide'], 'La hipotenusa describe la superficie lateral del cono.'),
          c('Si giras un semicírculo alrededor de su diámetro, obtienes…', 'Una esfera', ['Un cilindro', 'Un cono'], 'Cada punto del arco queda a la misma distancia del centro.'),
          c('¿Qué es la generatriz de un cono?', 'El segmento del vértice a un punto de la circunferencia de la base', ['La altura del cono', 'El radio de la base', 'El diámetro de la base'], 'Se representa con g.'),
          n('Un cono tiene radio 3 cm y altura 4 cm. ¿Cuánto mide su generatriz en cm?', ['5'], 'g² = 3² + 4² = 25, así que g = 5.')
        ]
      },
      {
        n: '5.2.1', t: 'Representación geométrica del cilindro, el cono y la esfera',
        tip: 'Se pueden representar con vistas, con secciones (cortes con un plano) y con desarrollos. El desarrollo lateral del cilindro es un rectángulo y el del cono es un sector circular.',
        qs: [
          c('¿Qué figura resulta al cortar una esfera con un plano?', 'Un círculo', ['Un triángulo', 'Un rectángulo', 'Un cuadrado'], 'Cualquier corte plano de una esfera es un círculo.'),
          c('Si cortas un cilindro con un plano que contiene su eje, la sección es…', 'Un rectángulo', ['Un círculo', 'Un triángulo', 'Un trapecio'], 'Su ancho es el diámetro y su alto es la altura.'),
          c('Si cortas un cono con un plano que contiene su eje, la sección es…', 'Un triángulo isósceles', ['Un rectángulo', 'Un círculo', 'Un trapecio'], 'Los lados iguales son las generatrices.'),
          c('¿Cómo se ve un cilindro parado, mirado desde arriba?', 'Como un círculo', ['Como un rectángulo', 'Como un triángulo'], 'Se ve su base.'),
          c('El desarrollo de la superficie lateral de un cilindro es…', 'Un rectángulo', ['Un círculo', 'Un triángulo', 'Un sector circular'], 'Un lado es la circunferencia de la base y el otro es la altura.'),
          c('El desarrollo de la superficie lateral de un cono es…', 'Un sector circular', ['Un triángulo', 'Un rectángulo', 'Un círculo completo'], 'Su radio es la generatriz.')
        ]
      },
      {
        n: '5.3.1', t: 'Área lateral y total del cilindro circular recto',
        tip: 'A_lateral = 2πrh (es el rectángulo desarrollado). A_total = 2πrh + 2πr² = 2πr(h + r).',
        qs: [
          c('¿Cuál es la fórmula del área lateral del cilindro?', '2πrh', ['πr²h', '2πr²', 'πrh'], 'Es la longitud de la circunferencia, 2πr, por la altura.'),
          n('Un cilindro tiene r = 3 cm y h = 5 cm. ¿Cuál es su área lateral en cm²? (escribe el resultado como número·π, por ejemplo 12π)', ['30π', '30pi'], '2 · π · 3 · 5 = 30π.'),
          n('¿Cuál es el área de una de sus bases en cm²? (escribe el resultado como número·π, por ejemplo 12π)', ['9π', '9pi'], 'πr² = π · 9 = 9π.'),
          n('¿Cuál es su área total en cm²? (mismo cilindro, r = 3 y h = 5) (escribe el resultado como número·π, por ejemplo 12π)', ['48π', '48pi'], '30π + 2 · 9π = 48π.'),
          n('Un cilindro tiene r = 2 cm y h = 10 cm. ¿Cuál es su área total en cm²? (escribe el resultado como número·π, por ejemplo 12π)', ['48π', '48pi'], '2π · 2 · (10 + 2) = 48π.'),
          n('Una lata tiene r = 5 cm y h = 10 cm. Con π ≈ 3,14, ¿cuál es su área lateral en cm²?', ['314'], '2 · 3,14 · 5 · 10 = 314.')
        ]
      },
      {
        n: '5.3.2', t: 'Área lateral y total del cono circular recto',
        tip: 'A_lateral = πrg (g es la generatriz). A_total = πrg + πr² = πr(g + r).',
        qs: [
          c('¿Cuál es la fórmula del área lateral del cono?', 'πrg', ['2πrh', 'πr²', 'πrh'], 'Usa la generatriz g, no la altura.'),
          n('Un cono tiene r = 3 cm y g = 5 cm. ¿Cuál es su área lateral en cm²? (escribe el resultado como número·π, por ejemplo 12π)', ['15π', '15pi'], 'π · 3 · 5 = 15π.'),
          n('¿Cuál es su área total en cm²? (r = 3 y g = 5) (escribe el resultado como número·π, por ejemplo 12π)', ['24π', '24pi'], '15π + 9π = 24π.'),
          n('Un cono tiene r = 4 cm y h = 3 cm. ¿Cuál es su área lateral en cm²? (escribe el resultado como número·π, por ejemplo 12π)', ['20π', '20pi'], 'g = √(16 + 9) = 5; A = π · 4 · 5 = 20π.'),
          n('Un cono tiene r = 6 cm y g = 10 cm. ¿Cuál es su área total en cm²? (escribe el resultado como número·π, por ejemplo 12π)', ['96π', '96pi'], 'π · 6 · (10 + 6) = 96π.'),
          n('Un cono tiene área lateral 24π cm² y generatriz 8 cm. ¿Cuánto mide su radio en cm?', ['3'], '24π = π · r · 8, entonces r = 3.')
        ]
      },
      {
        n: '5.3.3', t: 'Cálculo del área de una esfera',
        tip: 'El área de una esfera es A = 4πr², cuatro veces el área de su círculo máximo.',
        qs: [
          c('¿Cuál es la fórmula del área de una esfera?', '4πr²', ['πr²', '2πr²', '(4/3)πr³'], '(4/3)πr³ es el volumen, no el área.'),
          n('Una esfera tiene r = 2 cm. ¿Cuál es su área en cm²? (escribe el resultado como número·π, por ejemplo 12π)', ['16π', '16pi'], '4π · 4 = 16π.'),
          n('Una esfera tiene r = 5 cm. ¿Cuál es su área en cm²? (escribe el resultado como número·π, por ejemplo 12π)', ['100π', '100pi'], '4π · 25 = 100π.'),
          n('El área de una esfera es 36π cm². ¿Cuánto mide su radio en cm?', ['3'], '4r² = 36, r² = 9, r = 3.'),
          n('El área de una esfera es 64π cm². ¿Cuánto mide su diámetro en cm?', ['8'], 'r² = 16, r = 4; el diámetro es 8.'),
          n('Si el radio de una esfera se duplica, ¿cuántas veces mayor se vuelve su área?', ['4'], 'El área depende de r²: (2r)² = 4r².')
        ]
      },
      {
        n: '5.4.1', t: 'Volumen del cilindro',
        tip: 'V = πr²h: área de la base por la altura.',
        qs: [
          c('¿Cuál es la fórmula del volumen del cilindro?', 'πr²h', ['2πrh', 'πrh', 'πr²h / 3'], 'Es el área de la base, πr², por la altura.'),
          n('Un cilindro tiene r = 2 cm y h = 5 cm. ¿Cuál es su volumen en cm³? (escribe el resultado como número·π, por ejemplo 12π)', ['20π', '20pi'], 'π · 4 · 5 = 20π.'),
          n('Un cilindro tiene r = 3 cm y h = 4 cm. ¿Cuál es su volumen en cm³? (escribe el resultado como número·π, por ejemplo 12π)', ['36π', '36pi'], 'π · 9 · 4 = 36π.'),
          n('Un cilindro de radio 3 cm tiene volumen 90π cm³. ¿Cuánto mide su altura en cm?', ['10'], '90π = π · 9 · h, entonces h = 10.'),
          n('Un tanque cilíndrico tiene r = 10 cm y h = 2 cm. Con π ≈ 3,14, ¿cuál es su volumen en cm³?', ['628'], '3,14 · 100 · 2 = 628.'),
          n('Un cilindro tiene diámetro 8 cm y altura 3 cm. ¿Cuál es su volumen en cm³? (escribe el resultado como número·π, por ejemplo 12π)', ['48π', '48pi'], 'r = 4; V = π · 16 · 3 = 48π.')
        ]
      },
      {
        n: '5.4.2', t: 'Volumen del cono',
        tip: 'V = πr²h / 3: la tercera parte del volumen del cilindro de igual base y altura.',
        qs: [
          c('¿Cómo se relaciona el volumen de un cono con el de un cilindro de igual base y altura?', 'Es la tercera parte', ['Es la mitad', 'Es el doble', 'Es igual'], 'V_cono = πr²h / 3.'),
          n('Un cono tiene r = 3 cm y h = 4 cm. ¿Cuál es su volumen en cm³? (escribe el resultado como número·π, por ejemplo 12π)', ['12π', '12pi'], 'π · 9 · 4 / 3 = 12π.'),
          n('Un cono tiene r = 6 cm y h = 5 cm. ¿Cuál es su volumen en cm³? (escribe el resultado como número·π, por ejemplo 12π)', ['60π', '60pi'], 'π · 36 · 5 / 3 = 60π.'),
          n('Un cono de radio 5 cm tiene volumen 50π cm³. ¿Cuánto mide su altura en cm?', ['6'], '50π = π · 25 · h / 3 → h = 6.'),
          n('Un cono tiene r = 5 cm y generatriz 13 cm. ¿Cuál es su volumen en cm³? (escribe el resultado como número·π, por ejemplo 12π)', ['100π', '100pi'], 'h = √(169 − 25) = 12; V = π · 25 · 12 / 3 = 100π.'),
          n('Un cilindro tiene volumen 36π cm³. ¿Cuál es el volumen en cm³ de un cono con la misma base y altura? (escribe el resultado como número·π, por ejemplo 12π)', ['12π', '12pi'], '36π : 3 = 12π.')
        ]
      },
      {
        n: '5.4.3', t: 'Volumen de la esfera',
        tip: 'V = (4/3)πr³.',
        qs: [
          c('¿Cuál es la fórmula del volumen de una esfera?', '(4/3)πr³', ['4πr²', 'πr²h', '(1/3)πr²h'], 'El radio va al cubo porque es un volumen.'),
          n('Una esfera tiene r = 3 cm. ¿Cuál es su volumen en cm³? (escribe el resultado como número·π, por ejemplo 12π)', ['36π', '36pi'], '(4/3) · π · 27 = 36π.'),
          n('Una esfera tiene r = 6 cm. ¿Cuál es su volumen en cm³? (escribe el resultado como número·π, por ejemplo 12π)', ['288π', '288pi'], '(4/3) · π · 216 = 288π.'),
          n('Una esfera tiene r = 2 cm. ¿Cuál es su volumen en cm³? (escribe una fracción, por ejemplo 5π/3)', ['32π/3', '32pi/3'], '(4/3) · π · 8 = 32π/3.'),
          n('Una esfera tiene volumen 36π cm³. ¿Cuánto mide su radio en cm?', ['3'], '(4/3)r³ = 36 → r³ = 27 → r = 3.'),
          n('Una esfera de radio 3 cm está dentro de un cilindro de radio 3 cm y altura 6 cm. ¿Cuánto volumen vacío queda, en cm³? (escribe el resultado como número·π, por ejemplo 12π)', ['18π', '18pi'], 'Cilindro: π · 9 · 6 = 54π. Esfera: 36π. Queda 54π − 36π = 18π.')
        ]
      }
    ]
  });
})();
