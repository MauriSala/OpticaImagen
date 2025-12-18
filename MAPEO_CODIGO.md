# 🗺️ MAPEO COMPLETO DEL CÓDIGO - ÓPTICA IMAGEN

**Fecha de mapeo:** 2025  
**Versión:** Actualizada con cambios manuales

---

## 📋 ESTRUCTURA GENERAL DEL PROYECTO

```
imagen/
├── index.html          # Página principal (SPA - Single Page Application)
├── index.css           # Estilos principales
├── script.js           # Lógica JavaScript
├── img/                # Directorio de imágenes
│   ├── logoImagen.png
│   ├── imagenHeader.png
│   ├── Prats.png
│   ├── ServiOpticas.png
│   ├── Flag_of_Colombia.png
│   └── Flag_of_the_United_States.png
└── MAPEO_CODIGO.md     # Este documento
```

---

## 🏗️ ESTRUCTURA HTML (index.html)

### 1. **HEAD (Líneas 1-12)**
- Meta tags (charset, viewport)
- Título: "Óptica Imagen"
- Favicon: `img/logoImagen.png`
- CSS: `index.css`
- Fuente: Google Fonts (Poppins)

### 2. **NAVEGACIÓN - Navbar (Líneas 14-42)**
- **Clase:** `.navbar`
- **Contenedor:** `.container`
- **Elementos:**
  - Logo: `img/logoImagen.png` + texto "OPTICA IMAGEN"
  - Menú de navegación: `#navMenu`
    - Inicio (`#inicio`)
    - Nosotros (`#nosotros`)
    - Productos (`#productos`)
    - Servicios (`#servicios`)
    - Contacto (`#contacto`)
  - Botones de idioma:
    - `#langColombia` (Español)
    - `#langUSA` (English)
  - Menú hamburguesa: `#hamburger` (móvil)

### 3. **SECCIÓN INICIO (Líneas 44-123)**
- **ID:** `#inicio`
- **Clase:** `.section.active` (por defecto)
- **Contenido:**
  - **Hero Section:**
    - Subtítulo: "Tu visión es nuestra prioridad"
    - Descripción
    - Botón WhatsApp: `https://wa.me/573208835842`
    - Imagen: `img/imagenHeader.png`
  - **Servicios destacados:**
    - Grid: `.services-grid-new`
    - 3 servicios con iconos SVG:
      1. Gafas
      2. Lentes de contacto
      3. Examen visual
  - **Carrusel:**
    - ID: `#carouselTrack`
    - Imágenes: Prats.png, ServiOpticas.png

### 4. **SECCIÓN NOSOTROS (Líneas 125-201)**
- **ID:** `#nosotros`
- **Contenido:**
  - Título: "Sobre Nosotros"
  - **Historia:**
    - Texto introductorio
    - Icono: 👁️
  - **Valores (Grid 4 columnas):**
    1. Excelencia 🎯
    2. Compromiso ❤️
    3. Innovación 🔬
    4. Confianza 🤝
  - **Misión y Visión:**
    - Cards separadas con texto descriptivo

### 5. **SECCIÓN PRODUCTOS (Líneas 203-278)**
- **ID:** `#productos`
- **Contenido:**
  - Título: "Nuestros Productos"
  - **Grid de productos (4 items):**
    1. Lentes formulados 👓
    2. Gafas de Sol 🕶️
    3. Lentes de Contacto 🔍
    4. Soluciones y Accesorios 🧪
  - Cada producto tiene:
    - Icono emoji
    - Título
    - Descripción
    - Lista de características
    - Botón "Ver más"
  - Botón WhatsApp para agendar cita
  - **Carrusel:**
    - ID: `#carouselTrackProductos`

### 6. **SECCIÓN SERVICIOS (Líneas 280-349)**
- **ID:** `#servicios`
- **Contenido:**
  - Título: "Nuestros Servicios"
  - **Grid de servicios (3 items):**
    1. Gafas - Botón: `#btnGafas`
    2. Lentes de contacto - Botón: `#btnLentesContacto`
    3. Examen visual - Botón: `#btnExamenesVista`
  - Cada servicio tiene botón "Saber más"
  - Botón WhatsApp para agendar cita
  - **Carrusel:**
    - ID: `#carouselTrackServicios`

### 7. **SECCIÓN CONTACTO (Líneas 351-408)**
- **ID:** `#contacto`
- **Contenido:**
  - Título: "Contacto"
  - **Layout de 2 columnas:**
    - **Izquierda:**
      - Dirección: CALLE 21 # 100-56, Fontibon, Bogotá DC
      - Mapa de Google Maps (iframe)
    - **Derecha:**
      - Teléfono: +57 320 8835842
      - Email: opticaimagenfontibon@gmail.com
      - Horario:
        - Lunes - Viernes: 9:30 - 17:00
        - Sábados: 10:00 - 16:00

### 8. **FOOTER (Líneas 410-415)**
- Copyright: "© 2025 Óptica Imagen."

### 9. **CRÉDITOS DESARROLLADOR (Líneas 417-420)**
- Texto: "Desarrollador Full-Stack: Mauricio Salamanca"

### 10. **MODALES (Líneas 422-460)**
- **Modal Exámenes:** `#modalExamenes`
  - Botón cerrar: `#closeModal`
  - Contenido sobre optometría
- **Modal Lentes de Contacto:** `#modalLentesContacto`
  - Botón cerrar: `#closeModalLentes`
  - Contenido sobre lentes de contacto
- **Modal Gafas:** `#modalGafas`
  - Botón cerrar: `#closeModalGafas`
  - Clase adicional: `.modal-content-large`
  - Contenido extenso sobre:
    - Tecnología de lentes
    - Materiales exclusivos
    - Lista con `<ul class="modal-list">`

### 11. **PANEL DE ACCESIBILIDAD (Líneas 462-498)**
- **ID:** `#accessibilityPanel`
- **Elementos:**
  - Toggle: `#accessibilityToggle`
  - Menú: `#accessibilityMenu`
  - Botones:
    - `#increaseFont` (A+)
    - `#decreaseFont` (A-)
    - `#highContrast` (Contraste)
    - `#resetAccessibility` (Reset)

---

## 💻 ESTRUCTURA JAVASCRIPT (script.js)

### **FUNCIONES PRINCIPALES**

#### 1. **NAVEGACIÓN SPA (Líneas 2-65)**
```javascript
- showSection(sectionId): Cambia entre secciones
- Event listeners para navLinks
- Menú hamburguesa para móvil
- Cierre automático del menú móvil
- Scroll suave al cambiar de sección
```

**Elementos clave:**
- `navLinks`: Todos los enlaces `.nav-link`
- `sections`: Todas las secciones `.section`
- `hamburger`: Botón menú móvil
- `navMenu`: Menú desplegable

#### 2. **CARRUSELES INFINITOS (Líneas 67-100)**
```javascript
- initCarousel(carouselTrackId): Inicializa carrusel
- Clonación de slides para efecto infinito
- Cálculo dinámico de anchos
- Ajuste en resize
```

**Carruseles inicializados:**
- `carouselTrack` (Inicio)
- `carouselTrackProductos` (Productos)
- `carouselTrackServicios` (Servicios)

#### 3. **MODALES (Líneas 102-211)**
```javascript
- Modal Exámenes: btnExamenesVista → modalExamenes
- Modal Lentes: btnLentesContacto → modalLentesContacto
- Modal Gafas: btnGafas → modalGafas
```

**Funcionalidades:**
- Abrir con botón
- Cerrar con X
- Cerrar con clic fuera
- Cerrar con tecla ESC
- Prevenir scroll del body cuando está abierto

#### 4. **PANEL DE ACCESIBILIDAD (Líneas 213-290)**
```javascript
- Toggle del panel
- Aumentar/disminuir fuente (80%-150%)
- Alto contraste
- Reset de configuración
- Persistencia en localStorage
```

**Variables:**
- `currentFontSize`: Tamaño actual (base 100%)
- Guarda en localStorage: `fontSize`, `highContrast`

#### 5. **SISTEMA DE TRADUCCIÓN (Líneas 292-799)**
```javascript
- Objeto translations: { es: {...}, en: {...} }
- changeLanguage(lang): Cambia todo el contenido
- Event listeners para botones de idioma
- Persistencia en localStorage: 'language'
```

**Idiomas soportados:**
- Español (es) - Por defecto
- Inglés (en)

**Elementos traducidos:**
- Navegación
- Hero section
- Servicios
- Nosotros (historia, valores, misión, visión)
- Productos
- Contacto
- Footer
- Modales
- Panel de accesibilidad

---

## 🎨 ESTRUCTURA CSS (index.css)

### **VARIABLES CSS PRINCIPALES**
```css
--primary-color: #2563eb
--secondary-color: #1e40af
--accent-color: #3b82f6
--text-dark: #1f2937
--text-light: #6b7280
--bg-light: #f9fafb
--white: #ffffff
```

### **CLASES PRINCIPALES**

#### **Navegación:**
- `.navbar`
- `.nav-brand`
- `.nav-menu`
- `.nav-link`
- `.hamburger`
- `.language-buttons`

#### **Secciones:**
- `.section` (oculto por defecto)
- `.section.active` (visible)
- `.section-title`
- `.section-subtitle`

#### **Hero:**
- `.hero`
- `.hero-content`
- `.hero-subtitle`
- `.hero-description`
- `.hero-image`
- `.btn-whatsapp`

#### **Servicios:**
- `.services-grid-new`
- `.service-item`
- `.service-icon-new`
- `.btn-saber-mas`

#### **Productos:**
- `.products-grid`
- `.product-card`
- `.product-icon`
- `.product-features`
- `.btn-ver-mas`

#### **Nosotros:**
- `.about-content`
- `.about-intro`
- `.about-text`
- `.values-grid`
- `.value-card`
- `.mission-vision`
- `.mission-card`
- `.vision-card`

#### **Contacto:**
- `.contact-wrapper`
- `.contact-left`
- `.contact-info`
- `.info-card`
- `.map-container`

#### **Carrusel:**
- `.carousel-container`
- `.carousel-track`
- `.carousel-slide`

#### **Modales:**
- `.modal`
- `.modal.active`
- `.modal-content`
- `.modal-content-large`
- `.modal-close`
- `.modal-list`

#### **Accesibilidad:**
- `.accessibility-panel`
- `.accessibility-panel.active`
- `.accessibility-toggle`
- `.accessibility-menu`
- `.accessibility-btn`
- `.high-contrast` (clase en body)

#### **Footer:**
- `.footer`
- `.developer-credit`

---

## 🔑 IDs IMPORTANTES

### **Navegación:**
- `navMenu`
- `hamburger`
- `langColombia`
- `langUSA`

### **Secciones:**
- `inicio`
- `nosotros`
- `productos`
- `servicios`
- `contacto`

### **Carruseles:**
- `carouselTrack`
- `carouselTrackProductos`
- `carouselTrackServicios`

### **Modales:**
- `modalExamenes`
- `modalLentesContacto`
- `modalGafas`
- `closeModal`
- `closeModalLentes`
- `closeModalGafas`

### **Botones de servicios:**
- `btnGafas`
- `btnLentesContacto`
- `btnExamenesVista`

### **Accesibilidad:**
- `accessibilityPanel`
- `accessibilityToggle`
- `accessibilityMenu`
- `increaseFont`
- `decreaseFont`
- `highContrast`
- `resetAccessibility`

---

## 📱 RESPONSIVE DESIGN

### **Breakpoints:**
- Desktop: > 1920px (optimizado para 1920x1080)
- Tablet: 768px - 1920px
- Móvil: < 768px

### **Características responsive:**
- Menú hamburguesa en móvil
- Grid adaptativo (4 → 2 → 1 columnas)
- Imágenes escalables
- Texto ajustable
- Panel de accesibilidad reposicionado

---

## 🔄 FLUJO DE NAVEGACIÓN

```
1. Usuario carga página
   ↓
2. Se muestra sección #inicio (por defecto)
   ↓
3. Usuario hace clic en enlace de navegación
   ↓
4. showSection() oculta todas las secciones
   ↓
5. Muestra la sección seleccionada
   ↓
6. Actualiza enlaces activos
   ↓
7. Scroll suave al inicio
   ↓
8. Cierra menú móvil si está abierto
```

---

## 🌐 FLUJO DE TRADUCCIÓN

```
1. Usuario hace clic en bandera (Colombia/USA)
   ↓
2. changeLanguage('es' o 'en')
   ↓
3. Actualiza atributo lang del HTML
   ↓
4. Recorre todos los elementos traducibles
   ↓
5. Reemplaza texto con traducción correspondiente
   ↓
6. Guarda preferencia en localStorage
   ↓
7. Al recargar, carga idioma guardado
```

---

## 🎯 FUNCIONALIDADES CLAVE

### **1. Single Page Application (SPA)**
- Sin recarga de página
- Transiciones suaves
- Estado activo en navegación

### **2. Carruseles Infinitos**
- Animación CSS pura
- Clonación automática
- Responsive

### **3. Modales Informativos**
- 3 modales para servicios
- Múltiples formas de cierre
- Prevención de scroll

### **4. Panel de Accesibilidad**
- Ajuste de fuente
- Alto contraste
- Persistencia de preferencias

### **5. Sistema de Traducción**
- Español/Inglés
- Traducción completa del sitio
- Persistencia de idioma

### **6. Integración WhatsApp**
- Botón directo
- Número: +57 320 8835842
- Múltiples ubicaciones

### **7. Mapa Interactivo**
- Google Maps embed
- Ubicación: CALLE 21 # 100-56, Fontibon

---

## 📊 ESTADÍSTICAS DEL CÓDIGO

- **HTML:** 504 líneas
- **JavaScript:** 801 líneas
- **CSS:** ~1200+ líneas (estimado)
- **Secciones:** 5
- **Modales:** 3
- **Carruseles:** 3
- **Productos:** 4
- **Servicios:** 3
- **Idiomas:** 2 (ES/EN)

---

## 🔍 PUNTOS DE ATENCIÓN

### **Elementos que requieren imágenes:**
- `img/logoImagen.png`
- `img/imagenHeader.png`
- `img/Prats.png`
- `img/ServiOpticas.png`
- `img/Flag_of_Colombia.png`
- `img/Flag_of_the_United_States.png`

### **Enlaces externos:**
- WhatsApp: `https://wa.me/573208835842`
- Google Maps: iframe embed
- Google Fonts: Poppins

### **localStorage keys:**
- `language` (es/en)
- `fontSize` (80-150)
- `highContrast` (true/false)

---

## ✅ CHECKLIST DE FUNCIONALIDADES

- [x] Navegación SPA funcional
- [x] Menú hamburguesa responsive
- [x] Carruseles infinitos (3)
- [x] Modales informativos (3)
- [x] Panel de accesibilidad
- [x] Sistema de traducción ES/EN
- [x] Integración WhatsApp
- [x] Mapa Google Maps
- [x] Diseño responsive
- [x] Persistencia de preferencias

---

**Última actualización:** 2025  
**Mapeo realizado después de cambios manuales**

