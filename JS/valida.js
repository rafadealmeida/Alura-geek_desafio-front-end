

export function valida (input) {
    const tipoDeInput = input.dataset.tipo

    if(validadores[tipoDeInput]){
        validadores[tipoDeInput](input)
    }

    if(input.validity.valid){
        input.classList.remove('usuariologin--erro')
        input.parentElement.querySelector(".input__mensagem--erro").innerHTML = " "
    }
    else{
        input.classList.add('usuariologin--erro')
        input.parentElement.querySelector('.input__mensagem--erro').innerHTML = mostraMensagemErro(tipoDeInput,input)
        console.log('erro')
    }


   if(emailValido && senhaValido){
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

export function checaEmail (input) {
   
    let mensagem = ''
    let emailValido = false
    if(input.value ==="AluraGeek@email.com"){
        emailValido = true
    }else{
        mensagem='O login está incorreto! Tente novamente.'
        
    }

    input.setCustomValidity(mensagem)
    return emailValido
}

export function checaSenha(input) {
    let mensagem = ''
    let senhaValido = false
    if(input.value ==="Alura"){
        senhaValido = false
    }else{
        mensagem='O senha está incorreto! Tente novamente.'
        // return false
    }

    input.setCustomValidity(mensagem)
    return senhaValido
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
        customError:'A senha está incorreto! Tente novamente.'
    
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