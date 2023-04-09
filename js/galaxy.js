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

  starryBackground.appendChild(canvas);
  createStarryBackground();

  window.addEventListener("resize", () => {
    resizeCanvas();
    createStarryBackground();
  });

  window.addEventListener("scroll", () => {
    context.clearRect(0, 0, canvas.width, canvas.height);

    for (let layer = 1; layer <= 3; layer++) {
      context.save();
      context.translate(0, window.pageYOffset * (1 - layer / 5));
      drawStars(layer, layer);
      context.restore();
    }
  });

  const nameElement = document.getElementById('my-name');
  const name = nameElement.innerText;
  const animationDelay = 150; // in milliseconds
  const animationStep = 10; // in pixels
  const animationDuration = name.length * animationDelay;

  nameElement.innerText = ''; // clear the original name

  for (let i = 0; i < name.length; i++) {
    const charElement = document.createElement('span');
    charElement.innerText = name.charAt(i);
    charElement.style.position = 'relative';
    charElement.style.left = '0';
    charElement.style.transition = `left ${animationDuration}ms linear`;
    charElement.style.transitionDelay = `${i * animationDelay}ms`;
    nameElement.appendChild(charElement);

    setTimeout(() => {
      charElement.style.left = `${(i - name.length / 2) * animationStep}px`;
    }, 100);
  }
});

