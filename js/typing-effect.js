document.addEventListener("DOMContentLoaded", function () {
  const bioText = document.getElementById("bio-text");
  const bioContent =
    "A long time ago, in Vancouver, BC...";
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
