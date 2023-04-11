document.addEventListener("DOMContentLoaded", function () {
  const bioText = document.getElementById("bio-text");
  const bioContent = `Welcome to Level 1: Suzy's Galactic Groove Odyssey! In a world where the rhythm of the universe is at stake, our hero, Suzy Easton, embarks on an epic quest through the cosmic soundscapes. 
  Born during the early 80s in Vancouver, Suzy was raised on a diverse diet of soul, jazz, classical, and rock music. Excelling in Olympic swimming, she discovered her true calling was to dive into the depths of the musical multiverse. Suzy's journey begins on her home turf, where she must first conquer the local rock show scene. 
  With each triumph, she gains new skills and powers to help her face the challenges that lie ahead. 
  Will Suzy restore harmony to the galaxy and become the ultimate Groove Guardian? 
  Press START and join Suzy on a thrilling adventure filled with growth, discovery, and high-fidelity action!`;

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






