import { produtosService } from "./teste_api.js";
// import { detalhesProduto } from "./produtos--controller.js";

const pegarURL = new URL(window.location)

const id = pegarURL.searchParams.get('id')

const produtoDestaque = document.querySelector('[data-produtos="Destaque"]')

const detalhesProduto = (nome,img,preco,id,descricao) =>{
    const sessaoDetalhaProduto = document.createElement("section")
    const detalhes = ` 
    <picture>
        <source media="(max-width:768px)" srcset="${img}">
        <img src="../img/Produtos-StarWars/caneca__starwars.jpg" alt="" class="maisdetalhe__imagem">
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
        const array = Array.from(dadosProduto)
        
        console.log(array)

        dadosProduto.forEach(elemento=>{

            produtoDestaque.appendChild(detalhesProduto(elemento.nome,elemento.preco,elemento.descricao,elemento.img))
        })

    }
    catch(erro){
        console.log(erro)
    }
}

renderProduto()