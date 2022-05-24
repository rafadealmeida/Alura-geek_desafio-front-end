import { produtosService } from "./teste_api.js";
// import { criarItemProduto } from "./produtos--controller.js"
import { pegaInput } from "./produtosController--put.js";

import { enviarFormulario } from "./produtosController--put.js";


const gradeProdutos = document.querySelector('.produtos__grade--todososprodutos')
const sairModal = document.querySelector('.editar__produto--sair')
const janelaModal = document.querySelector('.editar__produto')






const criarProdutoGrade = (nome,img,preco,id) =>{
    const itemProduto = document.createElement("li")
    const conteudo = `

   
        <a href="maisdetalhes_teste.html?id=${id}" class="produto__link"><img src="${img}" alt="">
        <h3 class="produto__nome">${nome}</h3>
        <p class="produto__preco">${preco}</p>
        <p class="produto__codigo">#11111111</p>
        <div class="produto__funcao">
            <button class="produto__funcao--editar" id="${id}"></button>
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
                      
               if(gradeProdutos.children.length < 24){

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
    
    if (element.style.visibility == 'hidden'|| element.style.visibility == ''){  
        element.style.visibility = 'visible'
        element.style.opacity = '1'
        element.style.transition = 'visibility 0.25s ease-in-out, transform 0.25s ease-in-out,opacity 0.25s ease-in-out;'
        fecharModal()
        
    }else{
        element.style.visibility = 'hidden'
        element.style.opacity = '0'
        element.style.transform='scale(1.0)'
    }
}

function fecharModal(){
    let element = document.querySelector('.editar__produto');
    element.addEventListener('click', (evento)=>{
       

        if(evento.target == sairModal || evento.target == janelaModal){
            element.style.visibility = 'hidden'
            element.style.opacity = '0'  
        }
    })
}

export const abrirJanelaModal =  async () => {
    await renderTodosProdutos()

    const botaosEditar = document.querySelectorAll('.produto__funcao--editar')
    const botaosDeletar = document.querySelectorAll('.produto__funcao--deletar')
 
    try{
        botaosEditar.forEach((botaoEditar)=>{
            botaoEditar.addEventListener('click',(evento)=>{
                evento.preventDefault()
                abrirModal()
                let id = botaoEditar.id
                pegaInput(id)
                enviarFormulario(id)  
        })
        });

        botaosDeletar.forEach((botaoDeletar)=>{
            botaoDeletar.addEventListener('click',(evento)=>{
            evento.preventDefault()
            console.log(evento.target.className)
        })
        
    })
    }

    catch(erro){
        console.log(erro);
    }
}

abrirJanelaModal()



