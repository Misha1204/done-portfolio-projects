const DAY_SPAN = document.querySelector(".dd");
const HOUR_SPAN = document.querySelector(".hh");
const MINUTE_SPAN = document.querySelector(".mm");
const SECOND_SPAN = document.querySelector(".ss");
const newYearDate = "1 Jan 2022";

function countdown() {
  let todayDate = new Date();
  let newYear = new Date(newYearDate);
  let difference = newYear - todayDate;

  let totalSeconds = difference / 1000;
  let days = Math.floor(totalSeconds / 3600 / 24);
  let hours = Math.floor(totalSeconds / 3600) % 24;
  let minutes = Math.floor(totalSeconds / 60) % 60;
  let seconds = Math.floor(totalSeconds) % 60;

  DAY_SPAN.textContent = days;
  HOUR_SPAN.textContent = correctCountdown(hours);
  MINUTE_SPAN.textContent = correctCountdown(minutes);
  SECOND_SPAN.textContent = correctCountdown(seconds);
}

function correctCountdown(time) {
  return time < 10 ? `0${time}` : time;
}

setInterval(countdown, 1000);
// countdown();
