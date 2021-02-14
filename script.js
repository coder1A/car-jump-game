const car = document.getElementById("car");
const barrier = document.getElementById("barrier");

document.addEventListener("keydown" , function(event) {
    jump();
});

function jump () {
    if (car.classList != 'jump') {
        car.classList.add("jump")
    }
    setTimeout(function(){
        car.classList.remove("jump")
    }, 300)
};

let isAlive =setInterval (function() {
    let cartop = parseInt (window.getComputedStyle(car).getPropertyValue("top"));
    let barrierLeft = parseInt (window.getComputedStyle(barrier).getPropertyValue("left"));


    if (barrierLeft < 20 && barrierLeft > 0 && cartop >= 150) {
        alert ("GAME OVER !!!")
    }
},  10)