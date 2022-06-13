const dev = true;

function checkDevMode() {
  if (dev) {
    console.log("debug mode enabled");
    document.getElementById('cheat').classList.add('active');
  } else {
    console.log("application started");
  }
}

function init() {
  checkDevMode();
}

init();


// 
// SCREEN TOGGLE MANAGER
// 
const cheatButtons = document.querySelectorAll(".cheat-button");
const allScreens = document.querySelectorAll(".screen");

for(let i = 0; i < cheatButtons.length; i++) {
  cheatButtons[i].addEventListener("click", function(e) {
    for(let x = 0; x < allScreens.length; x++) {
      allScreens[x].classList.remove("active");
    }
    allScreens[i].classList.add("active");
  });
}