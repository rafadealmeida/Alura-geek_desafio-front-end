const listaProdutos = () => {
    return fetch (`http://localhost:3000/produtos`) .then(resposta =>{
        if (resposta.ok){
            return resposta.json();
        }
        throw new Error("Não foi possível listar os produtos")
    })
}

const detalhaProdutos = (id) => {
    return fetch (`http://localhost:3000/produtos/${id}`) .then(resposta =>{
        return resposta.json();
    })
    
}

export  const produtosService ={
    listaProdutos,
    detalhaProdutos
}