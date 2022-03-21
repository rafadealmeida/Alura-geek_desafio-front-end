const $html = document.querySelector('html');
const $switch = document.querySelector('#darkmode--checked');

$switch.addEventListener('click', function(){
    console.log('trocou');
    $html.classList.toggle('darkmode');
})