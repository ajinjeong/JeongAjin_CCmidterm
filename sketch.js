//todo:
//decreasing opacity of lines (set alpha value as variable -> decrease with for-loop)
//animate lines (from center)
//make shapes
//move shapes down (change to create shape & decrease y values of vertices (even i values in an array of vertices))
//new scene: 
//choose blue shades

let i = 0;
let opacity = newArray ();

function setup() {
  createCanvas (displayWidth, displayHeight);
  background (154, 206, 235);
}

function draw() {
  if (i >= 6) {
    background (154, 206, 235);
  }
}

function mouseClicked () {
  //variables for top crack
  let crackx0 = random(0,displayWidth);
  let crackx1 = random(0,displayWidth);
  let crackx2 = random(0,displayWidth);
  let cracktop = (mouseY/3);
  //variables for bottom crack
  let crackx3 = random(0,displayWidth);
  let crackx4 = random(0,displayWidth);
  let crackx5 = random(0,displayWidth);
  let crackbottom = ((displayHeight-mouseY)/3);
  //variables for left crack
  let cracky0 = random(0,displayHeight);
  let cracky1 = random(0,displayHeight);
  let cracky2 = random(0,displayHeight);
  let crackleft = (mouseX/3);
  //variables for right crack
  let cracky3 = random(0,displayHeight);
  let cracky4 = random(0,displayHeight);
  let cracky5 = random(0,displayHeight);
  let crackright = ((displayWidth-mouseX)/3);

  //controlling opacity
  // for (let i = x.length - 1; i > 0; i--) {
  //   x[i] = x[i - 1];
  // }

  if (i < 6) { //draw 4 cracks on mouse click
  drawCrack (crackx0, 0, crackx1, cracktop, crackx2, 2*cracktop); //top crack
  drawCrack (crackx3, displayHeight, crackx4, displayHeight-crackbottom, crackx5, displayHeight-2*crackbottom); //bottom crack
  drawCrack (0, cracky0, crackleft, cracky1, 2*crackleft, cracky2); //left crack
  drawCrack (displayWidth, cracky3, displayWidth-crackright, cracky4, displayWidth-2*crackright, cracky5); //right crack
  i++;
  }
}

//individual crack
function drawCrack (cracka, cracky, crackb, cracky2, crackc, cracky3) {
  stroke (0, 100, 200);
  strokeWeight (5);
  line (cracka, cracky, crackb, cracky2); //crack closer to edge
  line (crackb, cracky2, crackc, cracky3); //middle crack
  line (crackc, cracky3, mouseX, mouseY); //crack closer to mouse click
}

//drawing shape
function mousePressed () {
  strokeWeight (5);
  beginShape ();
  vertex (mouseX, mouseY);
  endShape ();
}