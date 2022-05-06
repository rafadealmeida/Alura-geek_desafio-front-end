import { produtosService } from "./teste_api.js"
import { abrirJanelaModal } from "./produtosController--todos.js"

const botao = document.querySelector('.novoproduto__adicionar--botao')

const nomeInput =document.querySelector( '[data-tipo ="nome__produto"]')
const precoInput =document.querySelector( '[data-tipo ="preco__produto"]')
const descricaoInput =document.querySelector( '[data-tipo ="descricao__produto"]')
const imagemProduto = document.querySelector('.img-edição--produto')

export const pegaInput = async (id) =>{

    produtosService.detalhaProdutos(id).then(dados => {
        nomeInput.value = dados.nome
        precoInput.value = dados.preco
        descricaoInput.value = dados.detalhe
        imagemProduto.srcset = dados.img
        
    })
    
  
}

const eviarFormulario = ()=> {
    await abrirJanelaModal()

    botao.addEventListener('submit',(evento) => {
        evento.preventDefault()
        produtosService.atualizaProduto(nomeInput.value,precoInput.value,descricaoInput.value).then(() => {
            alert("Produto atualizado com sucesso!")
        })
        console.log("clicou")
    })

}
eviarFormulario()

// botao.addEventListener('submit',(evento) => {
//     evento.preventDefault()
//     produtosService.atualizaProduto(nomeInput.value,precoInput.value,descricaoInput.value).then(() => {
//         alert("Produto atualizado com sucesso!")
//     })
//     console.log("clicou")
// })



