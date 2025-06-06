let clock = document.getElementById('time');
let formatBtn = document.getElementById('toggle-format');
let is12HourFormat = true;
let isHourNumericOr2Digit = 'numeric';
let minute2Digit = '2-digit';
let hackerCat = document.querySelector('.hacker-cat');

formatBtn.addEventListener('click', () => {
  is12HourFormat = !is12HourFormat;
  isHourNumericOr2Digit = is12HourFormat ? 'numeric' : '2-digit';
  hackerCat.classList.toggle('hidden');
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
