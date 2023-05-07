const skyline = [5, 7, 5, 4, 5, 9, 5, 4, 5, 7, 5]; // heights of the buildings

function drawSkyline(context, skyline) {
  const width = context.canvas.width / skyline.length;
  const height = context.canvas.height;

  for (let i = 0; i < skyline.length; i++) {
    const buildingHeight = skyline[i] / 10 * height;
    context.fillStyle = `rgba(50, 205, 50, ${Math.random() * 0.8 + 0.2})`; // Change building color and opacity
    context.fillRect(i * width, height - buildingHeight, width, buildingHeight);

    // Add window lights
    context.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.8 + 0.2})`; // Change window light color and opacity
    const windowSize = 4;
    for (let j = 0; j < buildingHeight; j += windowSize * 2) {
      for (let k = 0; k < width; k += windowSize * 2) {
        if (Math.random() < 0.5) {
          context.fillRect(i * width + k, height - buildingHeight + j, windowSize, windowSize);
        }
      }
    }
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const canvas = document.querySelector('#skyline-canvas');
  
  if (canvas) {
    const context = canvas.getContext('2d');
  
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight * 0.2; // adjust this to fit your design
  
    drawSkyline(context, skyline);
  }
});
