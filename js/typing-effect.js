document.addEventListener("DOMContentLoaded", function () {
  const bioText = document.getElementById("bio-text");
  const bioContent = `Welcome to Level 1: Suzy's Legendary Saga! Born in 80s Vancouver, Suzy Easton, our hero, first pursued Olympic swimming while being influenced by soul, jazz, classical, and rock music. Embracing her musical passion, she began playing rock shows in her hometown.. Press START and begin the adventure of an epic quest with growth, adventure, and self-discovery.`;
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






