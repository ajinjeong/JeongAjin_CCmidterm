//todo:
//1. find way to do both sides (top/bottom (input different arguments))
//2. find way to do the horizontal (left/right (input different arguments OR another function and switch x/y))
//3. decreasing opacity of lines (set alpha value as variable -> decrease with for-loop)
//4. animate lines (from center)
//5. make shapes
//6. move shapes down (change to create shape & decrease y values of vertices (even i values in an array of vertices))
//7. new scene: 
//8. choose blue shades

function setup() {
  createCanvas (displayWidth, displayHeight);
  background (154, 206, 235);
}

function draw() {
  
}

function mouseClicked () {
  let crack0x = random(0,displayWidth);
  let crack1x = random(0,displayWidth);
  let crack2x = random(0,displayWidth);
  let cracktop = (mouseY/3);
  drawCrack (crack0x, crack1x, crack2x, cracktop);
  
}

function drawCrack (crack0, crack1, crack2, crackxy) {
  stroke (0, 100, 200);
  strokeWeight (10);
  line (crack0, 0, crack1, crackxy);
  line (crack1, crackxy, crack2, 2*crackxy);
  line (crack2, 2*crackxy, mouseX, mouseY);
}