var campobusca = document.querySelector('.cabecalho__campobusca');
var barraPesquisa = document.querySelector('.cabecalho__barradepesquisa');
var botaoLogin = document.querySelector('.cabecalho__botaologin');
var lupa = document.querySelector('.cabecalho__campobusca >button');

var larguraTela = window.screen.width;

console.log(larguraTela);
console.log(lupa);

if(larguraTela<=480){
    barraPesquisa.classList.add('invisivel');
    campobusca.addEventListener('click', function(){
        botaoLogin.classList.add('invisivel');
        barraPesquisa.classList.remove('invisivel');
        lupa.classList.add('invisivel');
        
    })
}

else{
    botaoLogin.classList.add('invisivel');
        barraPesquisa.classList.add('invisivel');
        lupa.classList.remove('invisivel');
}
