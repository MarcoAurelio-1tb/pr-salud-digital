/* Creamos una constante que almacenará la clase del DIV a expandir con el modal*/
const openModal = document.querySelector('.hero_cta');
const modal = document.querySelector('.modal1');
const closeModal = document.querySelector('.modal_close1');


openModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('modal1--show');
});


closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal1--show');
});