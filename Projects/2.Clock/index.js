const HourHand = document.querySelector(".hour-hand");
const MinHand = document.querySelector(".min-hand");
const SecHand = document.querySelector(".second-hand");

const ClockHandle = () => {
  const now = new Date();

  const minutes = now.getMinutes();
  const minutesDegrees = (minutes / 60) * 360 - 90;
  MinHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = (hours / 12) * 360 - 90 + minutesDegrees / 12;
  HourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  const seconds = now.getSeconds();
  const secondDegrees = (seconds / 60) * 360 - 90;
  SecHand.style.transform = `rotate(${secondDegrees}deg)`;
};

setInterval(ClockHandle, 1000);
