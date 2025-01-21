// Ruta al archivo JSON
fetch('../js/serviciosBio.json') // Asegúrate de que la ruta sea correcta
    .then(response => response.json())
    .then(data => {
        const serviciosContainer = document.getElementById('serviciosBio');
        let number = 0;

        data.forEach((servicio) => {
            // Crear la tarjeta dinámica
            const servicioElement = document.createElement('div');
            servicioElement.classList.add('col-lg-6', 'col-md-6', 'mb-4');
            servicioElement.innerHTML = `
                <div class="card shadow h-100 border-0">
                    <div class="card-body">
                        <div class="d-flex justify-content-center mb-3">
                            <img src="${servicio.imagen}" alt="${servicio.titulo}" class="img-fluid rounded img-smental" style="max-height: 200px;">
                        </div>
                        <h2 class="fw-bold title-smental">${servicio.titulo}</h2>
                        <p class="text-muted descr-smental">${servicio.descripcion}</p>
                        <a href="#" class="hero_cta${number} botonModal" data-modal="modal${number}">
                            <button class="btn btn-primary mt-3 px-4 btn-expand">
                                Leer más
                            </button>
                        </a>
                    </div>
                </div>

                <section class="modal1 modal${number}" id="modal${number}">
                    <div class="modal_container1">
                        <a href="#" class="modal_close1">X</a>
                        <div class="modal_header">
                            <img src="${servicio.imagen}" alt="${servicio.titulo}" class="modal-img">
                        </div>
                        <div class="modal_body">
                            <p class="modal-title">${servicio.titulo}</p>
                            <p class="modal-descr">${servicio.descripcion}</p>
                        </div>
                    </div>
                </section>
            `;

            serviciosContainer.appendChild(servicioElement);
        });

         // Agregar eventos a los botones dinámicamente
         const botonesModal = document.querySelectorAll('.botonModal');
         botonesModal.forEach(boton => {
             boton.addEventListener('click', (e) => {
                 e.preventDefault();
 
                 // Obtiene el ID del modal desde el atributo 'data-modal'
                 const modalId = boton.getAttribute('data-modal');
                 const modal = document.getElementById(modalId);
 
                 // Si el modal existe, lo muestra
                 if (modal) {
                     modal.classList.add('modal1--show');
                 }
             });
         });
 
         // Agregar eventos para cerrar los modales
         const botonesCerrar = document.querySelectorAll('.modal_close1');
         botonesCerrar.forEach(boton => {
             boton.addEventListener('click', (e) => {
                 e.preventDefault();
 
                 // Encuentra el modal más cercano con la clase 'modal1--show'
                 const modal = boton.closest('.modal1');
                 if (modal) {
                     modal.classList.remove('modal1--show');
                 }
             });
         });
     })
     .catch(error => console.error('Error al cargar el JSON:', error));
 