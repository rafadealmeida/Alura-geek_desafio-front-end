const listaProdutos = () => {
    return fetch (`http://localhost:3000/produtos`) .then(resposta =>{
        if (resposta.ok){
            return resposta.json();
        }
        throw new Error("Não foi possível listar os produtos")
    })
}

const criarItemProduto = (nome,img,preco,id) =>{
    const itemProduto = document.createElement("li")
    const conteudo = `
        
        <a href="maisdetalhes.html?id=${id}" class="produto__link"><img src="${img}" alt="">
        <h3 class="produto__nome">${nome}</h3>
        <p class="produto__preco">${preco}</p>
        <a href="maisdetalhes.html?id=${id}" class="produto__link">Ver produto</a>
        
    `
    itemProduto.classList.add('produto');
    itemProduto.innerHTML = conteudo;
    itemProduto.dataset.id = id
    return itemProduto;
}

const gradeProduto = document.querySelectorAll('.produtos__grade')
const arrayCategorias =Array.from(gradeProduto)

// console.log(arrayCategorias)




const render = async () =>{
    
    const categoria = arrayCategorias.map(function(catagory, i){
        const categorias = catagory.dataset.categoria
        // console.log(categorias)
        return categorias
    })
    

    try {
        const dados = await listaProdutos()
  
        dados.forEach(elemento=>{
            
            categoria.forEach(function(categoriaItem){
                if(categoriaItem == elemento.categoria){
                    gradeProduto.forEach(function(grade){
                        grade.appendChild(criarItemProduto(elemento.nome,elemento.img,elemento.preco,elemento.id))
                        
                    })
                }
            })
                                    
        })

    }
    catch(erro){
        console.log(erro)
    }
}

render();