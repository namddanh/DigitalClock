const catMeowSound = new URL('../sounds/cat-meow.mp3', import.meta.url);
const mouseSqueakSound = new URL('../sounds/mouse-squeak.mp3', import.meta.url);
const audioCat = new Audio(catMeowSound.href);
const audioMouse = new Audio(mouseSqueakSound.href);
let clock = document.getElementById('time');
let formatBtn = document.getElementById('toggle-format');
let is12HourFormat = true;
let isHourNumericOr2Digit = 'numeric';
let minute2Digit = '2-digit';
let mouse = document.querySelector('.mouse');
let toggleLabel = document.querySelector('.toggle-format-text');
const catBtn = document.querySelector('.cat-container');
const mouseBtn = document.querySelector('.mouse');

formatBtn.addEventListener('click', () => {
  is12HourFormat = !is12HourFormat;
  isHourNumericOr2Digit = is12HourFormat ? 'numeric' : '2-digit';
  mouse.classList.toggle('hidden');
  toggleLabel.textContent = is12HourFormat ? '24 HR' : 'AM/PM';
});

catBtn.addEventListener('click', () => {
  audioCat.currentTime = 0; // rewind to start
  audioCat.play();
});

mouseBtn.addEventListener('click', () => {
  audioMouse.currentTime = 0; // rewind to start
  audioMouse.play();
});

function updateClock() {
  const now = new Date(); // Thu Jun 05 2025 13:01:56 GMT-0400 (Eastern Daylight Time)
  const timeString = now.toLocaleTimeString([], {
    hour12: is12HourFormat,
    hour: isHourNumericOr2Digit,
    minute: minute2Digit,
  });

  clock.textContent = timeString;
}

setInterval(updateClock, 1000); // Update every 1000 milliseconds (1 second)

updateClock();
