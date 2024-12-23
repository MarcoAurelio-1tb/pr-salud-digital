/* Creamos una constante que almacenará la clase del DIV a expandir con el modal*/
const openModal1 = document.querySelector('.hero_cta1');
const modal1 = document.querySelector('.modal1');
const closeModal1 = document.querySelector('.modal_close1');

const openModal2 = document.querySelector('.hero_cta2');
const modal2 = document.querySelector('.modal2');
const closeModal2 = document.querySelector('.modal_close2');


const openModal3 = document.querySelector('.hero_cta3');
const modal3 = document.querySelector('.modal3');
const closeModal3 = document.querySelector('.modal_close3');

const openModal4 = document.querySelector('.hero_cta4');
const modal4 = document.querySelector('.modal4');
const closeModal4 = document.querySelector('.modal_close4');


const openModal5 = document.querySelector('.hero_cta5');
const modal5 = document.querySelector('.modal5');
const closeModal5 = document.querySelector('.modal_close5');

const openModal6 = document.querySelector('.hero_cta6');
const modal6 = document.querySelector('.modal6');
const closeModal6 = document.querySelector('.modal_close6');


openModal1.addEventListener('click', (e)=>{
    e.preventDefault();
    modal1.classList.add('modal1--show');
});


closeModal1.addEventListener('click', (e)=>{
    e.preventDefault();
    modal1.classList.remove('modal1--show');
});





openModal2.addEventListener('click', (e)=>{
    e.preventDefault();
    modal2.classList.add('modal2--show');
});


closeModal2.addEventListener('click', (e)=>{
    e.preventDefault();
    modal2.classList.remove('modal2--show');
});





openModal3.addEventListener('click', (e)=>{
    e.preventDefault();
    modal3.classList.add('modal3--show');
});


closeModal3.addEventListener('click', (e)=>{
    e.preventDefault();
    modal3.classList.remove('modal3--show');
});



openModal4.addEventListener('click', (e)=>{
    e.preventDefault();
    modal4.classList.add('modal4--show');
});


closeModal4.addEventListener('click', (e)=>{
    e.preventDefault();
    modal4.classList.remove('modal4--show');
});



openModal5.addEventListener('click', (e)=>{
    e.preventDefault();
    modal5.classList.add('modal5--show');
});


closeModal5.addEventListener('click', (e)=>{
    e.preventDefault();
    modal5.classList.remove('modal5--show');
});


openModal6.addEventListener('click', (e)=>{
    e.preventDefault();
    modal6.classList.add('modal6--show');
});


closeModal6.addEventListener('click', (e)=>{
    e.preventDefault();
    modal6.classList.remove('modal6--show');
});