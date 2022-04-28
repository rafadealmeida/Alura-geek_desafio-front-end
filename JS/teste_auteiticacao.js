const botao = document.querySelector(".usuariologin__botaoentrar")

const emailInput = document.querySelector("#usuariologin__email")
const senhaInput = document.querySelector("#usuariologin__senha")

const inputs = document.querySelectorAll('input')



const mensagemErro = document.querySelector(".input__mensagem--erro")

botao.addEventListener("click", evento =>{
    evento.preventDefault()
   buscaUsuario()
   verificaUsuario()

   inputs.forEach(input =>{
       checarErro(input)
   })

  
})

const buscaUsuario = async () =>{
    return fetch ('http://localhost:3000/usuarios')
    .then(resposta =>{
        if(resposta.ok){
            return resposta.json();
        }
        throw new Error('Não foi possivel buscar o usuário')
    })
    
}

const verificaUsuario = async () =>{

    const dados = await buscaUsuario()

    dados.forEach(dado =>{
        if( emailInput.value === dado.email && senhaInput.value === dado.senha){
            
            mensagemErro.innerHTML=''
            window.location.href ='../html/pagina-todosOsProdutos.html'
            emailInput.classList.remove('input__mensagem--erro')
            senhaInput.classList.remove('input__mensagem--erro')
        }else{
            emailInput.classList.add('input__mensagem--erro')
            senhaInput.classList.add('input__mensagem--erro')

            mensagemErro.innerHTML ="Email ou senha incorreto. Tente novamente !"
            inputs.forEach(input =>{
                checarErro(input)
            })
        }

    })
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
    let mensagem = '';

    

    tipoDeErro.forEach(erro=>{
        if(input.validity[erro]){
            mensagem = mensagemDeErro[tipoDeInput][erro]
        }
    })
    return mensagem
}


function checarErro(input){
    const tipoDeInput = input.dataset.tipo
    
    if(input.validity.valid){
        input.classList.remove('usuariologin--erro')
        document.querySelector(".input__mensagem--erro").innerHTML = " "
    }
    else{
        input.classList.add('usuariologin--erro')
        const error =  mostraMensagemErro(tipoDeInput,input)
        console.log(error)
    }
}