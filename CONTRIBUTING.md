# Guía para contribuir

Gracias por colaborar en Descubre Tungurahua. Estas reglas mantienen el historial organizado y aseguran que otra persona revise cada cambio.

## Ramas Git Flow

- `main`: versiones estables del sitio.
- `develop`: integración del trabajo aprobado.
- `feature/nombre`: páginas y funcionalidades nuevas; se crea desde `develop`.
- `release/version`: revisión y preparación de una versión candidata; se crea desde `develop`.
- `hotfix/version`: corrección urgente de una versión publicada; se crea desde `main`.

Usa Git Flow para crear ramas. Ejemplos:

```bash
git checkout develop
git pull origin develop
git flow feature start nombre-de-la-funcionalidad
```

Para una corrección urgente sobre la versión publicada, actualiza `main` y crea una rama hotfix:

```bash
git checkout main
git pull origin main
git flow hotfix start documentacion-inicial
```

Al terminar, sube la rama y abre un Pull Request hacia `main`:

```bash
git push -u origin hotfix/documentacion-inicial
```

No integres el hotfix localmente sobre `main` si está protegida. Espera la revisión y el merge del PR; luego sincroniza `main` con `develop` mediante otro PR.

Los nombres de rama deben ser breves, descriptivos y en minúsculas, usando guiones en lugar de espacios o tildes.

## Pull Requests y revisiones

1. Trabaja únicamente en tu rama; no hagas push directo a `main` ni a `develop`.
2. Crea un Pull Request de `feature/*` hacia `develop`.
3. Asigna como revisor a otro integrante. El autor no aprueba su propio cambio.
4. Describe qué cambiaste y cómo comprobarlo. Adjunta capturas cuando el cambio modifique la apariencia.
5. El revisor puede aprobar o seleccionar `Request changes` y explicar qué debe corregirse.
6. Si recibes observaciones, corrige en la misma rama, crea un nuevo commit y vuelve a subirla. El PR se actualizará.
7. Integra el PR solo cuando las observaciones estén resueltas y se cumpla la aprobación exigida por GitHub.

Las ramas `release/*` se revisan mediante PR antes de integrarse en `main`; después se sincronizan con `develop`. Las ramas `hotfix/*` se proponen mediante PR hacia `main` y luego se sincronizan con `develop`. El autor del PR no debe aprobarlo: asigna como revisor a otro integrante y espera su aprobación antes del merge.

## Commits

Usa mensajes breves que describan el cambio. Se recomienda este formato:

```text
tipo: descripción breve
```

Tipos sugeridos: `feat` para funcionalidades, `fix` para correcciones, `docs` para documentación, `style` para estilos visuales y `chore` para tareas de mantenimiento.

Ejemplos:

```text
feat: agregar ficha de Baños
fix: corregir enlace de regreso a destinos
docs: completar guía de colaboración
```

## Revisión antes de solicitar aprobación

- Abre las páginas modificadas y comprueba sus enlaces e imágenes.
- Revisa el diseño en escritorio y en una ventana estrecha de móvil.
- Si cambiaste búsqueda o filtros, comprueba varios términos y categorías.
- No incluyas claves, contraseñas, archivos temporales o carpetas de dependencias.
- Mantén las descripciones de destinos como orientativas y verifica la información local.
