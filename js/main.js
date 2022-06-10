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
  document.getElementById('attract-screen').classList.add('active');
}

init();

let elements = document.getElementsByClassName("cheat-button");

let toggleScreen = function() {
  let attribute = this.getAttribute("id");
  // alert(attribute);
  switch (attribute) {
    case 'toggle-attract':
      console.log('break 1');
      document.getElementById('attract-screen').classList.add('active');
      document.getElementById('intro-screen').classList.remove('active');
      document.getElementById('game-screen').classList.remove('active');
      break;
    case 'toggle-intro':
      console.log('break 2');
      document.getElementById('attract-screen').classList.remove('active');
      document.getElementById('intro-screen').classList.add('active');
      document.getElementById('game-screen').classList.remove('active');
      break;
    case 'toggle-game':
      console.log('break 3');
      document.getElementById('attract-screen').classList.remove('active');
      document.getElementById('intro-screen').classList.remove('active');
      document.getElementById('game-screen').classList.add('active');
      break;
  }
};

Array.from(elements).forEach(function(element) {
  element.addEventListener('click', toggleScreen);
});