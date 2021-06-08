const timerDay = document.querySelector(".day");
const timerHour = document.querySelector(".hour");
const timerMinute = document.querySelector(".minute");
const timerSecond = document.querySelector(".second");

function getTimeDifference(start, end) {
  let milliseconds = Math.floor(end - start);
  let seconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);

  hours = hours - days * 24; //limited to 24hr
  minutes = minutes - days * 24 * 60 - hours * 60; //limited to 60m
  seconds = seconds - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60; //limited to 60s
  return {
    remainDays: days,
    remainHours: hours,
    remainMinutes: minutes,
    remainSeconds: seconds,
  };
}

let timer = setInterval(() => {
  const startDate = new Date();
  const endDate = new Date("July 8,2021 07:29:3");

  let remainingTime = getTimeDifference(startDate, endDate);

  timerDay.innerText = remainingTime.remainDays;
  timerHour.innerText = remainingTime.remainHours;
  timerMinute.innerText = remainingTime.remainMinutes;
  timerSecond.innerText = remainingTime.remainSeconds;
}, 1000);
