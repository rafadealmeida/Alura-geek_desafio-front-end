

function valida (input) {
    const tipoDeInput = input.dataset.tipo

    if(validadores[tipoDeInput]){
        validadores[tipoDeInput](input)
    }

    if(!input.validity.valid){
        input.parentElement.classList.add('usuariologin--erro')
        input.parentElement.querySelector('.input__mensagem--erro').innerHTML = mostraMensagemErro(tipoDeInput,input)
    }
    else{
        input.parentElement.classList.remove('usuariologin--erro')
        input.parentElement.querySelector('.input__mensagem--erro').innerHTML = " "
    }

}

const validadores = {
    email:input=> checaEmail(input),
    senha:input=> checaSenha(input)
}

function checaEmail (input) {
    if(!input.value ==="AluraGeek"){

    }
}

const tipoDeErro = [
    'valueMissing', 
    'typeMissing', 
    'customError',
]

const mensagemDeErro = {
    nome:{
        valueMissing:'O campo nome não pode está vazio'

    },
    email:{
        valueMissing:'O campo email não pode está vazio',
        typeMismatch:'O email digitado não é valido'
    },
    senha:{
        valueMissing:'O campo senha não pode está vazio',
        patternMismatch:'Este campo deve conter de 6 a 12 caracteres e pelo menos 1 letra Maiúscula e minuscula ,1 número e não pode conter símbolos'
    }
}


function mostraMensagemErro(tipoDeErro, input){
    let mensagem = ''

    tipoDeErro.forEach(erro=>{
        if(input.validity[erro]){
            mensagem = mensagemDeErro[tipoDeErro][erro]
        }
    })
    return mensagem
}