const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];
for (let i = 0; i < 100; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.5,
    speed: Math.random() * 0.5 + 0.2
  });
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#ffffff";
  for (let star of stars) {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();
    star.y += star.speed;
    if (star.y > canvas.height) {
      star.y = 0;
      star.x = Math.random() * canvas.width;
    }
  }
  requestAnimationFrame(drawStars);
}

drawStars();

const text = "✨ Welcome to Mahi's Magical Portfolio ✨";
let i = 0;
function typeHeader() {
  if (i < text.length) {
    document.getElementById("magic-header").textContent += text.charAt(i);
    i++;
    setTimeout(typeHeader, 100);
  }
}
typeHeader();

function toggleMusic() {
  const music = document.getElementById("bg-music");
  music.muted = !music.muted;
}
