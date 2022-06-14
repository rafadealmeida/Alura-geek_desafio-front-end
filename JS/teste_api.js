const listaProdutos = () => {
    return fetch (`http://localhost:3000/produtos`) .then(resposta =>{
        if (resposta.ok){
            return resposta.json();
        }
        throw new Error ("Não foi possível listar os produtos")
    })
}

const detalhaProdutos = (id) => {
    return fetch (`http://localhost:3000/produtos/${id}`) .then(resposta =>{
        return resposta.json();
    })
    
}

const criaProduto = (nome, preco, descricao, img, categoria) => {
    return fetch (`http://localhost:3000/produtos/`, {
        method : 'POST',
        headers : {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome:nome ,
            preco:preco,
            detalhe:descricao,
            img:img,
            categoria:categoria

        })

      })
    .then(resposta => {
        if(resposta.ok) {
            return resposta.json();
        }
        throw new Error ('Não foi possível criar o produto')
        
    })
}

const atualizaProduto = (nome, preco, descricao, img, id, categoria) => {
    return fetch (`http://localhost:3000/produtos/${id}`, {
        method : 'PUT',
        headers : {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome:nome ,
            preco:preco,
            detalhe:descricao,
            img:img,
            categoria:categoria

        })

      })
    .then(resposta => {
        if(resposta.ok) {
            return resposta.json();
        }
        throw new Error ('Não foi possível atualizar o produto')
        
    })
}

const apagarProduto = (id) => {
    return fetch (`http://localhost:3000/produtos/${id}`, {
        method : 'DELETE'})
}

export  const produtosService ={
    listaProdutos,
    detalhaProdutos,
    atualizaProduto,
    criaProduto,
    apagarProduto
}