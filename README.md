# Angel Dashboard - Centro de Comando

> Dashboard futurista estilo sci-fi como centro de comandos para Ángel

## 🚀 Descripción

Centro de comandos intergaláctico con diseño futurista que sirve como hub central para acceder a todas las aplicaciones y herramientas de trabajo de Ángel.

## ⚡ Características

- 🎨 **Diseño Futurista**: Tema sci-fi con efectos visuales avanzados
- 🌊 **Animaciones**: Grid background animado y efectos hover 3D
- 📱 **PWA**: Progressive Web App installable en móviles/escritorio
- 🎯 **Módulos**: Acceso directo a CRM, TODO, Drive, etc.
- ⚡ **Responsive**: Optimizado para todos los dispositivos
- 🔊 **Efectos**: Preparado para efectos de sonido

## 🗂️ Módulos Disponibles

| Módulo | Icono | Descripción | URL |
|--------|-------|-------------|-----|
| **CRM** | 🎯 | Gestión de clientes y oportunidades | `crm.contextia.cloud` |
| **TODO** | ✅ | Gestión de tareas y pendientes | `todo.contextia.cloud` |
| **Eloduk** | 📚 | Base de conocimientos | `eloduk.contextia.cloud` |
| **Ventas** | 📁 | Documentos comerciales | OneDrive |
| **Drive** | 🔍 | Google Drive explorer | `drive.google.com` |

## 🚀 Despliegue

```bash
# Desarrollo
npm start

# Acceso
open http://localhost:3002
```

**Puerto por defecto:** `3002`

## 📱 PWA (Progressive Web App)

El dashboard puede instalarse como app nativa:

1. **Android/Chrome**: "Añadir a pantalla de inicio"
2. **iOS Safari**: "Añadir a pantalla de inicio"  
3. **Desktop**: Chrome → "Instalar VERTEX..."

### Manifest
- Icono: Logo "V" vectorial generado dinámicamente
- Tema: `#00ffff` (cyan futurista)
- Pantalla completa en móviles
- Soporte offline básico

## 🎨 Tema Visual

### Paleta de Colores
```css
--bg-primary: #0a0a0f → #1a1a2e → #0f0f1a  /* Gradiente background */
--accent-cyan: #00ffff      /* Color principal */
--accent-red: #ff6b6b       /* CRM */
--accent-teal: #4ecdc4      /* TODO */
--accent-purple: #a86bd1    /* Eloduk */
--accent-orange: #ffa726    /* Ventas */
--accent-blue: #42a5f5      /* Drive */
```

### Tipografía
- **Headers**: `Orbitron` (futurista, sci-fi)
- **Body**: `Rajdhani` (moderna, legible)
- **Efectos**: Drop shadows y glows

### Animaciones
- Grid background en perspectiva 3D
- Hover effects con scale y glow
- Botones con feedback táctil
- Transiciones fluidas 0.3s

## 🔧 Configuración

### URLs de Módulos
Editar en `index.html`:

```javascript
const urls = {
    crm: 'https://crm.contextia.cloud',
    todo: 'https://todo.contextia.cloud', 
    eloduk: 'https://eloduk.contextia.cloud',
    ventas: 'https://onedrive.live.com',
    drive: 'https://drive.google.com'
};
```

### Puerto del Servidor
```bash
PORT=3002 npm start
```

### Añadir Nuevos Módulos
1. Duplicar bloque HTML de módulo existente
2. Cambiar clase CSS (`module-newname`)
3. Añadir estilos de color personalizados
4. Añadir URL en objeto JavaScript

## 📁 Estructura

```
angel-dashboard/
├── index.html           # Dashboard SPA completo
├── server.js           # Servidor estático simple
├── package.json        # Configuración del proyecto
└── manifest.json       # PWA manifest
```

## 🛠️ Tecnologías

- **Frontend**: HTML5 + CSS3 + Vanilla JavaScript
- **Backend**: Node.js HTTP server (estático)
- **Fuentes**: Google Fonts (Orbitron + Rajdhani)
- **PWA**: Service Worker ready, manifest incluido
- **Responsive**: CSS Grid + Flexbox

## 🎯 Casos de Uso

- **Hub Central**: Punto de entrada a todas las aplicaciones
- **Quick Launch**: Acceso rápido sin bookmarks
- **Visual Appeal**: Interfaz profesional para demostraciones
- **Mobile First**: Dashboard móvil para gestión sobre la marcha
- **Team Central**: Punto de referencia común para el equipo

## 📝 To-Do Roadmap

- [ ] Autenticación con Contextia Cloud
- [ ] Estado de conectividad de módulos
- [ ] Notificaciones push de aplicaciones
- [ ] Shortcuts de teclado (Cmd+1, Cmd+2, etc.)
- [ ] Efectos de sonido sci-fi
- [ ] Modo oscuro/claro
- [ ] Widgets de información en tiempo real
- [ ] Integración con APIs de módulos

## 🎵 Easter Eggs

- Efectos hover con transformaciones 3D
- Grid animado tipo "Matrix"
- Colores temáticos por módulo
- Preparado para efectos de sonido futuristas

---
*VERTEX COMMAND CENTER // ÁNGEL © 2026*
---
## 🔧 Protocolo de Herramientas Externas
Ver [PROTOCOLO-HERRAMIENTAS-EXTERNAS.md](./PROTOCOLO-HERRAMIENTAS-EXTERNAS.md) — Procedimiento para aprender y usar herramientas externas (generadores IA, APIs, plataformas SaaS, etc.).
