const botao = document.querySelector(".usuariologin__botaoentrar")

const email = document.querySelector("#usuariologin__email").value
const senha = document.querySelector("#usuariologin__senha")

const mensagemErro = document.querySelector(".input__mensagem--erro")

botao.addEventListener("click", evento =>{
    evento.preventDefault()
   buscaUsuario()
   verificaUsuario()

  
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
        if(dado.email === email || dado.senha === senha.value){
            console.log("logou")
            mensagemErro.innerHTML=''
            window.location.href ='../html/pagina-todosOsProdutos.html'
        }else{
            console.log("login inválido")
            mensagemErro.innerHTML ="Email ou senha incorretos. Tente Novamente!"
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
    let mensagem = ''

    tipoDeErro.forEach(erro=>{
        if(input.validity[erro]){
            mensagem = mensagemDeErro[tipoDeInput][erro]
        }
    })
    return mensagem
}
