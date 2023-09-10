const panels = document.querySelectorAll(".panel");
// console.log(panels);

function toggleOpen() {
  panels.forEach((panel) => {
    if (this == panel) return;
    panel.classList.remove("open-active");
  });
  this.classList.toggle("open-active");
}

panels.forEach((panel) => panel.addEventListener("click", toggleOpen));
