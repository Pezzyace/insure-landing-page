const nav = document.getElementById('nav');
const hamburger = document.getElementById('hamburger');
const closeBtn = document.getElementById('close-btn');

hamburger.addEventListener("click", () => {
  nav.style.display = "flex";
  hamburger.style.display = "none";
  closeBtn.style.display = "inline-flex";
})

closeBtn.addEventListener("click", () => {
  nav.style.display = "none";
  hamburger.style.display = "inline-flex";
  closeBtn.style.display = "none";
})