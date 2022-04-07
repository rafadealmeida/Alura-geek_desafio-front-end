import { produtosService } from "./teste_api.js";
import { criarItemProduto } from "./produtos--controller.js";
// import { detalhesProduto } from "./produtos--controller.js";

const pegarURL = new URL(window.location)

const id = pegarURL.searchParams.get('id')

const produtoDestaque = document.querySelector('[data-produtos="Destaque"]')
const testeDetalhes = document.querySelector('[data-div]')

const produtosSemelhante = document.querySelector(".produtos__grade--todososprodutos")

const detalhesProduto = (nome,img,preco,id,descricao) =>{
    const sessaoDetalhaProduto = document.createElement("section")
    const detalhes = ` 
    <picture>
        
        <img src="${img}" alt=""  data-imagem>
    </picture>
        <aside class="maisdetalhe__informacao">
            <h1 class="produto__nome--maisdetalhe" id="#conteudoPrincipal__maisdetalhes">${nome}</h1>
            <h2 class="produto__preco--maisdetalhe">${preco}</h2>
            <p class="produto__descricao--maisdetalhe">${descricao}</p>
            
        </aside>
        </img>
    `

    sessaoDetalhaProduto.classList.add('produto--maisdetalhe')
    sessaoDetalhaProduto.innerHTML = detalhes
    return sessaoDetalhaProduto;

}

const renderProduto = async () =>{
    
    try {
        const dadosProduto = await produtosService.detalhaProdutos(id)
      

        produtoDestaque.appendChild(detalhesProduto(dadosProduto.nome,dadosProduto.img,dadosProduto.preco,dadosProduto.id,dadosProduto.detalhe))

       const produtosRelacionado = await produtosService.listaProdutos()
        
       produtosRelacionado.forEach(elemento=>{
        console.log(produtosSemelhante.childNodes)
            
        if(produtosSemelhante.children.length<6 && dadosProduto.id !== elemento.id && dadosProduto.categoria == elemento.categoria){
            
            produtosSemelhante.appendChild(criarItemProduto(elemento.nome,elemento.img,elemento.preco,elemento.id))
                
        }  
       })
       
    }
    catch(erro){
        console.log(erro)
    }
}

renderProduto()