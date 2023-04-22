document.addEventListener("DOMContentLoaded", function () {
  const bioText = document.getElementById("bio-text");
  const bioContent = `In the year 2023, Suzy Easton, a single 40-year-old musician from Vancouver, finds herself battling cosmic foes! Once a national touring bassist, Canucks fan, taco lover, and poker enthusiast, Suzy now faces an 80s arcade-style adventure in a universe where harmony is under siege. Can she restore balance to the galaxy, 
  just as the Canucks defied the odds to reach their first-ever Stanley Cup Final in 1982 hahahahaha? Join Suzy's quest against the Galactic Groove Invaders!`;

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






