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

    if(anvilTop == 700 && paddoLeft > 750 && paddoLeft < 850) {
        var newLeft = paddoLeft; //Store the current possition before it gets set back
        paddo.classList.add("dead"); //add new class
        var newPosition = document.querySelector('.dead'); //locate the class
        newPosition.style.left = newLeft + "px"; //change the left property to the stored position

        setTimeout(() => { paddo.remove(); }, 3000); //Destroy Paddo
    }
})