document.addEventListener("DOMContentLoaded", function () {
  const bioText = document.getElementById("bio-text");
  const guitarCanvas = document.getElementById("guitar-canvas");
  const startGameButton = document.getElementById("start-game-button");
  const bioContent = `In the year 2023, but it feels like 1982.... Suzy Easton, a single 40-year-old musician from Vancouver, finds herself battling some crazy cosmic foes! Once a national touring bassist, Canucks fan, taco lover, and poker enthusiast, 
  Suzy now faces a rockin' adventure in a universe where Metro Vancouver is under harmony siege. Can she restore balance to the city, 
  just as the Canucks defied the odds to reach their first-ever Stanley Cup Final in 1982 (wait, what?) Join Suzy's quest against the Space Groove Invaders!`;
  
  const level1Intro = "Welcome to Level 1 - Metrotown Mall! It's busier than a Space Invaders arcade on a Saturday night. You'll have to navigate through the bustling mall, avoiding shopping carts, reckless parents with strollers, and those pesky kiosk salespeople. Can you make it through without getting lost in the food court?";

  let currentText = '';
  let currentIndex = 0;

  function typeWriter() {
    if (currentIndex < bioContent.length) {
      bioText.innerHTML += bioContent.charAt(currentIndex);
      currentIndex++;
      setTimeout(typeWriter, 50);
    } else {
      showGuitarAndButton();
    }
  }

  function showGuitarAndButton() {
    if (guitarCanvas && startGameButton) {
      guitarCanvas.style.display = "block";
      startGameButton.style.display = "block";
      startGameButton.classList.add("green-theme");
      drawGuitar(guitarCanvas);
    }
  }

  function drawGuitar(canvas) {
    const ctx = canvas.getContext("2d");
    ctx.strokeStyle = "#00ff00";
    ctx.lineWidth = 4;

    // Draw the head
    ctx.beginPath();
    ctx.moveTo(60, 40);
    ctx.lineTo(240, 40);
    ctx.lineTo(240, 180);
    ctx.lineTo(60, 180);
    ctx.lineTo(60, 40);
    ctx.stroke();

    // Draw the neck
    ctx.beginPath();
    ctx.moveTo(120, 180);
    ctx.lineTo(180, 180);
    ctx.lineTo(180, 600);
    ctx.lineTo(120, 600);
    ctx.lineTo(120, 180);
    ctx.stroke();

    // Draw the body
    ctx.beginPath();
    ctx.moveTo(60, 600);
    ctx.lineTo(240, 600);
    ctx.lineTo(280, 750);
    ctx.lineTo(20, 750);
    ctx.lineTo(60, 600);
    ctx.stroke();

    // Draw the strings
    for (let i = 0; i < 4; i++) {
      ctx.beginPath();
      ctx.moveTo(120 + i * 20, 40);
      ctx.lineTo(120 + i * 20, 750);
      ctx.stroke();
    }

    // Draw the tuning pegs
    for (let i = 0; i < 4; i++) {
      ctx.beginPath();
      ctx.arc(90 + i * 50, 60, 10, 0, 2 * Math.PI);
      ctx.stroke();
    }

    // Draw the bridge
    ctx.beginPath();
    ctx.arc(60, 700, 10, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(240, 700, 10, 0, 2 * Math.PI);
    ctx.stroke();
  }

  if (bioText) {
    typeWriter();
  }
});






