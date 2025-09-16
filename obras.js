       // Datos de las obras (simulando una base de datos)
        export  const obras = [
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

// ANIMALISMO 

            {
                id: 5,
                titulo: "Panteras en la selva",
                categoria: "animalismo",
                año: 2022,
                dimensiones: "70x90 cm",
                tecnica: "Óleo sobre lienzo",
                imagen: "./Galeria/panteta.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                descripcion: "Estudio de la luz natural en su momento más intenso del día.",
                proceso: "Técnica impresionista con pinceladas visibles que capturan el efecto de la luz.",
                materiales: "Óleos sobre lienzo de lino, con pinceles de cerda para texturas marcadas."
            },
            {
                id: 6,
                titulo: "Pez en el agua",
                categoria: "animalismo",
                año: 2022,
                dimensiones: "70x90 cm",
                tecnica: "Óleo sobre lienzo",
                imagen: "./Galeria/pez.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                descripcion: "Estudio de la luz natural en su momento más intenso del día.",
                proceso: "Técnica impresionista con pinceladas visibles que capturan el efecto de la luz.",
                materiales: "Óleos sobre lienzo de lino, con pinceles de cerda para texturas marcadas."
            },
            {
                id: 7,
                titulo: "Cisnes en el agua",
                categoria: "animalismo",
                año: 2022,
                dimensiones: "70x90 cm",
                tecnica: "Óleo sobre lienzo",
                imagen: "./Galeria/cisnes.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                descripcion: "Estudio de la luz natural en su momento más intenso del día.",
                proceso: "Técnica impresionista con pinceladas visibles que capturan el efecto de la luz.",
                materiales: "Óleos sobre lienzo de lino, con pinceles de cerda para texturas marcadas."
            },
            {
                id: 9,
                titulo: "El tigre",
                categoria: "animalismo",
                año: 2022,
                dimensiones: "70x90 cm",
                tecnica: "Óleo sobre lienzo",
                imagen: "./Galeria/Der-Tiger.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                descripcion: "Estudio de la luz natural en su momento más intenso del día.",
                proceso: "Técnica impresionista con pinceladas visibles que capturan el efecto de la luz.",
                materiales: "Óleos sobre lienzo de lino, con pinceles de cerda para texturas marcadas."
            },
            {
                id: 10,
                titulo: "Guacamayas en la selva",
                categoria: "animalismo",
                año: 2022,
                dimensiones: "70x90 cm",
                tecnica: "Óleo sobre lienzo",
                imagen: "./Galeria/guacamaya.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                descripcion: "Estudio de la luz natural en su momento más intenso del día.",
                proceso: "Técnica impresionista con pinceladas visibles que capturan el efecto de la luz.",
                materiales: "Óleos sobre lienzo de lino, con pinceles de cerda para texturas marcadas."
            },
            {
                id: 11,
                titulo: "Pez Colorido",
                categoria: "animalismo",
                año: 2022,
                dimensiones: "70x90 cm",
                tecnica: "Óleo sobre lienzo",
                imagen: "./Galeria/pez-colorido.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                descripcion: "Estudio de la luz natural en su momento más intenso del día.",
                proceso: "Técnica impresionista con pinceladas visibles que capturan el efecto de la luz.",
                materiales: "Óleos sobre lienzo de lino, con pinceles de cerda para texturas marcadas."
            },
            {
                id: 11,
                titulo: "Libélula",
                categoria: "animalismo",
                año: 2022,
                dimensiones: "70x90 cm",
                tecnica: "Óleo sobre lienzo",
                imagen: "./Galeria/libelula.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                descripcion: "Estudio de la luz natural en su momento más intenso del día.",
                proceso: "Técnica impresionista con pinceladas visibles que capturan el efecto de la luz.",
                materiales: "Óleos sobre lienzo de lino, con pinceles de cerda para texturas marcadas."
            },
            {
                id: 12,
                titulo: "Mariposas",
                categoria: "animalismo",
                año: 2022,
                dimensiones: "70x90 cm",
                tecnica: "Óleo sobre lienzo",
                imagen: "./Galeria/mariposas.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                descripcion: "Estudio de la luz natural en su momento más intenso del día.",
                proceso: "Técnica impresionista con pinceladas visibles que capturan el efecto de la luz.",
                materiales: "Óleos sobre lienzo de lino, con pinceles de cerda para texturas marcadas."
            },
            {
                id: 12,
                titulo: "Tigre",
                categoria: "animalismo",
                año: 2022,
                dimensiones: "70x90 cm",
                tecnica: "Óleo sobre lienzo",
                imagen: "./Galeria/tiger-2.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                descripcion: "Estudio de la luz natural en su momento más intenso del día.",
                proceso: "Técnica impresionista con pinceladas visibles que capturan el efecto de la luz.",
                materiales: "Óleos sobre lienzo de lino, con pinceles de cerda para texturas marcadas."
            },
            {
                id: 13,
                titulo: "León en la sabana",
                categoria: "animalismo",
                año: 2022,
                dimensiones: "70x90 cm",
                tecnica: "Óleo sobre lienzo",
                imagen: "./Galeria/leon.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                descripcion: "Estudio de la luz natural en su momento más intenso del día.",
                proceso: "Técnica impresionista con pinceladas visibles que capturan el efecto de la luz.",
                materiales: "Óleos sobre lienzo de lino, con pinceles de cerda para texturas marcadas."
            },
            {
                id: 14,
                titulo: "Flamencos",
                categoria: "animalismo",
                año: 2022,
                dimensiones: "70x90 cm",
                tecnica: "Óleo sobre lienzo",
                imagen: "./Galeria/flamencos.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                descripcion: "Estudio de la luz natural en su momento más intenso del día.",
                proceso: "Técnica impresionista con pinceladas visibles que capturan el efecto de la luz.",
                materiales: "Óleos sobre lienzo de lino, con pinceles de cerda para texturas marcadas."
            },

            // OTROS

            {
                id: 8,
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