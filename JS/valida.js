

export function valida (input) {
    const tipoDeInput = input.dataset.tipo

    if(validadores[tipoDeInput]){
        validadores[tipoDeInput](input)
    }

    if(input.validity.valid){
        input.parentElement.classList.remove('usuariologin--erro')
        input.parentElement.querySelector(".input__mensagem--erro").innerHTML = " "
    }
    else{
        input.parentElement.classList.add('usuariologin--erro')
        input.parentElement.querySelector('.input__mensagem--erro').innerHTML = mostraMensagemErro(tipoDeInput,input)
    }


   if(checaEmail(input) && checaSenha(input)){
       console.log("login efetuado")
   }
   else{
       console.log("login negado")
   }

}

const validadores = {
    email:input=> checaEmail(input),
    senha:input=> checaSenha(input)
}

function checaEmail (input) {
   
    let mensagem = ''
   
    if(input.value ==="AluraGeek"){
        return true
    }else{
        mensagem='O login está incorreto! Tente novamente.'
        // return false
    }

    input.setCustomValidity(mensagem)
}

function checaSenha(input) {
    let mensagem = ''
   
    if(input.value ==="Alura+D1000cursos"){
        return true
    }else{
        mensagem='O senha está incorreto! Tente novamente.'
        // return false
    }

    input.setCustomValidity(mensagem)
}

const tipoDeErro = [
    'valueMissing', 
    'typeMissing', 
    'customError'
]

const mensagemDeErro = {
    nome:{
        valueMissing:'O campo nome não pode está vazio'

    },
    email:{
        valueMissing:'O campo email não pode está vazio',
        typeMismatch:'O email digitado não é valido',
        customError:'O login está incorreto! Tente novamente.'
    },
    senha:{
        valueMissing:'O campo senha não pode está vazio',
        patternMismatch:'Este campo deve conter de 6 a 12 caracteres e pelo menos 1 letra Maiúscula e minuscula ,1 número e não pode conter símbolos'
    }
}


function mostraMensagemErro(tipoDeInput,input){
    let mensagem = ''

    tipoDeErro.forEach(erro=>{
        if(input.validity[erro]){
            mensagem = mensagemDeErro[tipoDeInput][erro]
        }
    })
    return mensagem
}