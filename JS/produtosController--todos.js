import { produtosService } from "./teste_api.js";
// import { criarItemProduto } from "./produtos--controller.js"


const gradeProdutos = document.querySelector('.produtos__grade--todososprodutos')


// const botaoEditar = document.querySelector('.produto__funcao--editar')
// const sairModal = document.querySelector('.editar__produto--sair')


const criarProdutoGrade = (nome,img,preco,id) =>{
    const itemProduto = document.createElement("li")
    const conteudo = `

   
        <a href="maisdetalhes_teste.html?id=${id}" class="produto__link"><img src="${img}" alt="">
        <h3 class="produto__nome">${nome}</h3>
        <p class="produto__preco">${preco}</p>
        <p class="produto__codigo">#11111111</p>
        <div class="produto__funcao">
            <button class="produto__funcao--editar"></button>
            <button class="produto__funcao--deletar"></button>
        </div>
        
        
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

function abrirModal(){
    let element = document.querySelector('.editar__produto');
    element.classList.add('.janela__modal--mostra')
    console.log('abriu')
}

function fecharModal(){
    let element = document.querySelector('.editar__produto');
    element.classList.remove('.janela__modal--mostra')
    console.log('fechar')
}

const escutador = async () => {
    await renderTodosProdutos()

    const botaosEditar = document.querySelectorAll('.produto__funcao--editar')

    const sairModal = document.querySelector('.editar__produto--sair')

    try{
        botaosEditar.forEach((botaoEditar)=>{
            botaoEditar.addEventListener('click',(evento)=>{
                evento.preventDefault()
                abrirModal()

        })
        });
        
        sairModal.addEventListener('click',(evento)=>{
            evento.preventDefault()
            fecharModal()
        });
    }

    catch(erro){
        console.log(erro);
    }
}
escutador()



