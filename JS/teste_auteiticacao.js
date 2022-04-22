const botao = document.querySelector(".usuariologin__botaoentrar")

const email = document.querySelector("#usuariologin__email").value
const senha = document.querySelector("#usuariologin__senha")

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
            window.location.href ='../html/pagina-todosOsProdutos.html'
        }else{
            console.log("login inválido")
        }

    })
}