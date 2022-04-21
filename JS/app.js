import {valida} from "./valida.js"


const inputs = document.querySelectorAll('input');
const botao = document.querySelector('.usuariologin__botaoentrar');

    inputs.forEach( input => {
        input.addEventListener('submit',evento=>{
            valida(evento.target)
            
     })

     
     
})


botao.addEventListener('submit',evento=>{
    evento.defaultPrevented()
})



   

   

