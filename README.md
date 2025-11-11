# Óptica Imagen - Sitio Web

Sitio web profesional para Óptica Imagen, una óptica con más de 30 años de experiencia en el cuidado de la salud visual. El sitio incluye información sobre servicios, productos, y contacto, con un diseño moderno, responsive y accesible.

## 📋 Características

### ✨ Funcionalidades Principales

- **Navegación SPA (Single Page Application)**: Navegación suave entre secciones sin recargar la página
- **Diseño Responsive**: Optimizado para dispositivos móviles, tablets y escritorio (1920x1080)
- **Panel de Accesibilidad**: 
  - Ajuste de tamaño de fuente (A+ / A-)
  - Modo de alto contraste
  - Persistencia de preferencias en localStorage
- **Carrusel Infinito**: Carrusel automático con transiciones suaves para mostrar marcas asociadas
- **Modales Informativos**: Ventanas emergentes con información detallada de servicios
- **Integración WhatsApp**: Botón directo para agendar citas vía WhatsApp
- **Mapa Interactivo**: Integración con Google Maps para mostrar la ubicación

### 🎨 Secciones del Sitio

1. **Inicio**: Hero section con información principal y servicios destacados
2. **Nosotros**: Historia, valores, misión y visión de la óptica
3. **Productos**: Catálogo de productos (gafas graduadas, gafas de sol, lentes de contacto, accesorios)
4. **Servicios**: Información detallada sobre servicios con modales informativos
5. **Contacto**: Información de contacto, dirección y mapa interactivo

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica y accesible
- **CSS3**: 
  - Variables CSS para temas
  - Flexbox y Grid Layout
  - Animaciones y transiciones
  - Media queries para responsive design
- **JavaScript (Vanilla)**: 
  - Navegación SPA
  - Gestión de modales
  - Panel de accesibilidad
  - Carrusel infinito
  - localStorage para persistencia

## 📁 Estructura del Proyecto

```
imagen/
│
├── index.html          # Página principal (SPA)
├── index.css           # Estilos principales
├── script.js           # Lógica JavaScript
├── README.md           # Este archivo
│
└── img/                # Imágenes del proyecto
    ├── logoImagen.png   # Logo de la óptica
    ├── imagenHeader.png # Imagen principal del hero
    ├── Prats.png        # Imagen del carrusel
    └── ServiOpticas.png # Imagen del carrusel
```

## 🚀 Instalación y Uso

### Requisitos

No se requieren dependencias externas. Solo necesitas un navegador web moderno.

### Pasos para ejecutar

1. **Clonar o descargar el proyecto**
   ```bash
   git clone [url-del-repositorio]
   cd imagen
   ```

2. **Abrir el proyecto**
   - Opción 1: Abrir `index.html` directamente en tu navegador
   - Opción 2: Usar un servidor local (recomendado para desarrollo)
     ```bash
     # Con Python 3
     python -m http.server 8000
     
     # Con Node.js (http-server)
     npx http-server
     
     # Con PHP
     php -S localhost:8000
     ```

3. **Acceder al sitio**
   - Abre tu navegador y visita: `http://localhost:8000` (si usas servidor local)
   - O simplemente abre `index.html` directamente

## 📱 Responsive Design

El sitio está optimizado para:

- **Pantallas grandes**: 1920x1080 y superiores
- **Tablets**: 768px - 1919px
- **Móviles**: 480px - 767px
- **Móviles pequeños**: Hasta 480px

### Breakpoints

- `@media (min-width: 1920px)`: Optimizaciones para pantallas grandes
- `@media (max-width: 768px)`: Estilos para tablets y móviles
- `@media (max-width: 480px)`: Estilos para móviles pequeños

## ♿ Accesibilidad

El sitio incluye un panel de accesibilidad con las siguientes opciones:

- **Aumentar tamaño de fuente (A+)**: Incrementa el tamaño del texto hasta 150%
- **Disminuir tamaño de fuente (A-)**: Reduce el tamaño del texto hasta 80%
- **Alto contraste**: Activa modo de alto contraste con fondo negro y texto amarillo
- **Reset**: Restablece todas las configuraciones a los valores por defecto

Las preferencias se guardan automáticamente en `localStorage` y se restauran al recargar la página.

## 🎯 Características Técnicas

### Navegación SPA

- Cambio de secciones sin recargar la página
- Scroll automático al inicio al cambiar de sección
- Menú hamburguesa para dispositivos móviles
- Indicador visual de sección activa

### Carrusel Infinito

- Animación CSS pura para mejor rendimiento
- Clonación automática de slides para efecto infinito
- Transición suave y continua
- Ajuste automático de altura y ancho

### Modales

- Tres modales informativos para servicios:
  - Examen visual
  - Lentes de contacto
  - Gafas
- Cierre con botón X, clic fuera o tecla ESC
- Prevención de scroll del body cuando está abierto

### Integración WhatsApp

- Botón directo que abre WhatsApp con número preconfigurado
- Disponible en múltiples secciones del sitio
- Número: +57 320 8835842

## 📞 Información de Contacto

- **Dirección**: CALLE 21 # 100-56, Fontibon, Bogotá DC
- **Teléfono**: +57 320 8835842
- **Email**: info@imagenoptica.com
- **Horario**: 
  - Lunes - Viernes: 9:30 - 17:00
  - Sábados: 10:00 - 14:00

## 👨‍💻 Desarrollador

**Desarrollador Full-Stack: Mauricio Salamanca**

## 📝 Notas de Desarrollo

### Variables CSS Principales

```css
--primary-color: #2563eb
--secondary-color: #1e40af
--accent-color: #3b82f6
--text-dark: #1f2937
--text-light: #6b7280
--bg-light: #f9fafb
--white: #ffffff
```

### IDs y Clases Importantes

- **Carruseles**: `carouselTrack`, `carouselTrackProductos`, `carouselTrackServicios`
- **Modales**: `modalExamenes`, `modalLentesContacto`, `modalGafas`
- **Botones de servicios**: `btnExamenesVista`, `btnLentesContacto`, `btnGafas`
- **Panel de accesibilidad**: `accessibilityPanel`, `accessibilityToggle`

## 🔄 Actualizaciones Futuras

Posibles mejoras a implementar:

- [ ] Formulario de contacto funcional con backend
- [ ] Galería de productos con imágenes reales
- [ ] Sistema de reserva de citas online
- [ ] Blog o noticias sobre salud visual
- [ ] Integración con redes sociales
- [ ] PWA (Progressive Web App) para instalación en móviles

## 📄 Licencia

Este proyecto es propiedad de Óptica Imagen. Todos los derechos reservados.

---

**© 2025 Óptica Imagen**

Desarrollado con ❤️ por Mauricio Salamanca

