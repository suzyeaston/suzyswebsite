document.addEventListener("DOMContentLoaded", function () {
  const starryBackground = document.getElementById("starry-background");

  if (starryBackground) {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
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

   if (playerStart) {
  playerStart.addEventListener("click", () => {
    if (!playerStartVisible) {
      playerStart.style.display = "none";
      myName.style.filter = "none";
      playerStartVisible = true;

      // Create Player 1 Ready? overlay and buttons
      const playerReadyOverlay = document.createElement("div");
      playerReadyOverlay.id = "player-ready-overlay";

      const playerReadyText = document.createElement("div");
      playerReadyText.id = "player-ready-text";
      playerReadyText.innerText = "Player 1 Ready?";

      const playerReadyYes = document.createElement("button");
      playerReadyYes.id = "player-ready-yes";
      playerReadyYes.innerText = "Yes";
      playerReadyYes.addEventListener("click", () => {
        window.location.href = "https://suzyeaston.tech/suzys-online-80s-video-game/";
      });

      const playerReadyNo = document.createElement("button");
      playerReadyNo.id = "player-ready-no";
      playerReadyNo.innerText = "No";
      playerReadyNo.addEventListener("click", () => {
        playerReadyOverlay.remove();
        playerStart.style.display = "block";
        playerStartVisible = false;
      });

      playerReadyOverlay.appendChild(playerReadyText);
      playerReadyOverlay.appendChild(playerReadyYes);
      playerReadyOverlay.appendChild(playerReadyNo);

      document.body.appendChild(playerReadyOverlay);
    }
  });
}
