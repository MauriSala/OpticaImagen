// Navegación suave y cambio de secciones
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    // Función para cambiar de sección
    function showSection(sectionId) {
        // Ocultar todas las secciones
        sections.forEach(section => {
            section.classList.remove('active');
        });

        // Mostrar la sección seleccionada
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
        }

        // Actualizar enlaces activos
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
                link.classList.add('active');
            }
        });

        // Cerrar menú móvil si está abierto
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    }

    // Event listeners para los enlaces de navegación
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            showSection(targetId);
            
            // Scroll suave al inicio de la página
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });

    // Menú hamburguesa para móvil
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', function(e) {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
        }
    });

    // Mostrar la sección de inicio por defecto
    showSection('inicio');

    // Función para inicializar un carrusel infinito
    function initCarousel(carouselTrackId) {
        const carouselTrack = document.getElementById(carouselTrackId);
        if (!carouselTrack) return;

        const slides = carouselTrack.querySelectorAll('.carousel-slide');
        const totalSlides = slides.length;
        if (totalSlides === 0) return;

        // Clonar slides para efecto infinito
        slides.forEach(slide => {
            const clone = slide.cloneNode(true);
            carouselTrack.appendChild(clone);
        });

        // Calcular ancho del track
        const updateTrackWidth = () => {
            const slideWidth = 100 / totalSlides; // Porcentaje por slide
            carouselTrack.style.width = `${totalSlides * 2 * slideWidth}%`;
            carouselTrack.querySelectorAll('.carousel-slide').forEach(slide => {
                slide.style.width = `${slideWidth}%`;
            });
        };

        updateTrackWidth();

        // Ajustar en resize
        window.addEventListener('resize', updateTrackWidth);
    }

    // Inicializar todos los carruseles
    initCarousel('carouselTrack'); // Carrusel en inicio
    initCarousel('carouselTrackProductos'); // Carrusel en productos
    initCarousel('carouselTrackServicios'); // Carrusel en servicios

    // Modal para Exámenes de la vista
    const btnExamenesVista = document.getElementById('btnExamenesVista');
    const modalExamenes = document.getElementById('modalExamenes');
    const closeModal = document.getElementById('closeModal');

    if (btnExamenesVista && modalExamenes) {
        // Abrir modal
        btnExamenesVista.addEventListener('click', () => {
            modalExamenes.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevenir scroll del body
        });

        // Cerrar modal con X
        if (closeModal) {
            closeModal.addEventListener('click', () => {
                modalExamenes.classList.remove('active');
                document.body.style.overflow = ''; // Restaurar scroll
            });
        }

        // Cerrar modal al hacer clic fuera del contenido
        modalExamenes.addEventListener('click', (e) => {
            if (e.target === modalExamenes) {
                modalExamenes.classList.remove('active');
                document.body.style.overflow = ''; // Restaurar scroll
            }
        });

        // Cerrar modal con tecla ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modalExamenes.classList.contains('active')) {
                modalExamenes.classList.remove('active');
                document.body.style.overflow = ''; // Restaurar scroll
            }
        });
    }

    // Modal para Lentes de contacto
    const btnLentesContacto = document.getElementById('btnLentesContacto');
    const modalLentesContacto = document.getElementById('modalLentesContacto');
    const closeModalLentes = document.getElementById('closeModalLentes');

    if (btnLentesContacto && modalLentesContacto) {
        // Abrir modal
        btnLentesContacto.addEventListener('click', () => {
            modalLentesContacto.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevenir scroll del body
        });

        // Cerrar modal con X
        if (closeModalLentes) {
            closeModalLentes.addEventListener('click', () => {
                modalLentesContacto.classList.remove('active');
                document.body.style.overflow = ''; // Restaurar scroll
            });
        }

        // Cerrar modal al hacer clic fuera del contenido
        modalLentesContacto.addEventListener('click', (e) => {
            if (e.target === modalLentesContacto) {
                modalLentesContacto.classList.remove('active');
                document.body.style.overflow = ''; // Restaurar scroll
            }
        });

        // Cerrar modal con tecla ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modalLentesContacto.classList.contains('active')) {
                modalLentesContacto.classList.remove('active');
                document.body.style.overflow = ''; // Restaurar scroll
            }
        });
    }

    // Modal para Gafas
    const btnGafas = document.getElementById('btnGafas');
    const modalGafas = document.getElementById('modalGafas');
    const closeModalGafas = document.getElementById('closeModalGafas');

    if (btnGafas && modalGafas) {
        // Abrir modal
        btnGafas.addEventListener('click', () => {
            modalGafas.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevenir scroll del body
        });

        // Cerrar modal con X
        if (closeModalGafas) {
            closeModalGafas.addEventListener('click', () => {
                modalGafas.classList.remove('active');
                document.body.style.overflow = ''; // Restaurar scroll
            });
        }

        // Cerrar modal al hacer clic fuera del contenido
        modalGafas.addEventListener('click', (e) => {
            if (e.target === modalGafas) {
                modalGafas.classList.remove('active');
                document.body.style.overflow = ''; // Restaurar scroll
            }
        });

        // Cerrar modal con tecla ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modalGafas.classList.contains('active')) {
                modalGafas.classList.remove('active');
                document.body.style.overflow = ''; // Restaurar scroll
            }
        });
    }

    // Panel de Accesibilidad
    const accessibilityPanel = document.getElementById('accessibilityPanel');
    const accessibilityToggle = document.getElementById('accessibilityToggle');
    const accessibilityMenu = document.getElementById('accessibilityMenu');
    const increaseFontBtn = document.getElementById('increaseFont');
    const decreaseFontBtn = document.getElementById('decreaseFont');
    const highContrastBtn = document.getElementById('highContrast');
    const resetBtn = document.getElementById('resetAccessibility');

    let currentFontSize = 100; // Tamaño base 100%

    // Toggle del panel
    if (accessibilityToggle) {
        accessibilityToggle.addEventListener('click', function() {
            accessibilityPanel.classList.toggle('active');
        });
    }

    // Aumentar tamaño de fuente
    if (increaseFontBtn) {
        increaseFontBtn.addEventListener('click', function() {
            currentFontSize += 10;
            if (currentFontSize > 150) currentFontSize = 150; // Límite máximo
            document.documentElement.style.fontSize = currentFontSize + '%';
            localStorage.setItem('fontSize', currentFontSize);
        });
    }

    // Disminuir tamaño de fuente
    if (decreaseFontBtn) {
        decreaseFontBtn.addEventListener('click', function() {
            currentFontSize -= 10;
            if (currentFontSize < 80) currentFontSize = 80; // Límite mínimo
            document.documentElement.style.fontSize = currentFontSize + '%';
            localStorage.setItem('fontSize', currentFontSize);
        });
    }

    // Alto contraste
    if (highContrastBtn) {
        highContrastBtn.addEventListener('click', function() {
            document.body.classList.toggle('high-contrast');
            const isActive = document.body.classList.contains('high-contrast');
            localStorage.setItem('highContrast', isActive);
        });
    }

    // Resetear configuración
    if (resetBtn) {
        resetBtn.addEventListener('click', function() {
            currentFontSize = 100;
            document.documentElement.style.fontSize = '100%';
            document.body.classList.remove('high-contrast');
            localStorage.removeItem('fontSize');
            localStorage.removeItem('highContrast');
        });
    }

    // Cargar configuración guardada
    const savedFontSize = localStorage.getItem('fontSize');
    if (savedFontSize) {
        currentFontSize = parseInt(savedFontSize);
        document.documentElement.style.fontSize = currentFontSize + '%';
    }

    const savedHighContrast = localStorage.getItem('highContrast');
    if (savedHighContrast === 'true') {
        document.body.classList.add('high-contrast');
    }

    // Cerrar panel al hacer clic fuera
    document.addEventListener('click', function(e) {
        if (accessibilityPanel && accessibilityMenu) {
            if (!accessibilityPanel.contains(e.target)) {
                accessibilityPanel.classList.remove('active');
            }
        }
    });
});

