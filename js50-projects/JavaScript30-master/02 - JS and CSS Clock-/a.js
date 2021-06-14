const shand = document.querySelector(".second-hand");
const mhand = document.querySelector(".minute-hand");
const hhand = document.querySelector(".hour-hand");
function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hour = now.getHours();

  const sdegrees = (seconds / 60) * 360 + 90;
  const mdegrees = (minutes / 60) * 360 + 90;

  const hdegrees = (hour / 12) * 360 + (minutes / 60) * 30 + 90;

  shand.style.transform = `rotate(${sdegrees}deg)`;
  mhand.style.transform = `rotate(${mdegrees}deg)`;
  hhand.style.transform = `rotate(${hdegrees}deg)`;
  console.log(seconds);
}

setInterval(setDate, 1000);
