const handleTransition = (e) => {
  if (e.propertyName != "transform") return;
  e.target.classList.remove("active");
};

const handleSound = (e) => {
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
  const activeElement = document.querySelector(`div[data-key='${e.keyCode}']`);

  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  activeElement.classList.add("active");
};

window.addEventListener("keydown", handleSound);

window.addEventListener("transitionend", handleTransition);
