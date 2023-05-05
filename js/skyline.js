const skyline = [5, 7, 5, 4, 5, 9, 5, 4, 5, 7, 5]; // heights of the buildings

function drawSkyline(context, skyline) {
  const width = context.canvas.width / skyline.length;
  const height = context.canvas.height;

  let gradient = context.createLinearGradient(0, 0, 0, height);
  gradient.addColorStop(0, '#00FF00');
  gradient.addColorStop(1, '#000');
  context.fillStyle = gradient;

  for (let i = 0; i < skyline.length; i++) {
    const buildingHeight = skyline[i] / 10 * height;
    context.fillRect(i * width, height - buildingHeight, width, buildingHeight);
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
