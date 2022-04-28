const nomeInput = document.querySelector('#contato__nome')
const labelNome = document.querySelector('.labelNome')
const mensagemInput = document.querySelector('#contato__mensagem')

const botaoContato = document.querySelector('#contato__botaoenviar')

const mensagemErro = document.querySelector('.contato__mensagem--erro')


botaoContato.addEventListener('click', function(evento){
    evento.preventDefault()

    if(nomeInput.validity.valueMissing || mensagemInput.validity.valueMissing){
        mensagemErro.innerHTML = "Todos os campos devem ser preenchido antes do envio do formulário de contato"

        labelNome.classList.add('contato--erro')
        mensagemInput.classList.add('contato--erro')
    }else{
        mensagemErro.innerHTML = ""

        labelNome.classList.remove('contato--erro')
        mensagemInput.classList.remove('contato--erro')

        alert("Formulário enviado com sucesso!")

        nomeInput.value = ""
        mensagemInput.value = ""
    }
})


