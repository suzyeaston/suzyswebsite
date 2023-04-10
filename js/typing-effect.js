document.addEventListener("DOMContentLoaded", function () {
  const bioText = document.getElementById("bio-text");
  const bioContent =
    "Welcome to Level 1: The Origin of Suzy's Epic Journey

From Vancouver, BC, during the early 80s, a new person came into existence. Suzy Easton, our protagonist, dedicated her early years to competitve swimming, with dreams of olympic triumph...  

However, when she turned 14, Suzy realized that her competitive swimming days were numbered. 
Ready for a new challenge, she traded her swim cap for a guitar pick. 
Little did she know that this was only the beginning of an incredible journey that would take her across Canada, from music to IT, 
  and eventually lead her back home to Metro Vancouver, in Burnaby, recording music and making video games...

Join Suzy as she navigates through the levels of life, building an extraordinary story of personal growth, adventure, and self-discovery. Will she find her ultimate quest? Press START to begin the adventure.";
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
