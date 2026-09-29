# Descubre Tungurahua

Sitio web informativo para explorar destinos, cultura y experiencias de la provincia de Tungurahua, Ecuador. El proyecto se desarrolla en equipo como práctica de Git, GitHub y Git Flow.

## Contenido

- Página principal con búsqueda y filtros de destinos.
- Fichas informativas de Baños de Agua Santa, Ambato y Patate.
- Recorridos sugeridos para Ambato, Píllaro y Patate.
- Planificador sencillo de viaje en JavaScript.
- Imágenes locales para los destinos destacados.

> La información de horarios, accesos y actividades puede cambiar. Confirma los datos con fuentes locales antes de viajar.

## Tecnologías

- HTML5 para el contenido y la estructura.
- CSS3 para el diseño adaptable a móvil y escritorio.
- JavaScript sin frameworks para búsqueda, filtros y planificación.
- Git y GitHub para el control de versiones y la colaboración.

## Ejecutar localmente

1. Clona el repositorio.
2. Abre la carpeta en Visual Studio Code.
3. Abre `index.html` con la extensión Live Server, o abre el archivo directamente en un navegador.

El sitio es estático y no requiere instalar dependencias para visualizarlo.

## Estructura del proyecto

```text
.
├── assets/images/destinos/   # Imágenes de los destinos
├── pages/                    # Páginas y recorridos
├── src/                      # CSS y JavaScript
├── index.html                # Página principal
├── planifica-actions.js      # Interacciones del planificador
├── CONTRIBUTING.md           # Reglas para colaborar
├── CHANGELOG.md              # Historial de versiones
└── .gitignore                # Archivos generados o locales que no se versionan
```

## Flujo de trabajo

El equipo usa Git Flow. `main` contiene versiones estables y `develop` integra el trabajo aprobado. Las funcionalidades se desarrollan en ramas `feature/*` y se proponen mediante Pull Requests hacia `develop`. Las ramas `release/*` preparan versiones y las ramas `hotfix/*` corrigen incidencias de una versión estable. Consulta [CONTRIBUTING.md](CONTRIBUTING.md) antes de colaborar.

No se permiten pushes directos a `main` ni a `develop`. Todo cambio debe pasar por revisión de otra persona.
