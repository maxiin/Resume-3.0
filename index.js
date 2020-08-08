canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");

step = 10;
x = y = 0;

// 10print.org
// 10 PRINT CHR$(205.5+RND(1)); : GOTO 10
function draw() {
	ctx.beginPath();
  if (Math.random() < 0.5) {
    ctx.moveTo(0, 0);
    ctx.lineTo(step, step);
  } else {
    ctx.moveTo(step, 0);
    ctx.lineTo(0, step);
  }
  ctx.strokeStyle = `white`;
  ctx.stroke();
  if (x < canvas.width) {
    ctx.translate(step, 0);
    x += step;
  } else {
    ctx.translate(-canvas.width, step);
    x = 0;
    y += step;
  }
  if (y > canvas.height) {
    clearTimeout(up);
    x = y = 0;
    ctx.setTransform(1,0,0,1,0,0);
    ctx.clearRect(0,0,canvas.height,canvas.width);
    start();
  }
}

function start() {
    canvas.width = window.innerWidth - (window.innerWidth % 10);
    canvas.height = 324;
    up = setInterval(draw, 10);
}

console.error('a')
start();