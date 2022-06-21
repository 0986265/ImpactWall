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
let cheatButtonIntro = document.querySelector('#toggle-intro');
cheatButtonIntro.addEventListener('click', introScreen);

document.body.onkeydown = function(e) {
  if (currentScreen === 1 && e.key == ' ') {
      introScreen();
    } else if ('oof'){   
  }
}

function introScreen() {
  document.getElementById('attract-screen').classList.remove('active');
  document.getElementById('intro-screen').classList.add('active');
  console.log(`Current screen: ${currentScreen}`);
  countdownTimer();
  currentScreen++;
}

function gameScreen() {
  document.getElementById('intro-screen').classList.remove('active');
  document.getElementById('game-screen').classList.add('active');
  console.log(`Current screen: ${currentScreen}`);
  currentScreen++;
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
function countdownTimer() {
  let div = document.getElementById('countdown');
  div.innerHTML += '<svg><circle r="135" cx="150" cy="150"></circle></svg>';

  let countdownNumber = document.getElementById('countdown-number');
  let countdown = 10; //change this property also in _timer.scss
  countdownNumber.textContent = countdown;

  let countdownTimer = setInterval(() => {
    countdown = --countdown <= 0 ? clearInterval(countdownTimer) : countdown;
    countdownNumber.textContent = countdown;
    if (countdown === undefined) {
      console.log('remove countdown');
      // document.getElementById('countdown').remove();
      // gameScreen();
    }
  }, 1000);
}