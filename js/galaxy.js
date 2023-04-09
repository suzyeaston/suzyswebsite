document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  const starryBackground = document.getElementById("starry-background");
  const playerStart = document.getElementById("player-start");
  const myName = document.getElementById("my-name");

  let playerStartVisible = false;

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

  function drawBackground() {
    context.fillStyle = "rgba(0, 0, 0, 0.8)";
    context.fillRect(0, 0, canvas.width, canvas.height);
  }

  function createStarryBackground() {
    resizeCanvas();
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawBackground();

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
    drawBackground();

    for (let layer = 1; layer <= 3; layer++) {
      context.save();
      context.translate(0, window.pageYOffset * (1 - layer / 5));
      drawStars(layer, layer);
      context.restore();
    }
  });

  function createPlayerReadyOverlay() {
    const overlay = document.createElement("div");
    overlay.id = "player-ready-overlay";
    overlay.style.display = "none";
    overlay.innerHTML = `
      <div id="player-ready-text">Player 1 Ready?</div>
      <button id="player-ready-yes">Yes</button>
      <button id="player-ready-no">No</button>
    `;

    overlay.addEventListener("click", (event) => {
      if (event.target.id === "player-ready-yes") {
        window.location.href = "https://suzyeaston.tech/level-1/";
      } else if (event.target.id === "player-ready-no") {
        overlay.style.display = "none";
        playerStart.style.display = "block";
      }
    });

    document.body.appendChild(overlay);
  }

  createPlayerReadyOverlay();

  playerStart.addEventListener("click", () => {
    if (!playerStartVisible) {
      playerStart.style.display = "none";
      myName.style.filter = "none";
      playerStartVisible = true;
    } else {
      document.getElementById("player-ready-overlay").style.display = "flex";
    }
  });
});
