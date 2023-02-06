const time = document.querySelector(".time");
const date = document.querySelector(".date");

setInterval(function () {
  const currentTime = new Date().toLocaleTimeString();
  time.innerText = currentTime;
}, 1000);

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const dateObj = new Date();

const currentDate = dateObj.getDate().toLocaleString();
const currentMonth = dateObj.getMonth();
const currentYear = dateObj.getFullYear();
const currentDay = dateObj.getDay();
date.innerText = `${days[currentDay]}, ${currentDate} ${months[currentMonth]} ${currentYear}`;
