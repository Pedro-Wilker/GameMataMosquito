function posicaoRandomica() {
    var posicaoX = Math.floor(Math.random() * altura);
    var posicaoY = Math.floor(Math.random() * largura);

    console.log(posicaoX, posicaoY);

    /* Criando elementos html */

    var fly1 = document.createElement('img');
    fly1.src = './images/fly.png';
    fly1.className = 'fly'

    document.body.appendChild(fly1);

}