console.log("Trying to load:", pauly.src);

pauly.onload = function() {
  console.log("Image loaded!");
  ctx.drawImage(pauly, paulyX, paulyY);
};
