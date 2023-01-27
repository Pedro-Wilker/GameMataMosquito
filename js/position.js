function positionRandom() {
    
    //remove fly

    if(document.getElementById('fly')){
        document.getElementById('fly').remove();
    }

    var posicaoX = Math.floor(Math.random() * largura) - 90;
    var posicaoY = Math.floor(Math.random() * altura) - 90;

    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

     console.log(posicaoX, posicaoY); 

    /* Create element html */

    var fly1 = document.createElement('img');
    fly1.src = './images/fly.png';
    fly1.className = sizeRandom() + " " +sideRandom();
    fly1.style.left = posicaoX + 'px';
    fly1.style.top = posicaoY + 'px';
    fly1.style.position = 'absolute';
    fly1.id = 'fly'
    fly1.onclick = function (){
        this.remove();
    }

    document.body.appendChild(fly1);

}

function sizeRandom(){
    var size = Math.floor(Math.random() * 3);

    switch(size){
        case 0:
            return 'fly1';

        case 1: 
            return 'fly2';

        case 2:
            return 'fly3';
        
    }
}

function sideRandom(){
    var side = Math.floor(Math.random() * 2);

    switch(side){
        case 0:
            return 'sideA'
        
        case 1:
            return 'sideB'
    }
}