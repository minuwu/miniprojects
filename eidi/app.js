const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const sz = 621;
const image = new Image(sz, sz);
const name = prompt("my pronouns - single & sad, my noun is - (enter your name)").trim();

image.onload = drawImageActualSize;
image.src = "images/image.jpg";
function drawImageActualSize() {
  canvas.width = this.naturalWidth;
  canvas.height = this.naturalHeight;
  ctx.drawImage(this, 0, 0, this.width, this.height);

  ctx.font = "italic 35px monospace";
  ctx.fontStretch = "semi-expanded";
  ctx.fontVariantCaps = "all-petite-caps";
  ctx.wordSpacing = "5px";
  ctx.fillStyle = "brown";
  
  ctx.shadowBlur = 8;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  ctx.shadowBlur = 1;
  ctx.shadowColor = "rgb(255 169 0 / 100%)";
  let x = 262 ;
  let y = 179 ;
  ctx.fillText(`${name}`,x , y);
  ctx.strokeText(`${name}`, x, y);
}
