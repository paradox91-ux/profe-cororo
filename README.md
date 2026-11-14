# Chispa · profe-cororo

App de estudio de **Español y Literatura de 9.º grado**, con el estilo visual de Chispa (verde, tipografía Nunito, botones 3D y animaciones).

- 6 capítulos = 6 niveles; cada epígrafe = un subnivel (43 en total) + un repaso por capítulo.
- 247 ejercicios de menor a mayor dificultad: opción múltiple, escribir, unir parejas y ordenar.
- Hecha con web (`www/`) empaquetada con Capacitor para Android.

## Obtener la APK
1. Sube cambios a `main` o entra en **Actions → Compilar APK → Run workflow**.
2. Al terminar, descarga el artefacto **chispa-apk** (contiene `app-debug.apk`).
3. Cópiala al teléfono e instálala (permite instalar apps de origen desconocido).

## Desarrollo
```bash
npm ci
npm run check        # valida el contenido
npx cap sync android # copia www/ a Android
```
Para probar en el navegador, abre `www/index.html`.
