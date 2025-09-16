import { obras } from './obras.js';

// Variables globales para la galería 3D
const radius = 240; // Radio del carrusel
const autoRotate = true; // Rotación automática
const rotateSpeed = -60; // Velocidad de rotación (segundos/360 grados)
const imgWidth = 120; // Ancho de imágenes
const imgHeight = 170; // Alto de imágenes

// Inicialización cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function () {
    initGalleries();
    initFilters();
    initLightbox();
    initModal();
    initNav();
});


/**
* Filtra las galerías por categoría
* @param {string} category - Categoría por la cual filtrar
*/
function filterGalleries(category) {
    // Ocultar todas las galerías
    document.querySelectorAll('.gallery-category').forEach(gallery => {
        gallery.classList.remove('active');
    });

    // Mostrar la galería seleccionada
    if (category === 'all') {
        document.getElementById('all-gallery').classList.add('active');
    } else {
        document.getElementById(`${category}-gallery`).classList.add('active');
    }
}




function initGalleries() {
    // Obtener todas las categorías únicas
    const categorias = ['all', ...new Set(obras.map(obra => obra.categoria))];
    
    categorias.forEach(categoria => {
        const spinContainer = document.querySelector(`.spin-container[data-category="${categoria}"]`);
        if (!spinContainer) return;
        
        // Filtrar obras por categoría (para 'all' mostrar todas)
        const obrasFiltradas = categoria === 'all' 
            ? obras 
            : obras.filter(obra => obra.categoria === categoria);
        
        // Crear elementos img para cada obra en esta categoría
        obrasFiltradas.forEach(obra => {
            const img = document.createElement('img');
            img.src = obra.imagen;
            img.alt = obra.titulo;
            img.dataset.id = obra.id;
            img.dataset.categoria = obra.categoria;
            img.classList.add('loading');
            img.onload = () => img.classList.remove('loading');
            spinContainer.appendChild(img);
        });
        
        // Configurar dimensiones del contenedor
        spinContainer.style.width = imgWidth + "px";
        spinContainer.style.height = imgHeight + "px";
        
        // Configurar suelo
        const ground = spinContainer.nextElementSibling;
        ground.style.width = radius * 3 + "px";
        ground.style.height = radius * 3 + "px";
        
        // Iniciar animación para este carrusel
        initCarousel(spinContainer);
    });
}


/**
 * Inicializa el carrusel 3D con todas las imágenes
 * Posiciona cada imagen en un círculo y configura la rotación
 */
function initCarousel(spinContainer) {
    const odrag = spinContainer.parentElement;
    const aImg = spinContainer.getElementsByTagName('img');
    const aEle = [...aImg];
    
    // Si no hay imágenes, ocultar este carrusel
    if (aEle.length === 0) {
        odrag.style.display = 'none';
        return;
    }
    
    // Aplicar transformaciones a cada imagen
    aEle.forEach((ele, i) => {
        ele.style.transform = `rotateY(${i * (360 / aEle.length)}deg) translateZ(${radius}px)`;
        ele.style.transition = "transform 1s";
        ele.style.transitionDelay = `${i / aEle.length}s`;
    });
    
    // Configurar rotación automática
    if (autoRotate) {
        const animationName = rotateSpeed > 0 ? 'spin' : 'spinRevert';
        spinContainer.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
    }
    
    // Configurar eventos de arrastre
    setupDragEvents(odrag, spinContainer);
}


/**
 * Configura los eventos de arrastre para el carrusel 3D
 * @param {HTMLElement} odrag - Elemento contenedor de arrastre
 * @param {HTMLElement} ospin - Elemento contenedor de giro
 */
function setupDragEvents(odrag, spinContainer) {
    let sX, sY, nX, nY, desX = 0, desY = 0, tX = 0, tY = 10;
    
    // Aplicar transformación al elemento
    const applyTranform = (obj) => {
        if (tY > 180) tY = 180;
        if (tY < 0) tY = 0;
        
        obj.style.transform = `rotateX(${-tY}deg) rotateY(${tX}deg)`;
    };
    
    // Pausar/reanudar la rotación
    const playSpin = (yes) => {
        spinContainer.style.animationPlayState = yes ? 'running' : 'paused';
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
        initCarousel(spinContainer);
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
            filterGalleries(filter);
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
 * Busca obras por término en título o descripción
 * @param {string} term - Término de búsqueda
 */
function searchObras(term) {
    const searchTerm = term.toLowerCase();
    let found = false;

    document.querySelectorAll('.spin-container').forEach(spinContainer => {
        const images = spinContainer.querySelectorAll('img');
        let hasVisibleImages = false;

        images.forEach(img => {
            const id = img.dataset.id;
            const obra = obras.find(o => o.id == id);

            if (obra && (
                obra.titulo.toLowerCase().includes(searchTerm) ||
                obra.descripcion.toLowerCase().includes(searchTerm) ||
                obra.tecnica.toLowerCase().includes(searchTerm)
            )) {
                img.style.display = 'block';
                found = true;
                hasVisibleImages = true;
            } else {
                img.style.display = 'none';
            }
        });

        // Re-inicializar el carrusel si tiene imágenes visibles
        if (hasVisibleImages) {
            initCarousel(spinContainer);
            spinContainer.parentElement.parentElement.style.display = 'block';
        } else {
            spinContainer.parentElement.parentElement.style.display = 'none';
        }
    });

    // Si no se encontraron resultados, mostrar todas las galerías
    if (!found && searchTerm.trim() !== '') {
        alert('No se encontraron obras que coincidan con su búsqueda.');
        document.querySelectorAll('.gallery-category').forEach(gallery => {
            gallery.classList.remove('active');
        });
        document.getElementById('all-gallery').classList.add('active');
    } else if (searchTerm.trim() === '') {
        // Si la búsqueda está vacía, mostrar todas las galerías
        document.querySelectorAll('.gallery-category').forEach(gallery => {
            gallery.classList.remove('active');
        });
        document.getElementById('all-gallery').classList.add('active');
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
    const lightboxPrev = document.querySelector('.lightbox-prev');
    const lightboxNext = document.querySelector('.lightbox-next');

    let currentIndex = 0;
    let currentObras = [];

    function showImage(index) {
        const obra = currentObras[index];
        if (obra) {
            lightboxImg.src = obra.imagen;
            lightboxTitle.textContent = obra.titulo;
            lightboxYear.textContent = `Año: ${obra.año}`;
            lightboxDimensions.textContent = `Dimensiones: ${obra.dimensiones}`;
            lightboxTechnique.textContent = `Técnica: ${obra.tecnica}`;
            btnDetails.dataset.id = obra.id;
            currentIndex = index;
        }
    }

    // Evento para hacer clic en una imagen
    document.addEventListener('click', function (e) {
        if (e.target.matches('.spin-container img')) {
            const category = e.target.closest('.spin-container').dataset.category;
            if (category === 'all') {
                currentObras = obras;
            } else {
                currentObras = obras.filter(o => o.categoria === category);
            }

            const id = e.target.dataset.id;
            const obraIndex = currentObras.findIndex(o => o.id == id);

            if (obraIndex !== -1) {
                showImage(obraIndex);
                lightbox.style.display = 'flex';
            }
        }
    });

    // Evento para cerrar el lightbox
    lightboxClose.addEventListener('click', function () {
        lightbox.style.display = 'none';
    });

    // Evento para el botón de ver detalles
    btnDetails.addEventListener('click', function () {
        const id = this.dataset.id;
        openModal(id);
        lightbox.style.display = 'none';
    });

    // Cerrar lightbox al hacer clic fuera del contenido
    lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });

    // Evento para el botón de anterior
    lightboxPrev.addEventListener('click', function () {
        currentIndex = (currentIndex - 1 + currentObras.length) % currentObras.length;
        showImage(currentIndex);
    });

    // Evento para el botón de siguiente
    lightboxNext.addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % currentObras.length;
        showImage(currentIndex);
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
    modalClose.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // Cerrar modal al hacer clic fuera del contenido
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Evento para el botón de contacto
    document.querySelector('.btn-contact').addEventListener('click', function () {
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

    hamburger.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function () {
            navMenu.classList.remove('active');
        });
    });
}