var altura = 0
var largura = 0
var lifes = 1;

var levels = window.location.search
levels = levels.replace('?', '')
var createFlyTime = 1500

if(levels === 'easy'){
	createFlyTime = 1500;
} else if(levels === 'normal'){
	createFlyTime = 1000;
} else if(levels === 'hard'){
	createFlyTime = 750;
}




function ajustaTamanhoPalcoJogo() {
	altura = window.innerHeight
	largura = window.innerWidth

	 console.log(largura, altura) 
}

ajustaTamanhoPalcoJogo()

