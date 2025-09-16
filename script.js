        // Datos de las obras (simulando una base de datos)
        const obras = [
            {
                id: 1,
                titulo: "Amanecer en la montaña",
                categoria: "paisajismo",
                año: 2022,
                dimensiones: "80x60 cm",
                tecnica: "Óleo sobre lienzo",
                imagen: "https://images.pexels.com/photos/206395/pexels-photo-206395.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                descripcion: "Esta obra captura la esencia del amanecer en las montañas, con juegos de luz y sombra que crean una atmósfera mágica.",
                proceso: "Pintado alla prima, con capas de color aplicadas directamente sobre el lienzo sin dibujo preparatorio previo.",
                materiales: "Óleos de alta calidad sobre lienzo de lino, utilizando pinceles de pelo de marta y cerda."
            },
            {
                id: 2,
                titulo: "Naturaleza muerta con frutas",
                categoria: "bodegones",
                año: 2021,
                dimensiones: "50x70 cm",
                tecnica: "Óleo sobre lienzo",
                imagen: "https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                descripcion: "Bodegón clásico con composición equilibrada y colores vibrantes que realzan la textura de las frutas.",
                proceso: "Técnica de veladuras superpuestas para lograr profundidad y realismo en las texturas.",
                materiales: "Óleos sobre lienzo de algodón, con pinceles de pelo sintético y natural."
            },
            {
                id: 3,
                titulo: "Retrato de Elena",
                categoria: "retratos",
                año: 2023,
                dimensiones: "60x80 cm",
                tecnica: "Óleo sobre lienzo",
                imagen: "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                descripcion: "Retrato íntimo que captura la personalidad y expresión única de la modelo.",
                proceso: "Trabajo de capas con énfasis en la captura de la luz sobre los rasgos faciales.",
                materiales: "Óleos sobre lienzo de lino, utilizando pinceles finos de pelo de marta para los detalles."
            },
            {
                id: 4,
                titulo: "Abstracción en azul",
                categoria: "abstraccion",
                año: 2020,
                dimensiones: "100x100 cm",
                tecnica: "Óleo sobre lienzo",
                imagen: "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                descripcion: "Exploración abstracta del color azul y sus múltiples matices y emociones.",
                proceso: "Aplicación gestual de la pintura con espátula y pinceladas expresivas.",
                materiales: "Óleos de diferentes viscosidades sobre lienzo de algodón."
            },
            {
                id: 5,
                titulo: "Luz de mediodía",
                categoria: "luz",
                año: 2022,
                dimensiones: "70x90 cm",
                tecnica: "Óleo sobre lienzo",
                imagen: "https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                descripcion: "Estudio de la luz natural en su momento más intenso del día.",
                proceso: "Técnica impresionista con pinceladas visibles que capturan el efecto de la luz.",
                materiales: "Óleos sobre lienzo de lino, con pinceles de cerda para texturas marcadas."
            },
            {
                id: 6,
                titulo: "Reflejos urbanos",
                categoria: "otros",
                año: 2021,
                dimensiones: "80x120 cm",
                tecnica: "Óleo sobre lienzo",
                imagen: "https://images.pexels.com/photos/1462636/pexels-photo-1462636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                descripcion: "Visión personal de la ciudad a través de sus reflejos y superficies.",
                proceso: "Superposición de capas transparentes para lograr efectos de profundidad y reflexión.",
                materiales: "Óleos y medios de transparencia sobre lienzo de lino."
            }
        ];

        // Variables globales para la galería 3D
        const radius = 240; // Radio del carrusel
        const autoRotate = true; // Rotación automática
        const rotateSpeed = -60; // Velocidad de rotación (segundos/360 grados)
        const imgWidth = 120; // Ancho de imágenes
        const imgHeight = 170; // Alto de imágenes

        // Inicialización cuando el DOM esté cargado
        document.addEventListener('DOMContentLoaded', function() {
            initGallery();
            initFilters();
            initLightbox();
            initModal();
            initNav();
        });

        /**
         * Inicializa la galería 3D con las obras de arte
         * Crea los elementos img en el contenedor para el efecto carrusel
         */
        function initGallery() {
            const spinContainer = document.getElementById('spin-container');
            
            // Crear elementos img para cada obra
            obras.forEach(obra => {
                const img = document.createElement('img');
                img.src = obra.imagen;
                img.alt = obra.titulo;
                img.dataset.id = obra.id;
                img.dataset.categoria = obra.categoria;
                spinContainer.appendChild(img);
            });
            
            // Configurar dimensiones del contenedor
            spinContainer.style.width = imgWidth + "px";
            spinContainer.style.height = imgHeight + "px";
            
            // Configurar suelo
            const ground = document.getElementById('ground');
            ground.style.width = radius * 3 + "px";
            ground.style.height = radius * 3 + "px";
            
            // Iniciar animación después de un breve retraso
            setTimeout(() => {
                initCarousel();
            }, 1000);
        }

        /**
         * Inicializa el carrusel 3D con todas las imágenes
         * Posiciona cada imagen en un círculo y configura la rotación
         */
        function initCarousel() {
            const odrag = document.getElementById('drag-container');
            const ospin = document.getElementById('spin-container');
            const aImg = ospin.getElementsByTagName('img');
            const aEle = [...aImg];
            
            // Aplicar transformaciones a cada imagen
            aEle.forEach((ele, i) => {
                ele.style.transform = `rotateY(${i * (360 / aEle.length)}deg) translateZ(${radius}px)`;
                ele.style.transition = "transform 1s";
                ele.style.transitionDelay = `${aEle.length - i / 4}s`;
            });
            
            // Configurar rotación automática
            if (autoRotate) {
                const animationName = rotateSpeed > 0 ? 'spin' : 'spinRevert';
                ospin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
            }
            
            // Configurar eventos de arrastre
            setupDragEvents(odrag, ospin);
        }

        /**
         * Configura los eventos de arrastre para el carrusel 3D
         * @param {HTMLElement} odrag - Elemento contenedor de arrastre
         * @param {HTMLElement} ospin - Elemento contenedor de giro
         */
        function setupDragEvents(odrag, ospin) {
            let sX, sY, nX, nY, desX = 0, desY = 0, tX = 0, tY = 10;
            
            // Aplicar transformación al elemento
            const applyTranform = (obj) => {
                if (tY > 180) tY = 180;
                if (tY < 0) tY = 0;
                
                obj.style.transform = `rotateX(${-tY}deg) rotateY(${tX}deg)`;
            };
            
            // Pausar/reanudar la rotación
            const playSpin = (yes) => {
                ospin.style.animationPlayState = yes ? 'running' : 'paused';
            };
            
            // Evento al presionar el mouse/touch
            odrag.onpointerdown = function(e) {
                clearInterval(odrag.timer);
                e = e || window.event;
                sX = e.clientX;
                sY = e.clientY;
                
                // Evento al mover el mouse/touch
                this.onpointermove = function(e) {
                    e = e || window.event;
                    nX = e.clientX;
                    nY = e.clientY;
                    desX = nX - sX;
                    desY = nY - sY;
                    tX += desX * 0.1;
                    tY += desY * 0.1;
                    applyTranform(odrag);
                    sX = nX;
                    sY = nY;
                };
                
                // Evento al soltar el mouse/touch
                this.onpointerup = function() {
                    odrag.timer = setInterval(() => {
                        desX *= 0.95;
                        desY *= 0.95;
                        tX += desX * 0.1;
                        tY += desY * 0.1;
                        applyTranform(odrag);
                        playSpin(false);
                        
                        if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
                            clearInterval(odrag.timer);
                            playSpin(true);
                        }
                    }, 17);
                    
                    this.onpointermove = this.onpointerup = null;
                };
                
                return false;
            };
            
            // Evento de rueda del mouse para zoom
            odrag.onmousewheel = function(e) {
                e = e || window.event;
                const d = e.wheelDelta / 20 || -e.detail;
                radius += d;
                initCarousel();
            };
        }

        /**
         * Inicializa los filtros de categoría y búsqueda
         * Configura los event listeners para los botones de filtro y búsqueda
         */
        function initFilters() {
            const filterBtns = document.querySelectorAll('.filter-btn');
            const searchInput = document.querySelector('.search-input');
            const searchBtn = document.querySelector('.search-btn');
            
            // Eventos para los botones de filtro
            filterBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    // Remover clase active de todos los botones
                    filterBtns.forEach(b => b.classList.remove('active'));
                    // Agregar clase active al botón clickeado
                    this.classList.add('active');
                    
                    // Filtrar obras por categoría
                    const filter = this.dataset.filter;
                    filterObras(filter);
                });
            });
            
            // Evento para el botón de búsqueda
            searchBtn.addEventListener('click', function() {
                const searchTerm = searchInput.value.toLowerCase();
                searchObras(searchTerm);
            });
            
            // Evento para la tecla Enter en el input de búsqueda
            searchInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    const searchTerm = this.value.toLowerCase();
                    searchObras(searchTerm);
                }
            });
        }

        /**
         * Filtra las obras por categoría
         * @param {string} category - Categoría por la cual filtrar
         */
        function filterObras(category) {
            const images = document.querySelectorAll('#spin-container img');
            
            images.forEach(img => {
                if (category === 'all' || img.dataset.categoria === category) {
                    img.style.display = 'block';
                } else {
                    img.style.display = 'none';
                }
            });
            
            // Re-inicializar el carrusel después de filtrar
            setTimeout(() => {
                initCarousel();
            }, 300);
        }

        /**
         * Busca obras por término en título o descripción
         * @param {string} term - Término de búsqueda
         */
        function searchObras(term) {
            const images = document.querySelectorAll('#spin-container img');
            let found = false;
            
            images.forEach(img => {
                const id = img.dataset.id;
                const obra = obras.find(o => o.id == id);
                
                if (obra && (
                    obra.titulo.toLowerCase().includes(term) || 
                    obra.descripcion.toLowerCase().includes(term) ||
                    obra.tecnica.toLowerCase().includes(term)
                )) {
                    img.style.display = 'block';
                    found = true;
                } else {
                    img.style.display = 'none';
                }
            });
            
            // Re-inicializar el carrusel después de buscar
            setTimeout(() => {
                initCarousel();
            }, 300);
            
            // Mostrar mensaje si no se encontraron resultados
            if (!found) {
                alert('No se encontraron obras que coincidan con su búsqueda.');
            }
        }

        /**
         * Inicializa el lightbox para vista ampliada de obras
         * Configura los event listeners para abrir y cerrar el lightbox
         */
        function initLightbox() {
            const lightbox = document.querySelector('.lightbox');
            const lightboxImg = document.querySelector('.lightbox-img');
            const lightboxTitle = document.querySelector('.lightbox-title');
            const lightboxYear = document.querySelector('.lightbox-year');
            const lightboxDimensions = document.querySelector('.lightbox-dimensions');
            const lightboxTechnique = document.querySelector('.lightbox-technique');
            const lightboxClose = document.querySelector('.lightbox-close');
            const btnDetails = document.querySelector('.btn-details');
            
            // Evento para hacer clic en una imagen
            document.addEventListener('click', function(e) {
                if (e.target.matches('#spin-container img')) {
                    const id = e.target.dataset.id;
                    const obra = obras.find(o => o.id == id);
                    
                    if (obra) {
                        // Llenar el lightbox con la información de la obra
                        lightboxImg.src = obra.imagen;
                        lightboxTitle.textContent = obra.titulo;
                        lightboxYear.textContent = `Año: ${obra.año}`;
                        lightboxDimensions.textContent = `Dimensiones: ${obra.dimensiones}`;
                        lightboxTechnique.textContent = `Técnica: ${obra.tecnica}`;
                        btnDetails.dataset.id = obra.id;
                        
                        // Mostrar el lightbox
                        lightbox.style.display = 'flex';
                    }
                }
            });
            
            // Evento para cerrar el lightbox
            lightboxClose.addEventListener('click', function() {
                lightbox.style.display = 'none';
            });
            
            // Evento para el botón de ver detalles
            btnDetails.addEventListener('click', function() {
                const id = this.dataset.id;
                openModal(id);
                lightbox.style.display = 'none';
            });
            
            // Cerrar lightbox al hacer clic fuera del contenido
            lightbox.addEventListener('click', function(e) {
                if (e.target === lightbox) {
                    lightbox.style.display = 'none';
                }
            });
        }

        /**
         * Inicializa el modal de detalles de obra
         * Configura los event listeners para abrir y cerrar el modal
         */
        function initModal() {
            const modal = document.querySelector('.modal');
            const modalClose = document.querySelector('.modal-close');
            
            // Evento para cerrar el modal
            modalClose.addEventListener('click', function() {
                modal.style.display = 'none';
            });
            
            // Cerrar modal al hacer clic fuera del contenido
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    modal.style.display = 'none';
                }
            });
            
            // Evento para el botón de contacto
            document.querySelector('.btn-contact').addEventListener('click', function() {
                alert('Formulario de contacto abierto para esta obra.');
                // Aquí se podría abrir un formulario de contacto o redirigir a una página de contacto
            });
        }

        /**
         * Abre el modal con los detalles completos de una obra
         * @param {number} id - ID de la obra a mostrar
         */
        function openModal(id) {
            const modal = document.querySelector('.modal');
            const obra = obras.find(o => o.id == id);
            
            if (obra) {
                // Llenar el modal con la información de la obra
                document.querySelector('.modal-img').src = obra.imagen;
                document.querySelector('.modal-title').textContent = obra.titulo;
                document.querySelector('.modal-year').textContent = `Año: ${obra.año}`;
                document.querySelector('.modal-dimensions').textContent = `Dimensiones: ${obra.dimensiones}`;
                document.querySelector('.modal-technique').textContent = `Técnica: ${obra.tecnica}`;
                document.querySelector('.modal-description').innerHTML = `<h3>Descripción</h3><p>${obra.descripcion}</p>`;
                document.querySelector('.modal-process').innerHTML = `<h3>Proceso</h3><p>${obra.proceso}</p>`;
                document.querySelector('.modal-materials').innerHTML = `<h3>Materiales</h3><p>${obra.materiales}</p>`;
                
                // Mostrar el modal
                modal.style.display = 'flex';
            }
        }

        /**
         * Inicializa la navegación responsive
         * Configura el evento para el menú hamburguesa
         */
        function initNav() {
            const hamburger = document.querySelector('.hamburger');
            const navMenu = document.querySelector('.nav-menu');
            
            hamburger.addEventListener('click', function() {
                navMenu.classList.toggle('active');
            });
            
            // Cerrar menú al hacer clic en un enlace
            document.querySelectorAll('.nav-menu a').forEach(link => {
                link.addEventListener('click', function() {
                    navMenu.classList.remove('active');
                });
            });
        }