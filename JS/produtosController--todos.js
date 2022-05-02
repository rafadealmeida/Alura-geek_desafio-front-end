import { produtosService } from "./teste_api.js";
// import { criarItemProduto } from "./produtos--controller.js"


const gradeProdutos = document.querySelector('.produtos__grade--todososprodutos')


const criarProdutoGrade = (nome,img,preco,id) =>{
    const itemProduto = document.createElement("li")
    const conteudo = `
    
    <div class="funcoes">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 17.2501V21.0001H6.75L17.81 9.94006L14.06 6.19006L3 17.2501ZM20.71 7.04006C21.1 6.65006 21.1 6.02006 20.71 5.63006L18.37 3.29006C17.98 2.90006 17.35 2.90006 16.96 3.29006L15.13 5.12006L18.88 8.87006L20.71 7.04006Z" fill="white"/>
        </svg>
        <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM14 1H10.5L9.5 0H4.5L3.5 1H0V3H14V1Z" fill="white"/>
            </svg>
            
    </div>
        <a href="maisdetalhes_teste.html?id=${id}" class="produto__link"><img src="${img}" alt="">
        <h3 class="produto__nome">${nome}</h3>
        <p class="produto__preco">${preco}</p>
        <p class="produto__codigo">#11111111</p>
        
        
    `
    itemProduto.classList.add('produto');
    itemProduto.innerHTML = conteudo;
    itemProduto.dataset.id = id
    return itemProduto;
}

const renderTodosProdutos = async () =>{ 
    
    try {
        const dados = await produtosService.listaProdutos()
            
            
        dados.forEach(elemento=>{
                      
               if(gradeProdutos.children.length <= 17){

                   gradeProdutos.appendChild(criarProdutoGrade(elemento.nome,elemento.img,elemento.preco,elemento.id))
               }
                    
                        
                
               
                                    
        })

    }
    catch(erro){
        console.log(erro)
    }
}

renderTodosProdutos();

