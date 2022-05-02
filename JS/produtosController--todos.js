import { produtosService } from "./teste_api.js";
// import { criarItemProduto } from "./produtos--controller.js"


const gradeProdutos = document.querySelector('.produtos__grade--todososprodutos')


const criarProdutoGrade = (nome,img,preco,id) =>{
    const itemProduto = document.createElement("li")
    const conteudo = `
        
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

