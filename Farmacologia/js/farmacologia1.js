
/* Creamos una constante que almacenará la clase del DIV a expandir con el modal*/
// Cargar el archivo JSON
fetch('./json farm/farmacos.json') // Cambia la ruta según la ubicación de tu archivo JSON
    .then(response => response.json())
    .then(data => {
        const noticiasContainer = document.getElementById('medicamentos');
        
        let number = 0; // Contador para hero_ctaX y modalX
        
        data.forEach(medicamento => {
        
            // Crear el HTML dinámico con clases de Bootstrap
            number = number+1;
            const noticiaElement = document.createElement('div');

            noticiaElement.classList.add('col-md-4', 'col-lg-4', 'col-sm-6', 'mb-4'); // Cada noticia ocupa 4 columnas en pantallas medianas
            
            noticiaElement.innerHTML = `
                <a href="#" class="hero_cta${number} botonModal" data-modal="modal${number}">
                <div class="border zoom" style="padding: 0; background-color: #fff;"> <!-- Contenedor principal -->

                    <!-- Línea delgada en la parte superior -->
                    <div style="height: 5px; background-color: ${medicamento.color};"></div> <!-- Línea morada -->
                        <p class="text-muted" style="font-size: 1.2rem;  padding-left: 20px; padding-top: 10px;"><strong style="color: black;">${medicamento.titulo}</strong> 
                        <br><br>${medicamento.via}</p>
                        <br>
                        <p class="text-muted" style="font-size: 0.8rem; position: bottom; padding-left: 20px; padding-top: 10px;">${medicamento.descripcion}</p>      
                </div>
                </a>       
                </div>


                    <!--- La idea es que, por medio de un archivo JSON, se cargue la informacion de forma dinamica
                Por el momento, solo se tiene el esqueleto con animaciones-->
                <section class="modal1 modal${number}" id="modal${number}">
                    <div class="modal_container1">
                        <div class="linea_med" style="background-color: ${medicamento.color};"></div> <!-- Línea morada -->
                        
                        <div class="modal_left">
                            <img src="${medicamento.imagen}" class="modal_img1">
                            
                            <!---PRESENTACION Y LO DEMAS AQUI ABAJO!--->
                            <h5>Presentación</h5>
                            <p class="modal_paragraph1">
                                ${medicamento.presentacion}
                            </p><br>
                            <h5>Vía de Administración</h5>
                            <p class="modal_paragraph1">
                                ${medicamento.viadmin}
                            </p><br>

                            <h5>Efectos adversos</h5>
                            <p class="modal_paragraph1">
                                ${medicamento.efectos}
                            </p><br>



                        </div>
                        <!--- COLUMNA DERECHA DE MODAL-->
                        <div class="modal_text">
                            <br>

                            <div style="display: flex; align-items: center; justify-content: space-between;">
                                <!---*dos columnas para poner el botón de cerrar*/ --->
                                <h2 class="modal_title1" style="margin: 0;">${medicamento.titulo}</h2>
                                <a href="#" class="modal_close1">X</a>
                            </div>  

                            <details>
                                <summary>¿Qué es?
                                <div style="height: 2px; background-color: ${medicamento.color}; width: 90%;"></div> <!-- Línea morada -->
                                
                                </summary>

                                <br>
                                <p class="modal_paragraph1">
                                    ${medicamento.texto}
                                </p>
                            </details>
                            <br>
                            <details>
                                <summary>Indicaciones 
                                <div style="height: 2px; background-color: ${medicamento.color}; width: 90%;"></div> <!-- Línea morada -->
                                <br>
                                </summary>
                                    <p class="modal_paragraph1">
                                        ${medicamento.indicaciones}
                                    </p> 
                            </details>
                            <br>
                            <details>
                                <summary>Contraindicación
                                <div style="height: 2px; background-color: ${medicamento.color}; width: 90%;"></div> <!-- Línea morada -->
                                <br>
                                </summary>
                                    <p class="modal_paragraph1">
                                        ${medicamento.contra}
                                    </p>
                            </details>
                            <br>
                            <details>
                                <summary>Interacción
                                <div style="height: 2px; background-color: ${medicamento.color}; width: 90%;"></div> <!-- Línea morada -->
                                </summary>

                                    <p class="modal_paragraph1">
                                        ${medicamento.interacc}
                                    </p>
                            </details>
                        </div>
                        <br><br><br>
                    


                    </div>
                </section>

                </div>
            `;
/*<---! GENERAR Y OCULTAR MODAL DE LA MISMA FORMA !--->*/
            noticiasContainer.appendChild(noticiaElement);
        });
        
    // Agregar eventos a los botones y modales de forma dinámica
    const botonesModal = document.querySelectorAll('.botonModal');
    botonesModal.forEach(boton => { // Recorre cada botón de la lista 'botonesModal' para asignarle un evento 'click'

        boton.addEventListener('click', (e) => {
            e.preventDefault();
        // Obtiene el atributo ID del modal correspondiente desde el atributo 'data-modal' del botón (en la etiqueta <a>)
            const modalId = boton.getAttribute('data-modal');
            const modal = document.getElementById(modalId); //usa el id del modal para obtener el elemento
            
            //Si se cumple la condicion de que el modal en cuestion existe dentro del DOM, cambia sus propiedades de css
            if (modal) {
                modal.classList.add('modal1--show');
            }
        });
    });

    // Selecciona todos los botones que tienen la clase 'modal_close1' (botones para cerrar los modales)
    const botonesCerrar = document.querySelectorAll('.modal_close1');
    botonesCerrar.forEach(boton => {
        boton.addEventListener('click', (e) => {
            e.preventDefault();

            // Encuentra el modal más cercano al botón con la clase 'modal1--show'
            const modal = boton.closest('.modal1--show');

            // Si el modal existe, elimina la clase 'modal1--show' para ocultarlo
            if (modal) {
                modal.classList.remove('modal1--show');
            }
        });
    });

    })
    .catch(error => console.error('Error al cargar el JSON:', error));







    openModal2.addEventListener('click', (e)=>{
        e.preventDefault();
        modal2.classList.add('modal2--show');
    });


    closeModal2.addEventListener('click', (e)=>{
        e.preventDefault();
        modal2.classList.remove('modal2--show');
    });



function Modal3(){

    openModal3.addEventListener('click', (e)=>{
        e.preventDefault();
        modal3.classList.add('modal3--show');
    });


    closeModal3.addEventListener('click', (e)=>{
        e.preventDefault();
        modal3.classList.remove('modal3--show');
    });


}
