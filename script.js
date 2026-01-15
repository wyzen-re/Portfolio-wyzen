/* ===== TERMINAL INTRO ===== */
const lines = document.querySelectorAll(".term-line");
const terminal = document.getElementById("terminal");

lines.forEach((line, i) => {
  setTimeout(() => {
    line.classList.remove("hidden");
  }, i * 700);
});

setTimeout(() => {
  terminal.style.opacity = "0";
  terminal.style.transition = "opacity 0.8s ease";
  setTimeout(() => terminal.remove(), 800);
}, 3500);

/* ===== SCROLL REVEAL ===== */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const trigger = window.innerHeight * 0.85;
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < trigger) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* ===== NAVBAR BLUR ===== */
const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 50);
});

/* ===== PARTICLES ===== */
const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");

let w, h;
function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

const particles = Array.from({ length: 70 }, () => ({
  x: Math.random() * w,
  y: Math.random() * h,
  r: Math.random() * 2 + 1,
  dx: (Math.random() - 0.5) * 0.4,
  dy: (Math.random() - 0.5) * 0.4
}));

function animate() {
  ctx.clearRect(0, 0, w, h);
  particles.forEach(p => {
    p.x += p.dx;
    p.y += p.dy;

    if (p.x < 0 || p.x > w) p.dx *= -1;
    if (p.y < 0 || p.y > h) p.dy *= -1;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(125,249,255,0.6)";
    ctx.fill();
  });
  requestAnimationFrame(animate);
}
animate();
