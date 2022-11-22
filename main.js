//cores dinâmica

let mostruario;
let colorPredeterminado = "#0000ff";

window.addEventListener("load", startup, false);

function startup() {
  mostruario = document.querySelector('#mostruario');
  mostruario.value = colorPredeterminado;
  mostruario.addEventListener('input', atualizarPrimeiro, false);
  mostruario.addEventListener('change', atualizarTodo, false);
  mostruario.select();

}

function atualizarPrimeiro() {
  let body = document.querySelector('body');

  if (body) {
    body.style.background = event.target.value;
  }
}

function atualizarTodo(event) {
  document.querySelectorAll('body').forEach(function(body) {
    body.style.background = event.target.value;
  });
}


// relógio
setInterval(()=>{
  let novaHora= new Date();
  let hora = novaHora.getHours();
  let minuto = novaHora.getMinutes();
  let segundos = novaHora.getSeconds();
  let data= document.getElementById('data')
  //chamando a função zero para que ela retorne a concatenação
  //com minutos e segundos
   minuto=zero(minuto)
   segundos=zero(segundos)
 
  document.getElementById('hora').innerHTML=`${hora}:${minuto}<h4 id="segundos">${segundos}</h4>`;
},1000);
const zero= (x)=> {
  if(x<10){
    x = '0'+x;
  }return x;
}

let bola=document.getElementById('bola')

let intervalo=0;
  let contador = 0;
  
  while(contador<=1000){
    intervalo +=1000;
    setTimeout("document.getElementById('bola').style.borderColor='white'",intervalo);
    intervalo+=1000;
    setTimeout("document.getElementById('bola').style.borderColor='black'",intervalo);
    contador++;
  }
 
