# Protocolo de Adquisición de Conocimiento para Herramientas Externas

> **Objetivo:** Procedimiento estándar para aprender a usar cualquier herramienta externa (con o sin suscripción) de forma profesional antes de trabajar con ella.
> **Aplica a:** Generadores de imágenes, APIs, plataformas SaaS, CLIs, servicios cloud, cualquier herramienta nueva.

---

## Fase 1: Investigación inicial

1. **Identificar la herramienta** — Nombre, URL, empresa detrás
2. **Tipo de acceso** — Gratis / freemium / suscripción / API key / sin registro
3. **Desde dónde se usa** — Navegador / CLI / API / app de escritorio
4. **Compatibilidad** — ¿Funciona desde China? ¿Requiere VPN? ¿Qué navegador/SO?
5. **Alternativas** — Buscar al menos 3 alternativas comparables, crear tabla comparativa

## Fase 2: Descarga de conocimiento

1. **Documentación oficial** — Ir a la web/docs de la herramienta y descargar TODA la documentación disponible para el usuario:
   - Guías de inicio rápido (Getting Started / Quick Start)
   - Guía de uso completa (User Guide / How-to)
   - Referencia de API (si aplica)
   - Guía de prompting / parámetros / configuración
   - FAQ / Troubleshooting
   - Blog oficial (tutoriales, tips, novedades)
   - Changelog / Release notes recientes
2. **Comunidad y terceros** — Buscar tutoriales, guías, tips de:
   - Blogs especializados
   - Reddit / foros
   - Papers técnicos (arxiv si es IA)
   - YouTube (transcribir si es relevante)
3. **Guardar todo en un archivo de cursillo** dentro del proyecto:
   - Ruta: `docs/cursillo-[nombre-herramienta].md`
   - Formato: secciones claras, ejemplos prácticos, tablas de referencia
   - Incluir: fuentes originales con URLs

## Fase 3: Práctica y validación

1. **Trastear con la herramienta** — Probar las funciones básicas antes de producir
2. **Documentar descubrimientos** — Anotar trucos, limitaciones, errores encontrados
3. **Validar el flujo de trabajo** — Confirmar que puedo ejecutar el ciclo completo:
   - Input → Proceso → Output → Descarga/Guardado
4. **Medir límites** — Cuota gratuita, rate limits, timeouts, calidad

## Fase 4: Integración en el proyecto

1. **Crear cursillo definitivo** — Fusionar documentación oficial + práctica en un solo archivo
2. **Indexar en el proyecto** — Añadir al README.md / índice de docs del proyecto
3. **Replicar a otros proyectos** — Copiar el cursillo a todos los proyectos donde aplique
4. **Actualizar TOOLS.md** — Si la herramienta se queda como recurso permanente

## Fase 5: Producción

1. **Seguir el cursillo** — No improvisar, usar el conocimiento documentado
2. **Reportar progreso** — Informar al equipo de cada paso/resultado
3. **Actualizar cursillo** — Si descubro algo nuevo durante producción, añadirlo

---

## Checklist rápido (copiar para cada herramienta nueva)

```
[ ] Fase 1: Investigación — herramienta identificada, acceso verificado, alternativas listadas
[ ] Fase 2: Descarga — docs oficiales descargadas, tutoriales externos consultados, cursillo creado
[ ] Fase 3: Práctica — herramienta probada, flujo validado, límites documentados
[ ] Fase 4: Integración — cursillo indexado, replicado a proyectos, TOOLS.md actualizado
[ ] Fase 5: Producción — usando cursillo, reportando, actualizando
```

---

## Herramientas adquiridas

| Herramienta | Proyecto | Cursillo | Fecha |
|------------|---------|---------|-------|
| FLUX.1 schnell + Kontext (HF Spaces) | Dame un Ok | `docs/cursillo-generacion-imagenes.md` | 31-ene-2026 |

---

*Protocolo creado el 31 de enero de 2026. Actualizar con cada nueva herramienta.*
