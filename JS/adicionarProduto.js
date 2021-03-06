import { produtosService } from "./teste_api.js"

const drop = document.querySelector('.metodo__adicionarfoto')
const dropParagrafo = document.querySelector('.dropzone__paragrafo')

const button = document.querySelector('.novoproduto__adicionarfoto--botao')
const input = document.querySelector('.novoproduto__adicionarfoto--input')

const nomeInput = document.querySelector('#novoproduto__nome')
const precoInput = document.querySelector('#novoproduto__preco')
const descricao = document.querySelector('#novoproduto__descricao')
const categoria = document.querySelector('#novoproduto__categoria')

const informacoes = [nomeInput,precoInput,descricao,categoria]

const botaoAdicionar = document.querySelector('.novoproduto__adicionar--botao')



let dragged = null;

let file;

drop.addEventListener('dragover', evento =>{
    evento.preventDefault();
    drop.style.backgroundColor = "lightgrey";
    dragged = evento.target;
})

drop.addEventListener('dragleave', evento =>{
    drop.style.backgroundColor = "#fff";
    dragged = evento.target;
})

drop.addEventListener('drop',evento=>{
    evento.preventDefault();
    drop.style.backgroundColor = "#fff";

    file = evento.dataTransfer.files[0]

    colocaImagem()
   
})


const colocaImagem = () =>{
   
    let fileType = file.type;

    const tipoDeImagem = ["image/jpeg","image/jpg","image/png"]

       
   if(tipoDeImagem.includes(fileType)){
      
       let fileReader = new FileReader(); //criando um novo objeto leitor de arquivo

       fileReader.onload = () => {
           let fileURL = fileReader.result;

           let imagemTag = `<img src="${fileURL}" alt="" class = "adicionar__imagem--produto">`

           drop.style.padding = "0"
           drop.innerHTML = imagemTag;
       }
       fileReader.readAsDataURL(file);
    }
    else{
       alert('Isso não é uma imagem. Tente novamente!')
       dropParagrafo.innerHTML =" Arraste para adicionar uma <br> imagem do produto"
       drop.style.padddig = "2rem 0"
   }
   
}

button.onclick = () => {
    input.click()
    
}

input.addEventListener("change", (event) =>{

    
    file = input.files[0]
    colocaImagem()
    
} )



botaoAdicionar.addEventListener("click", (event) =>{
    event.preventDefault()

    const imagemDoProduto = document.querySelector(".adicionar__imagem--produto")

    informacoes.forEach(informacao=>{
        const temLetra = informacao.length>0
        console.log(temLetra)
    })
    
    
    if(imagemDoProduto){
        const fileUrl = imagemDoProduto.src

        

        produtosService.criaProduto(nomeInput.value,precoInput.value,descricao.value,fileUrl,categoria.value)

        informacoes.forEach(informacao=>{
            informacao.value = ""
        })

        alert("Produto adicionado com sucesso")

        window.location.href = "../html/index.html"

    }else{
        alert("Todos as informações deve ser preenchidas")
    }

})


