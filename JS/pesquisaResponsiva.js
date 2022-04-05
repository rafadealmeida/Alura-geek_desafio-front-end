var campobusca = document.querySelector('.cabecalho__campobusca');
var barraPesquisa = document.querySelector('.cabecalho__barradepesquisa');
var botaoLogin = document.querySelector('.cabecalho__botaologin');
var lupa = document.querySelector('.cabecalho__campobusca >button');
var darkMode = document.querySelector('#darkmode--checked');
var logo = document.querySelector('.cabecalho__logo');
var sair = document.querySelector('.responsive__input--x')
var barraPesquisaResponsiva = document.querySelector('.cabecalho__campobusca--responsive')


var larguraTela = window.screen.width;

const itensInvisiveis = [botaoLogin,lupa,darkMode,logo,campobusca];


if(larguraTela<=480){
    barraPesquisa.classList.add('invisivel');
    campobusca.addEventListener('click', function(){
        itensInvisiveis.forEach(function(item,i){
            item.classList.add('invisivel')
        })
        
        barraPesquisaResponsiva.classList.remove('invisivel');
        sair.classList.remove('invisivel');
    })

    sair.addEventListener('click', function(){
        itensInvisiveis.forEach(function(item,i){
            item.classList.remove('invisivel')
            barraPesquisaResponsiva.classList.add('invisivel');
            sair.classList.add('invisivel');
        })
    })
}
else{
    botaoLogin.classList.remove('invisivel');
        barraPesquisa.classList.remove('invisivel');
        lupa.classList.remove('invisivel');
        campobusca.classList.remove('invisivel');
}
