const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Fill the canvas black (optional, it's already black by default)
ctx.fillStyle = 'black';
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Draw a green box — test object
ctx.fillStyle = 'lime';
ctx.fillRect(50, 50, 100, 100);

// Add a quick text label
ctx.fillStyle = 'white';
ctx.font = '20px Arial';
ctx.fillText('Weaselwood Test', 60, 180);
