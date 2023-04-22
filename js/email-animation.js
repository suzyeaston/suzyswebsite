document.addEventListener("DOMContentLoaded", function () {
  const email = document.getElementById("contact-email");

  if (!email) {
    return;
  }

  function animateEmail() {
    email.style.transition = "opacity 1s";
    email.style.opacity = "1";
    // Add racing car animation code here
  }

  function simulateF1CarDrive() {
    setTimeout(animateEmail, 1500);
  }

  simulateF1CarDrive();
});
