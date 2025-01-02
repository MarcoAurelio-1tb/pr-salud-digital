const openModal1 = document.querySelector('.hero_cta1');
const modal1 = document.querySelector('.modal1');
const closeModal1 = document.querySelector('.modal_close1');

const openModal2 = document.querySelector('.hero_cta2');
const modal2 = document.querySelector('.modal2');
const closeModal2 = document.querySelector('.modal_close2');


const openModal3 = document.querySelector('.hero_cta3');
const modal3 = document.querySelector('.modal3');
const closeModal3 = document.querySelector('.modal_close3');


function Modal1(){
    openModal1.addEventListener('click', (e)=>{
        e.preventDefault();
        modal1.classList.add('modal1--show');
    });
    
    closeModal1.addEventListener('click', (e)=>{
        e.preventDefault();
        modal1.classList.remove('modal1--show');
    });

}


function Modal2(){

    openModal2.addEventListener('click', (e)=>{
        e.preventDefault();
        modal2.classList.add('modal2--show');
    });


    closeModal2.addEventListener('click', (e)=>{
        e.preventDefault();
        modal2.classList.remove('modal2--show');
    });

}


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
