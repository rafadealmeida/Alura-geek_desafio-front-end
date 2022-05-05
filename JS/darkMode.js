const $html = document.querySelector('html');
const $switch = document.querySelector('#darkmode--checked');
const $switchcheck = document.querySelector('#cabecalho__darkmode--checkbox');

$switch.addEventListener('click', function(){
    $html.classList.toggle('darkmode');
})