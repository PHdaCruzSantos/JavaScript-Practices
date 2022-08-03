//criando variaveis para receber os elemento do html - atravez de suas ID
const btn_on = document.getElementById('btn-on');
const btn_off = document.getElementById('btn-off');
const btn = document.getElementById( 'btn' );
const lamp =  document.getElementById('lamp');


function islampBroken () {
   return lamp.src.indexOf( 'quebrada' ) > -1;
}



function lampOn () {
    if(!islampBroken())
        lamp.src = './img/ligada.jpg';
}

function lampOff () {
    if(!islampBroken())
        lamp.src = './img/desligada.jpg';
    
}
function lampSmash () {
    lamp.src = './img/quebrada.jpg';
}



btn_on.addEventListener('click', lampOn);//add um evendo para quando o btn-on receber um click, chamara a função lmapOn
lamp.addEventListener('mouseover', lampOn);
btn_off.addEventListener('click', lampOff);//add um evendo para quando o btn-off receber um click, chamara a função lmapOff
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampSmash);