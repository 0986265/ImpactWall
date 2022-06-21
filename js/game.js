var anvil = document.getElementById("anvil");
var paddo = document.getElementById("paddo");

function drop(){
    if(anvil.classList != "animate") {
        anvil.classList.add("animate");
        setTimeout(function(){
            anvil.classList.remove("animate");
        }, 1000)
    }
}

var checkCollision = setInterval(function() {
    var anvilTop = parseInt(window.getComputedStyle(anvil).getPropertyValue("top"));
    var paddoLeft= parseInt(window.getComputedStyle(paddo).getPropertyValue("left"));

    if(anvilTop == 700 && paddoLeft > 650 && paddoLeft < 750) {
        paddo.classList.add("dead");
        paddo.style.left = paddoLeft;
    }
})