document.addEventListener("DOMContentLoaded", function () {
  const bioText = document.getElementById("bio-text");
  const bioContent = `Dun Dun Dun! Level 1: Suzy's Galactic Groove Invaders! In a universe where harmony is under siege, technologist Suzy Easton, Canucks fan (for real), former national touring bassist, taco lover, and poker enthusiast from Vancouver, launches into an 80s arcade-style adventure... 
  excitement, she wrote... can she restore balance to the galaxy, just as the Canucks overcame the odds to make their first-ever Stanley Cup Final appearance in 1982 (lol)? Get ready to power up and take on the challenge!`;

  let currentIndex = 0;

  function typeWriter() {
    if (currentIndex < bioContent.length) {
      bioText.innerHTML += bioContent.charAt(currentIndex);
      currentIndex++;
      setTimeout(typeWriter, 50);
    }
  }

  if (bioText) {
    typeWriter();
  }
});






