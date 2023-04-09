document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  const starryBackground = document.getElementById("starry-background");

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function drawStars(layer, speed) {
    const starCount = 100 * layer;

    for (let i = 0; i < starCount; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const radius = Math.random() * layer;
      const brightness = Math.random() * 0.5 + 0.3 - 0.1 * (layer - 1);

      context.beginPath();
      context.arc(x, y, radius, 0, 2 * Math.PI, false);
      context.fillStyle = `rgba(255, 255, 255, ${brightness})`;
      context.fill();
    }
  }

  function createStarryBackground() {
    resizeCanvas();
    context.clearRect(0, 0, canvas.width, canvas.height);

    for (let layer = 1; layer <= 3; layer++) {
      drawStars(layer, layer);
    }
  }

  function drawText() {
    const text = "Suzy Easton";
    const font = "48px Press Start 2P";
    const fillStyle = "#0f0";
    const strokeStyle = "#0f0";
    const lineWidth = 3;
    const x = canvas.width / 2;
    const y = canvas.height / 2;
    const offset = 30;

    context.font = font;
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.strokeStyle = strokeStyle;
    context.lineWidth = lineWidth;
    context.strokeText(text, x, y);
    context.fillStyle = fillStyle;
    context.fillText(text, x, y);

    context.font = "16px Press Start 2P";
    context.fillText("PLAYER 1", x, y + offset);
  }

  starryBackground.appendChild(canvas);
  createStarryBackground();
  drawText();

  window.addEventListener("resize", () => {
    resizeCanvas();
    createStarryBackground();
    drawText();
  });

  window.addEventListener("scroll", () => {
    context.clearRect(0, 0, canvas.width, canvas.height);

    for (let layer = 1; layer <= 3; layer++) {
      context.save();
      context.translate(0, window.pageYOffset * (1 - layer / 5));
      drawStars(layer, layer);
      context.restore();
    }

    drawText();
  });
});

