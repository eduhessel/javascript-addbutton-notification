//Com esse bloco de código consigo adicionar códigos HTML manipulando o DOM, utilizando o appendChild o elemento será apresentado como o último elemento na tela.
// let elemento = document.createElement('h1');
// elemento.textContent = 'Javascript';
// console.log(elemento);
// document.body.appendChild(elemento);

document.querySelector('h1').innerHTML =
'<div>Javascript</div> ';

//Com esse bloco de código consigo manipular tudo que está dentro do H1 por meio do Javascript
// document.querySelector('h1').innerHTML =
// '<div class=" heading text-center"><p>Aqui temos um p</p>Aqui temos um h1<span>Temos 2 elementos dentro de um h1 utilizando JS</span></div> ';

let botao = document.querySelector('button');
botao.addEventListener('click', somaUm);

function somaUm() {
    let elementoH3 = document.querySelector('h3');
    let valor = parseInt(elementoH3.textContent)
    let novoValor = valor + 1;
    elementoH3.textContent = novoValor;

    let r = parseInt(Math.random() * 256);
    let g = parseInt(Math.random() * 256);
    let b = parseInt(Math.random() * 256);

    console.log(r, g, b);

    elementoH3.style.color = `rgb(${r}, ${g}, ${b})`;

}


//Notificação
//Pega o id do botão para disparar a notificação
let notificationButton = document.getElementById('notificationButton');

//Pega o id da notificação
let notification = document.getElementById('notification');

//Define que o a notificação pode ser disparada
let podeDispararNotificação = true;

//Adiciona o evento de clique
notificationButton.addEventListener('click', function() {
    if (!podeDispararNotificação) return; // Se o botão for clicado durante o tempo de 2 segundos não lança uma nova notificação

    notification.style.display = 'block'; //Altera o estilo do display
    podeDispararNotificação = false; // Desativa de aparecer uma nova notificação toda vez que o botão for clicado

    //Timeout da notificação
    setTimeout(function() {
      notification.style.display = 'none'; //Altera o estilo do display
      podeDispararNotificação = true; // Reativa a notificação após 2 segundos
    }, 2000); // Exibe a notificação por 2 segundos
  });