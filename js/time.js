var times = 15

var cronobreak =  setInterval(function(){
    
    times -= 1;
    
    if(times < 0){
        clearInterval(cronobreak);
        clearInterval(createFly);
        window.location.href="./win.html"
    } else {
        document.getElementById("cronobreak").innerHTML = times;
    }
}, 1000)