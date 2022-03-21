var pesquisa = document.querySelector(".cabecalho__barradepesquisa");
// var tituloSessao = document.querySelector(".produtos__titulo");
// var linkSessao = document.querySelector(".verTudo");

pesquisa.addEventListener('input', function(){
    var produto = document.querySelectorAll('.produto');

    if(this.value.length>0){
        for (let i = 0; i < produto.length; i++) {
            var produtoVerificado = produto[i];
            var nomeProduto = produtoVerificado.querySelector('.produto__nome');
            var nome = nomeProduto.textContent;
            var expressao = new RegExp(this.value, "i")
    
            if(!expressao.test(nome)){
                produtoVerificado.classList.add('invisivel');
                // tituloSessao.classList.add('invisivel');
                // linkSessao.classList.add('invisivel');
            }
            else{
                produtoVerificado.classList.remove('invisivel');
                // tituloSessao.classList.remove('invisivel');
                // linkSessao.classList.remove('invisivel');
            }
        }
    }

    else{
        for (let i = 0; i < produto.length; i++) {
            var produtoVerificado = produto[i];
            produtoVerificado.classList.remove('invisivel');
            // tituloSessao.classList.remove('invisivel');
            // linkSessao.classList.remove('invisivel');
            
        }
    }

   
})