// //Sirina windowa
// window.addEventListener('resize', function () {
//   console.log(window.innerWidth)
// })
// //Output koje slovo
// let input = document.querySelector('input')
// input.addEventListener('keydown',  function (event) {
//   console.log(event)//event.key tacno koje button na tastaturi
// })
// //Detekcija pomeranje misa
// window.addEventListener("mousemove", function (event) {
//   console.log('mis pomeren')  
// })
let crashRide = document.querySelector("#crash-ride")
let hiHatTop = document.querySelector('#hihat-top');

const animateCrashOrRide = function () {
  crashRide.style.transform = 'rotate(1deg) scale(1.5)';
}
const animateHiHatClosed = function () {
  hiHatTop.style.top = '170px'
}
window.addEventListener("keydown", function (event) {
  let code = event.keyCode;

  let keyElement = document.querySelector(`div[data-key="${code}"]`)

  if (!keyElement) {
  return;
  }
  let audio = document.querySelector(`audio[data-key="${code}"]`)
  audio.currentTime = 0;
  audio.play();
  switch (code) {
    case 69:
    case 82:
      animateCrashOrRide();
      break;
    case 75:
    case 73:
      animateHiHatClosed();
      break;  
  }

  keyElement.classList.remove('playing')  
})

let removeCrashRideTransition = e => {
  if (e.propertyName !== 'transform') return;
  
  e.target.style.transform = 'rotate:(-7.2deg) scale(1.5)'
}
const hiHatTopTransition = e => {
  if (e.propertyName !== 'top') return;

  e.target.style.top = '166px'  
}

const removeKeyTransition = e => {
  if (e.propertyName !== 'transform') {
    return
  }
  e.target.classList.remove('playing')
}

let drumKeys = document.querySelectorAll('.key')

drumKeys.forEach(function (key) {
  key.addEventListener("transitionend", removeKeyTransition)
})

crashRide.addEventListener("transitionend", removeCrashRideTransition);
hiHatTop.addEventListener("transitionend", hiHatTopTransition);

