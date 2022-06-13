const dev = true;
let currentScreen = 1;


(function checkDevMode() {
  if (dev) {
    console.log("debug mode enabled");
    document.getElementById('cheat').classList.add('active');
  } else {
    console.log("application started");
  }
  console.log(`current screen: ${currentScreen}`);
})();


// 
// SCREEN CURRENT STATE MANAGER
// 
document.body.onkeydown = function(e) {
  if (currentScreen === 1 && e.key == " " ||
      currentScreen === 1 && e.code == "space") {
      document.getElementById('attract-screen').classList.remove('active');
      document.getElementById('intro-screen').classList.add('active');
      console.log(`current screen: ${currentScreen}`);
      countdownTimer();
      currentScreen++;
    } else if ('oof'){
      
  }
}


// 
// SCREEN CHEAT TOGGLE MANAGER
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


// 
// TIMER
//
if (currentScreen === 1) {
  function countdownTimer() {
    let div = document.getElementById('countdown');
    div.innerHTML += '<svg><circle r="180" cx="200" cy="200"></circle></svg>';
  
    let countdownNumber = document.getElementById('countdown-number');
    let countdown = 10;
    countdownNumber.textContent = countdown;
  
    let countdownTimer = setInterval(() => {
      countdown = --countdown <= 0 ? clearInterval(countdownTimer) : countdown;
      countdownNumber.textContent = countdown;
      if (countdown === undefined) {
        console.log('pls');
        document.getElementById('countdown').remove();
      }
    }, 1000);
  }
}