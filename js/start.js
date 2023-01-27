function starGame(){
    var level = document.getElementById('nivel').value

    if(level === ''){
        alert("Selecione um nivel para iniciar o jogo")
        return false;
    }

    window.location.href = "./pages/app.html?" + level;
}