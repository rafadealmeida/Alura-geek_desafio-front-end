const botao = document.querySelector(".usuariologin__botaoentrar")

const email = document.querySelector("#usuariologin__email").value
const senha = document.querySelector("#usuariologin__senha")

botao.addEventListener("click", evento =>{
    evento.preventDefault()
   


    if(email==='AluraGeek@emmail.com' || senha.value =='Alura'){
        console.log('logou')
        window.location.href ='../html/pagina-todosOsProdutos.html'
    }else{
        console.log('inválido')
    }
})