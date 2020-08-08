canvas = document.getElementById("canvas");
c = canvas.getContext("2d");

step = 10;
x = y = 0;

function draw() {
	c.beginPath();
  if (Math.random() < 0.5) {
    c.moveTo(0, 0);
    c.lineTo(step, step);
  } else {
    c.moveTo(step, 0);
    c.lineTo(0, step);
  }
  c.strokeStyle = `rgb(255,255,255)`;
  c.stroke();
  if (x < canvas.width) {
    c.translate(step, 0);
    x += step;
  } else {
    c.translate(-canvas.width, step);
    x = 0;
    y += step;
  }
  if (y > canvas.height) {
    clearTimeout(up);
    x = y = 0;
    c.setTransform(1,0,0,1,0,0);
    c.clearRect(0,0,canvas.height,canvas.width);
    update();
  }
}

function update() {
    canvas.width = window.innerWidth - (window.innerWidth % 10);
    canvas.height = 324;
    up = setInterval(draw, 10);
}

console.error('a')
update();