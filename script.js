const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");


const targetData = new Date("may 30, 2023 12:00:00");
console.log(targetData);
console.log(targetData.getTime());

// Update the countdown every second
const timer = setInterval(() => {
    // Get the current date and time
    const now = new Date().getTime();

    // Calculate the remaining time in milliseconds
    const remainingTime = targetData - now;


    // Calculate days, hours, minutes, and seconds
  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  // Update the countdown elements with the calculated values
  daysEl.textContent = days;
  hoursEl.textContent = hours;
  minutesEl.textContent = minutes;
  secondsEl.textContent = seconds;

  // Check if the countdown is finished
  if (remainingTime < 0) {
    clearInterval(timer);
    // Optionally, you can display a message or perform any other action here when the countdown is finished
  }
}, 1000);