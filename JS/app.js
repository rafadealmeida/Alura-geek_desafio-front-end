import {valida} from "./valida.js"

const inputs = document.querySelectorAll('input');
const botao = document.querySelector('.usuariologin__botaoentrar');





    inputs.forEach( input => {
       input.addEventListener('blur',evento=>{
           valida(evento.target)
       });
    })

   

