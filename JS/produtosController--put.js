import { produtosService } from "./teste_api.js"




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

export const enviarFormulario = async (id) => {

    const btn = document.querySelector('.novoproduto__adicionar--botao') 

    btn.addEventListener('click',(evento) => {
        evento.preventDefault()


        produtosService.atualizaProduto(nomeInput.value,precoInput.value,descricaoInput.value,id).then(() => {
            alert("Produto atualizado com sucesso!")
        })
        console.log("clicou")

        evento.preventDefault()

    })

}






