const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'black';
ctx.fillRect(0, 0, canvas.width, canvas.height);

const pauly = new Image();
pauly.src = 'assets/images/IMG_1566.png';

let paulyX = 50;
let paulyY = 50;

pauly.onload = function() {
  ctx.drawImage(pauly, paulyX, paulyY);
};
