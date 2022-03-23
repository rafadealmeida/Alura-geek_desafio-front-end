var pesquisa = document.querySelector(".cabecalho__barradepesquisa");
var tituloSessao = document.querySelectorAll(".produtos__titulo");
var linkSessao = document.querySelectorAll(".verTudo");
var pesquisaResponsiva = document.querySelector('.campobusca__responsive--input');

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
                    tituloSessao.forEach(function(titulo , i){
                        titulo.classList.add('invisivel');
                    })
                    linkSessao.forEach(function(link, i){
                        link.classList.add('invisivel');
                    })
    

                
            }
            else{
                produtoVerificado.classList.remove('invisivel');
                tituloSessao.forEach(function(titulo , i){
                    titulo.classList.remove('invisivel');
                })
                linkSessao.forEach(function(link, i){
                    link.classList.remove('invisivel');
                })
            }
        }
    }

    else{
        for (let i = 0; i < produto.length; i++) {
            var produtoVerificado = produto[i];
            produtoVerificado.classList.remove('invisivel');
                tituloSessao.forEach(function(titulo , i){
                    titulo.classList.remove('invisivel');
                })
                linkSessao.forEach(function(link, i){
                    link.classList.remove('invisivel');
                })
        }
    }

   
})

pesquisaResponsiva.addEventListener('input', function(){
    var produto = document.querySelectorAll('.produto');

    if(this.value.length>0){
        for (let i = 0; i < produto.length; i++) {
            var produtoVerificado = produto[i];
            var nomeProduto = produtoVerificado.querySelector('.produto__nome');
            var nome = nomeProduto.textContent;
            var expressao = new RegExp(this.value, "i")
    
            if(!expressao.test(nome)){
                produtoVerificado.classList.add('invisivel');
                    tituloSessao.forEach(function(titulo , i){
                        titulo.classList.add('invisivel');
                    })
                    linkSessao.forEach(function(link, i){
                        link.classList.add('invisivel');
                    })
    

                
            }
            else{
                produtoVerificado.classList.remove('invisivel');
                tituloSessao.forEach(function(titulo , i){
                    titulo.classList.remove('invisivel');
                })
                linkSessao.forEach(function(link, i){
                    link.classList.remove('invisivel');
                })
            }
        }
    }

    else{
        for (let i = 0; i < produto.length; i++) {
            var produtoVerificado = produto[i];
            produtoVerificado.classList.remove('invisivel');
                tituloSessao.forEach(function(titulo , i){
                    titulo.classList.remove('invisivel');
                })
                linkSessao.forEach(function(link, i){
                    link.classList.remove('invisivel');
                })
        }
    }

   
})