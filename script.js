const slider = document.getElementById("slider");
const upper = document.querySelector(".upper");
const vignette = document.querySelector(".vignette");

let target = 0;
let current = 0;
let velocity = 0;

function animate() {
  // spring fisic  const tension = 0.08;
  const friction = 0.85;

  velocity += (target - current) * tension;
  velocity *= friction;
  current += velocity;

  upper.style.transform = `translateY(${-current * 0.7}px)`;
  vignette.style.opacity = 0.3 + current / 200;

  requestAnimationFrame(animate);
}

slider.addEventListener("input", () => {
  target = slider.value;
});

slider.addEventListener("change", () => {
  target = 0;
  slider.value = 0;
});

animate();

