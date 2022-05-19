const drop = document.querySelector('.metodo__adicionarfoto')
let dragged = null;

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
    console.log("dropou");

    let file = evento.dataTransfer.files[0]
    console.log(file);
    colocaImagem(file)
})



const colocaImagem = (file) =>{
    drop.innerHTML=""
    let imagem = new Image();
    imagem.src = file.name

    drop.innerHTML = imagem
}