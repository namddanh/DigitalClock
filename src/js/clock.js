let clock = document.getElementById('time');

function updateClock() {
  const now = new Date(); // Thu Jun 05 2025 13:01:56 GMT-0400 (Eastern Daylight Time)
  const timeString = now.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
  console.log(timeString);
  clock.textContent = timeString;
}

setInterval(updateClock, 1000); // Update every 1000 milliseconds (1 second)

updateClock();
