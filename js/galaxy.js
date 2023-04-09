document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  const starryBackground = document.getElementById("starry-background");

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function drawStars() {
    const starCount = 250;

    for (let i = 0; i < starCount; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const radius = Math.random() * 2;
      const brightness = Math.random() * 0.5 + 0.3;

      context.beginPath();
      context.arc(x, y, radius, 0, 2 * Math.PI, false);
      context.fillStyle = `rgba(255, 255, 255, ${brightness})`;
      context.fill();
    }
  }

  function createStarryBackground() {
    resizeCanvas();
    drawStars();
  }

  starryBackground.appendChild(canvas);
  createStarryBackground();

  window.addEventListener("resize", () => {
    resizeCanvas();
    createStarryBackground();
  });
});
