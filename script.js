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

    // ========== SISTEMA DE TRADUCCIÓN ==========
    const translations = {
        es: {
            // Navegación
            navInicio: 'Inicio',
            navNosotros: 'Nosotros',
            navProductos: 'Productos',
            navServicios: 'Servicios',
            navContacto: 'Contacto',
            
            // Hero Section
            heroSubtitle: 'Tu visión es nuestra prioridad',
            heroDescription: 'En Óptica Imagen ofrecemos las mejores soluciones para el cuidado de tus ojos. Con mas de 30 años de experiencia y tecnología de vanguardia, te ayudamos a ver el mundo con claridad.',
            btnAgendaCita: 'Agenda tu cita',
            
            // Servicios
            sectionNuestrosServicios: 'Nuestros Servicios',
            servicioGafas: 'Gafas',
            servicioGafasDesc: 'Gran variedad de monturas y estilos',
            servicioLentesContacto: 'Lentes de contacto',
            servicioLentesContactoDesc: 'Lentes para diferentes necesidades',
            servicioExamenVisual: 'Examen visual',
            servicioExamenVisualDesc: 'Exámenes completos y profesionales',
            btnSaberMas: 'Saber más',
            
            // Nosotros
            sectionSobreNosotros: 'Sobre Nosotros',
            sectionSubtitleNosotros: 'Conoce la historia y valores de Óptica Imagen',
            nuestraHistoria: 'Nuestra Historia',
            historiaTexto1: 'Óptica Imagen nació con la visión de proporcionar el mejor cuidado visual a nuestros clientes. Desde nuestros inicios, nos hemos comprometido a ofrecer productos de alta calidad y servicios profesionales que mejoren la vida de las personas a través de una visión clara y saludable.',
            historiaTexto2: 'Con años de experiencia en el sector, hemos construido una reputación basada en la confianza, la excelencia y el compromiso con cada uno de nuestros clientes. Nuestro equipo de profesionales altamente capacitados está siempre dispuesto a ayudarte a encontrar la mejor solución para tus necesidades visuales.',
            nuestrosValores: 'Nuestros Valores',
            valorExcelencia: 'Excelencia',
            valorExcelenciaDesc: 'Nos esforzamos por ofrecer el más alto nivel de calidad en todos nuestros productos y servicios.',
            valorCompromiso: 'Compromiso',
            valorCompromisoDesc: 'Estamos comprometidos con el bienestar y la satisfacción de cada uno de nuestros clientes.',
            valorInnovacion: 'Innovación',
            valorInnovacionDesc: 'Utilizamos tecnología de vanguardia para ofrecerte las mejores soluciones visuales.',
            valorConfianza: 'Confianza',
            valorConfianzaDesc: 'Construimos relaciones duraderas basadas en la honestidad y la transparencia.',
            nuestraMision: 'Nuestra Misión',
            misionTexto: 'Proporcionar soluciones visuales de excelencia que mejoren la calidad de vida de nuestros clientes, ofreciendo productos de alta calidad, servicios profesionales personalizados y un trato cercano que genere confianza y satisfacción.',
            nuestraVision: 'Nuestra Visión',
            visionTexto: 'Ser la óptica de referencia en nuestra comunidad, reconocida por nuestra excelencia en el servicio, la innovación en tecnología visual y el compromiso constante con el cuidado de la salud ocular de nuestros clientes.',
            
            // Productos
            sectionNuestrosProductos: 'Nuestros Productos',
            sectionSubtitleProductos: 'Descubre nuestra amplia gama de productos para el cuidado de tu visión',
            productoGafasGraduadas: 'Lentes formulados',
            productoGafasGraduadasDesc: 'Lentes formulados con la mejor calidad y diseño para corregir tu visión.',
            productoGafasSol: 'Gafas de Sol',
            productoGafasSolDesc: 'Protege tus ojos de los rayos UV con nuestras elegantes gafas de sol.',
            productoLentesContacto: 'Lentes de Contacto',
            productoLentesContactoDesc: 'Lentes de contacto cómodas y seguras para una visión clara sin gafas.',
            productoAccesorios: 'Soluciones y Accesorios',
            productoAccesoriosDesc: 'Todo lo que necesitas para el cuidado y mantenimiento de tus lentes.',
            featureLentesCalidad: 'Lentes de alta calidad',
            featureMonturasModernas: 'Monturas modernas',
            featureProteccionUV: 'Protección UV',
            featureProteccion100UV: '100% protección UV',
            featureDisenosExclusivos: 'Diseños exclusivos',
            featureLentesPolarizadas: 'Lentes polarizadas',
            featureMaximaComodidad: 'Máxima comodidad',
            featureDiferentesTipos: 'Diferentes tipos',
            featureFacilMantenimiento: 'Fácil mantenimiento',
            featureLiquidosLimpiadores: 'Líquidos limpiadores',
            featureEstuchesProtectores: 'Estuches protectores',
            featurePannosMicrofibra: 'Paños de microfibra',
            btnVerMas: 'Ver más',
            
            // Contacto
            sectionContacto: 'Contacto',
            sectionSubtitleContacto: 'Estamos aquí para ayudarte. Ponte en contacto con nosotros',
            contactoDireccion: 'Dirección',
            contactoTelefono: 'Teléfono',
            contactoEmail: 'Email',
            contactoHorario: 'Horario',
            horarioSemana: 'Lunes - Viernes: 9:30 - 17:00',
            horarioSabado: 'Sábados: 10:00 - 14:00',
            
            // Footer
            footerCopyright: '© 2025 Óptica Imagen.',
            
            // Modales
            modalExamenTitulo: 'Exámenes de la Vista',
            modalExamenTexto: 'En Óptica Imagen nuestro servicio de optometría es ofrecido por profesionales idóneos en salud visual con más de 30 años de experiencia, quienes a través de un examen dan un resultado conocido comúnmente como resultado refractivo, donde se permite identificar de manera exacta si el paciente padece de alguna alteración visual y que tratamiento requiere.',
            modalLentesTitulo: 'Lentes de Contacto',
            modalLentesTexto: 'En Óptica Imagen entendemos que buscas lo mejor para tus ojos. Por eso, ofrecemos exclusivamente lentes de contacto de la más alta calidad, diseñados con la tecnología más avanzada para brindarte una experiencia visual inigualable.',
            modalGafasTitulo: 'Gafas',
            modalGafasTexto1: 'En Óptica Imagen creemos que tus gafas deben ser una extensión perfecta de tu personalidad y estilo de vida. Por eso, ofrecemos gafas de la más alta calidad, donde cada componente desde la montura hasta los cristales está diseñado con precisión de relojería para ofrecerte una experiencia visual inigualable.',
            modalGafasTecnologia: 'TECNOLOGÍA LENTES DE VANGUARDIA',
            modalGafasTecnologiaDesc: 'Nuestros cristales premium incorporan los tratamientos más avanzados del mercado:',
            modalGafasAntiReflejante: 'Anti-Reflejante de Última Generación:',
            modalGafasAntiReflejanteDesc: 'Elimina los reflejos molestos, mejorando el contraste y la transparencia visual. Sus ojos se verán con total naturalidad.',
            modalGafasFiltroAzul: 'Filtro de Luz Azul Protección Total:',
            modalGafasFiltroAzulDesc: 'Protege sus ojos de la luz azul nociva emitida por pantallas digitales, reduciendo la fatiga visual y mejorando la calidad del sueño.',
            modalGafasMateriales: 'MATERIALES EXCLUSIVOS Y CONFORT EXCEPCIONAL',
            modalGafasMonturas: 'Monturas Ultraligeras:',
            modalGafasMonturasDesc: 'Olvídate de la sensación de peso, incluso en graduaciones altas.',
            modalGafasAjuste: 'Ajuste Perfecto:',
            modalGafasAjusteDesc: 'Sistema de ajuste micrométrico en patillas que garantiza una adaptación personalizada y un confort que perdura todo el día.',
            
            // Accesibilidad
            accesibilidad: 'Accesibilidad',
            accesibilidadAumentar: 'Aumentar tamaño de texto',
            accesibilidadDisminuir: 'Disminuir tamaño de texto',
            accesibilidadContraste: 'Alto contraste',
            accesibilidadReset: 'Restablecer configuración'
        },
        en: {
            // Navigation
            navInicio: 'Home',
            navNosotros: 'About Us',
            navProductos: 'Products',
            navServicios: 'Services',
            navContacto: 'Contact',
            
            // Hero Section
            heroSubtitle: 'Your vision is our priority',
            heroDescription: 'At Óptica Imagen we offer the best solutions for eye care. With more than 30 years of experience and cutting-edge technology, we help you see the world clearly.',
            btnAgendaCita: 'Schedule your appointment',
            
            // Services
            sectionNuestrosServicios: 'Our Services',
            servicioGafas: 'Glasses',
            servicioGafasDesc: 'Wide variety of frames and styles',
            servicioLentesContacto: 'Contact Lenses',
            servicioLentesContactoDesc: 'Lenses for different needs',
            servicioExamenVisual: 'Eye Exam',
            servicioExamenVisualDesc: 'Complete and professional exams',
            btnSaberMas: 'Learn more',
            
            // About Us
            sectionSobreNosotros: 'About Us',
            sectionSubtitleNosotros: 'Learn about the history and values of Óptica Imagen',
            nuestraHistoria: 'Our History',
            historiaTexto1: 'Óptica Imagen was born with the vision of providing the best visual care to our clients. Since our beginnings, we have been committed to offering high-quality products and professional services that improve people\'s lives through clear and healthy vision.',
            historiaTexto2: 'With years of experience in the sector, we have built a reputation based on trust, excellence, and commitment to each of our clients. Our team of highly qualified professionals is always ready to help you find the best solution for your visual needs.',
            nuestrosValores: 'Our Values',
            valorExcelencia: 'Excellence',
            valorExcelenciaDesc: 'We strive to offer the highest level of quality in all our products and services.',
            valorCompromiso: 'Commitment',
            valorCompromisoDesc: 'We are committed to the well-being and satisfaction of each of our clients.',
            valorInnovacion: 'Innovation',
            valorInnovacionDesc: 'We use cutting-edge technology to offer you the best visual solutions.',
            valorConfianza: 'Trust',
            valorConfianzaDesc: 'We build lasting relationships based on honesty and transparency.',
            nuestraMision: 'Our Mission',
            misionTexto: 'To provide excellence visual solutions that improve the quality of life of our clients, offering high-quality products, personalized professional services, and close treatment that generates trust and satisfaction.',
            nuestraVision: 'Our Vision',
            visionTexto: 'To be the reference optometry in our community, recognized for our excellence in service, innovation in visual technology, and constant commitment to the eye health care of our clients.',
            
            // Products
            sectionNuestrosProductos: 'Our Products',
            sectionSubtitleProductos: 'Discover our wide range of products for vision care',
            productoGafasGraduadas: 'Prescription Lenses',
            productoGafasGraduadasDesc: 'Prescription lenses with the best quality and design to correct your vision.',
            productoGafasSol: 'Sunglasses',
            productoGafasSolDesc: 'Protect your eyes from UV rays with our elegant sunglasses.',
            productoLentesContacto: 'Contact Lenses',
            productoLentesContactoDesc: 'Comfortable and safe contact lenses for clear vision without glasses.',
            productoAccesorios: 'Solutions and Accessories',
            productoAccesoriosDesc: 'Everything you need for the care and maintenance of your lenses.',
            featureLentesCalidad: 'High quality lenses',
            featureMonturasModernas: 'Modern frames',
            featureProteccionUV: 'UV protection',
            featureProteccion100UV: '100% UV protection',
            featureDisenosExclusivos: 'Exclusive designs',
            featureLentesPolarizadas: 'Polarized lenses',
            featureMaximaComodidad: 'Maximum comfort',
            featureDiferentesTipos: 'Different types',
            featureFacilMantenimiento: 'Easy maintenance',
            featureLiquidosLimpiadores: 'Cleaning solutions',
            featureEstuchesProtectores: 'Protective cases',
            featurePannosMicrofibra: 'Microfiber cloths',
            btnVerMas: 'View more',
            
            // Contact
            sectionContacto: 'Contact',
            sectionSubtitleContacto: 'We are here to help you. Get in touch with us',
            contactoDireccion: 'Address',
            contactoTelefono: 'Phone',
            contactoEmail: 'Email',
            contactoHorario: 'Schedule',
            horarioSemana: 'Monday - Friday: 9:30 - 17:00',
            horarioSabado: 'Saturdays: 10:00 - 14:00',
            
            // Footer
            footerCopyright: '© 2025 Óptica Imagen.',
            
            // Modals
            modalExamenTitulo: 'Eye Exams',
            modalExamenTexto: 'At Óptica Imagen our optometry service is offered by qualified professionals in visual health with more than 30 years of experience, who through an exam provide a result commonly known as a refractive result, which allows us to accurately identify if the patient suffers from any visual alteration and what treatment they require.',
            modalLentesTitulo: 'Contact Lenses',
            modalLentesTexto: 'At Óptica Imagen we understand that you seek the best for your eyes. That\'s why we offer exclusively the highest quality contact lenses, designed with the most advanced technology to provide you with an unparalleled visual experience.',
            modalGafasTitulo: 'Glasses',
            modalGafasTexto1: 'At Óptica Imagen we believe that your glasses should be a perfect extension of your personality and lifestyle. That\'s why we offer the highest quality glasses, where every component from the frame to the lenses is designed with watchmaking precision to offer you an unparalleled visual experience.',
            modalGafasTecnologia: 'CUTTING-EDGE LENS TECHNOLOGY',
            modalGafasTecnologiaDesc: 'Our premium lenses incorporate the most advanced treatments on the market:',
            modalGafasAntiReflejante: 'Next-Generation Anti-Reflective:',
            modalGafasAntiReflejanteDesc: 'Eliminates annoying reflections, improving contrast and visual transparency. Your eyes will look completely natural.',
            modalGafasFiltroAzul: 'Total Blue Light Filter Protection:',
            modalGafasFiltroAzulDesc: 'Protects your eyes from harmful blue light emitted by digital screens, reducing eye strain and improving sleep quality.',
            modalGafasMateriales: 'EXCLUSIVE MATERIALS AND EXCEPTIONAL COMFORT',
            modalGafasMonturas: 'Ultra-lightweight Frames:',
            modalGafasMonturasDesc: 'Forget about the feeling of weight, even with high prescriptions.',
            modalGafasAjuste: 'Perfect Fit:',
            modalGafasAjusteDesc: 'Micrometric adjustment system on temples that guarantees personalized adaptation and comfort that lasts all day.',
            
            // Accessibility
            accesibilidad: 'Accessibility',
            accesibilidadAumentar: 'Increase text size',
            accesibilidadDisminuir: 'Decrease text size',
            accesibilidadContraste: 'High contrast',
            accesibilidadReset: 'Reset settings'
        }
    };

    // Función para cambiar el idioma
    function changeLanguage(lang) {
        const t = translations[lang];
        if (!t) return;

        // Actualizar atributo lang del HTML
        document.documentElement.lang = lang;

        // Navegación
        const navLinks = document.querySelectorAll('.nav-link');
        if (navLinks[0]) navLinks[0].textContent = t.navInicio;
        if (navLinks[1]) navLinks[1].textContent = t.navNosotros;
        if (navLinks[2]) navLinks[2].textContent = t.navProductos;
        if (navLinks[3]) navLinks[3].textContent = t.navServicios;
        if (navLinks[4]) navLinks[4].textContent = t.navContacto;

        // Hero Section
        const heroSubtitle = document.querySelector('.hero-subtitle');
        if (heroSubtitle) heroSubtitle.textContent = t.heroSubtitle;
        
        const heroDescription = document.querySelector('.hero-description');
        if (heroDescription) heroDescription.textContent = t.heroDescription;
        
        const btnAgendaCita = document.querySelectorAll('.btn-whatsapp');
        btnAgendaCita.forEach(btn => {
            if (btn) btn.textContent = t.btnAgendaCita;
        });

        // Servicios - Página principal
        const sectionTitles = document.querySelectorAll('.section-title');
        const serviciosMain = document.querySelector('#inicio .section-title');
        if (serviciosMain) serviciosMain.textContent = t.sectionNuestrosServicios;

        const serviceItems = document.querySelectorAll('.service-item');
        if (serviceItems[0]) {
            const h3 = serviceItems[0].querySelector('h3');
            const p = serviceItems[0].querySelector('p');
            if (h3) h3.textContent = t.servicioGafas;
            if (p) p.textContent = t.servicioGafasDesc;
        }
        if (serviceItems[1]) {
            const h3 = serviceItems[1].querySelector('h3');
            const p = serviceItems[1].querySelector('p');
            if (h3) h3.textContent = t.servicioLentesContacto;
            if (p) p.textContent = t.servicioLentesContactoDesc;
        }
        if (serviceItems[2]) {
            const h3 = serviceItems[2].querySelector('h3');
            const p = serviceItems[2].querySelector('p');
            if (h3) h3.textContent = t.servicioExamenVisual;
            if (p) p.textContent = t.servicioExamenVisualDesc;
        }

        // Botones "Saber más"
        const btnSaberMas = document.querySelectorAll('.btn-saber-mas');
        btnSaberMas.forEach(btn => {
            if (btn) btn.textContent = t.btnSaberMas;
        });

        // Sección Nosotros
        const sobreNosotros = document.querySelector('#nosotros .section-title');
        if (sobreNosotros) sobreNosotros.textContent = t.sectionSobreNosotros;
        
        const subtitleNosotros = document.querySelector('#nosotros .section-subtitle');
        if (subtitleNosotros) subtitleNosotros.textContent = t.sectionSubtitleNosotros;

        const nuestraHistoria = document.querySelector('#nosotros h3');
        if (nuestraHistoria) nuestraHistoria.textContent = t.nuestraHistoria;

        const historiaTexts = document.querySelectorAll('#nosotros .about-text p');
        if (historiaTexts[0]) historiaTexts[0].textContent = t.historiaTexto1;
        if (historiaTexts[1]) historiaTexts[1].textContent = t.historiaTexto2;

        const valoresTitle = document.querySelector('.values-title');
        if (valoresTitle) valoresTitle.textContent = t.nuestrosValores;

        const valueCards = document.querySelectorAll('.value-card');
        if (valueCards[0]) {
            const h4 = valueCards[0].querySelector('h4');
            const p = valueCards[0].querySelector('p');
            if (h4) h4.textContent = t.valorExcelencia;
            if (p) p.textContent = t.valorExcelenciaDesc;
        }
        if (valueCards[1]) {
            const h4 = valueCards[1].querySelector('h4');
            const p = valueCards[1].querySelector('p');
            if (h4) h4.textContent = t.valorCompromiso;
            if (p) p.textContent = t.valorCompromisoDesc;
        }
        if (valueCards[2]) {
            const h4 = valueCards[2].querySelector('h4');
            const p = valueCards[2].querySelector('p');
            if (h4) h4.textContent = t.valorInnovacion;
            if (p) p.textContent = t.valorInnovacionDesc;
        }
        if (valueCards[3]) {
            const h4 = valueCards[3].querySelector('h4');
            const p = valueCards[3].querySelector('p');
            if (h4) h4.textContent = t.valorConfianza;
            if (p) p.textContent = t.valorConfianzaDesc;
        }

        const missionCard = document.querySelector('.mission-card h3');
        if (missionCard) missionCard.textContent = t.nuestraMision;
        const missionText = document.querySelector('.mission-card p');
        if (missionText) missionText.textContent = t.misionTexto;

        const visionCard = document.querySelector('.vision-card h3');
        if (visionCard) visionCard.textContent = t.nuestraVision;
        const visionText = document.querySelector('.vision-card p');
        if (visionText) visionText.textContent = t.visionTexto;

        // Sección Productos
        const productosTitle = document.querySelector('#productos .section-title');
        if (productosTitle) productosTitle.textContent = t.sectionNuestrosProductos;
        
        const productosSubtitle = document.querySelector('#productos .section-subtitle');
        if (productosSubtitle) productosSubtitle.textContent = t.sectionSubtitleProductos;

        const productCards = document.querySelectorAll('.product-card');
        if (productCards[0]) {
            const h3 = productCards[0].querySelector('h3');
            const p = productCards[0].querySelector('p');
            if (h3) h3.textContent = t.productoGafasGraduadas;
            if (p) p.textContent = t.productoGafasGraduadasDesc;
            const features = productCards[0].querySelectorAll('.product-features li');
            if (features[0]) features[0].textContent = t.featureLentesCalidad;
            if (features[1]) features[1].textContent = t.featureMonturasModernas;
            if (features[2]) features[2].textContent = t.featureProteccionUV;
        }
        if (productCards[1]) {
            const h3 = productCards[1].querySelector('h3');
            const p = productCards[1].querySelector('p');
            if (h3) h3.textContent = t.productoGafasSol;
            if (p) p.textContent = t.productoGafasSolDesc;
            const features = productCards[1].querySelectorAll('.product-features li');
            if (features[0]) features[0].textContent = t.featureProteccion100UV;
            if (features[1]) features[1].textContent = t.featureDisenosExclusivos;
            if (features[2]) features[2].textContent = t.featureLentesPolarizadas;
        }
        if (productCards[2]) {
            const h3 = productCards[2].querySelector('h3');
            const p = productCards[2].querySelector('p');
            if (h3) h3.textContent = t.productoLentesContacto;
            if (p) p.textContent = t.productoLentesContactoDesc;
            const features = productCards[2].querySelectorAll('.product-features li');
            if (features[0]) features[0].textContent = t.featureMaximaComodidad;
            if (features[1]) features[1].textContent = t.featureDiferentesTipos;
            if (features[2]) features[2].textContent = t.featureFacilMantenimiento;
        }
        if (productCards[3]) {
            const h3 = productCards[3].querySelector('h3');
            const p = productCards[3].querySelector('p');
            if (h3) h3.textContent = t.productoAccesorios;
            if (p) p.textContent = t.productoAccesoriosDesc;
            const features = productCards[3].querySelectorAll('.product-features li');
            if (features[0]) features[0].textContent = t.featureLiquidosLimpiadores;
            if (features[1]) features[1].textContent = t.featureEstuchesProtectores;
            if (features[2]) features[2].textContent = t.featurePannosMicrofibra;
        }

        const btnVerMas = document.querySelectorAll('.btn-ver-mas');
        btnVerMas.forEach(btn => {
            if (btn) btn.textContent = t.btnVerMas;
        });

        // Sección Servicios
        const serviciosTitle = document.querySelector('#servicios .section-title');
        if (serviciosTitle) serviciosTitle.textContent = t.sectionNuestrosServicios;

        const serviciosItems = document.querySelectorAll('#servicios .service-item');
        if (serviciosItems[0]) {
            const h3 = serviciosItems[0].querySelector('h3');
            const p = serviciosItems[0].querySelector('p');
            if (h3) h3.textContent = t.servicioGafas;
            if (p) p.textContent = t.servicioGafasDesc;
        }
        if (serviciosItems[1]) {
            const h3 = serviciosItems[1].querySelector('h3');
            const p = serviciosItems[1].querySelector('p');
            if (h3) h3.textContent = t.servicioLentesContacto;
            if (p) p.textContent = t.servicioLentesContactoDesc;
        }
        if (serviciosItems[2]) {
            const h3 = serviciosItems[2].querySelector('h3');
            const p = serviciosItems[2].querySelector('p');
            if (h3) h3.textContent = t.servicioExamenVisual;
            if (p) p.textContent = t.servicioExamenVisualDesc;
        }

        // Sección Contacto
        const contactoTitle = document.querySelector('#contacto .section-title');
        if (contactoTitle) contactoTitle.textContent = t.sectionContacto;
        
        const contactoSubtitle = document.querySelector('#contacto .section-subtitle');
        if (contactoSubtitle) contactoSubtitle.textContent = t.sectionSubtitleContacto;

        const infoCards = document.querySelectorAll('.info-card h3');
        if (infoCards[0]) infoCards[0].textContent = t.contactoDireccion;
        if (infoCards[1]) infoCards[1].textContent = t.contactoTelefono;
        if (infoCards[2]) infoCards[2].textContent = t.contactoEmail;
        if (infoCards[3]) infoCards[3].textContent = t.contactoHorario;

        const horarioText = document.querySelector('#contacto .info-card:last-child p');
        if (horarioText) {
            horarioText.innerHTML = `${t.horarioSemana}<br>${t.horarioSabado}`;
        }

        // Footer
        const footer = document.querySelector('.footer p');
        if (footer) footer.textContent = t.footerCopyright;

        // Modales
        const modalExamenH2 = document.querySelector('#modalExamenes h2');
        if (modalExamenH2) modalExamenH2.textContent = t.modalExamenTitulo;
        const modalExamenP = document.querySelector('#modalExamenes p');
        if (modalExamenP) modalExamenP.textContent = t.modalExamenTexto;

        const modalLentesH2 = document.querySelector('#modalLentesContacto h2');
        if (modalLentesH2) modalLentesH2.textContent = t.modalLentesTitulo;
        const modalLentesP = document.querySelector('#modalLentesContacto p');
        if (modalLentesP) modalLentesP.textContent = t.modalLentesTexto;

        const modalGafasH2 = document.querySelector('#modalGafas h2');
        if (modalGafasH2) modalGafasH2.textContent = t.modalGafasTitulo;
        const modalGafasP1 = document.querySelector('#modalGafas .modal-content p');
        if (modalGafasP1) modalGafasP1.textContent = t.modalGafasTexto1;
        
        const modalGafasH3 = document.querySelectorAll('#modalGafas h3');
        if (modalGafasH3[0]) modalGafasH3[0].textContent = t.modalGafasTecnologia;
        if (modalGafasH3[1]) modalGafasH3[1].textContent = t.modalGafasMateriales;
        
        const modalGafasP2 = document.querySelectorAll('#modalGafas .modal-content p');
        if (modalGafasP2[1]) modalGafasP2[1].textContent = t.modalGafasTecnologiaDesc;
        
        const modalGafasList = document.querySelectorAll('#modalGafas .modal-list li');
        if (modalGafasList[0]) {
            const strong = modalGafasList[0].querySelector('strong');
            if (strong) strong.textContent = t.modalGafasAntiReflejante;
            const text = modalGafasList[0].textContent.replace(t.modalGafasAntiReflejante, '').trim();
            modalGafasList[0].innerHTML = `<strong>${t.modalGafasAntiReflejante}</strong> ${t.modalGafasAntiReflejanteDesc}`;
        }
        if (modalGafasList[1]) {
            const strong = modalGafasList[1].querySelector('strong');
            if (strong) strong.textContent = t.modalGafasFiltroAzul;
            modalGafasList[1].innerHTML = `<strong>${t.modalGafasFiltroAzul}</strong> ${t.modalGafasFiltroAzulDesc}`;
        }
        if (modalGafasList[2]) {
            const strong = modalGafasList[2].querySelector('strong');
            if (strong) strong.textContent = t.modalGafasMonturas;
            modalGafasList[2].innerHTML = `<strong>${t.modalGafasMonturas}</strong> ${t.modalGafasMonturasDesc}`;
        }
        if (modalGafasList[3]) {
            const strong = modalGafasList[3].querySelector('strong');
            if (strong) strong.textContent = t.modalGafasAjuste;
            modalGafasList[3].innerHTML = `<strong>${t.modalGafasAjuste}</strong> ${t.modalGafasAjusteDesc}`;
        }

        // Accesibilidad
        const accesibilidadH3 = document.querySelector('#accessibilityMenu h3');
        if (accesibilidadH3) accesibilidadH3.textContent = t.accesibilidad;
        
        const accesibilidadBtns = document.querySelectorAll('.accessibility-btn span');
        if (accesibilidadBtns[2]) accesibilidadBtns[2].textContent = t.accesibilidadContraste;
        if (accesibilidadBtns[3]) accesibilidadBtns[3].textContent = t.accesibilidadReset;

        // Guardar preferencia
        localStorage.setItem('language', lang);
    }

    // Event listeners para los botones de idioma
    const langColombia = document.getElementById('langColombia');
    const langUSA = document.getElementById('langUSA');

    if (langColombia) {
        langColombia.addEventListener('click', () => {
            changeLanguage('es');
        });
    }

    if (langUSA) {
        langUSA.addEventListener('click', () => {
            changeLanguage('en');
        });
    }

    // Cargar idioma guardado al iniciar
    const savedLanguage = localStorage.getItem('language') || 'es';
    changeLanguage(savedLanguage);
});

