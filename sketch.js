var i = 0; //for controlling scnes
let cracks = []; //for creating cracks (scene #1)
let shapes = []; //for creating shapes (scene #2)
let egg; //for creating egg (scene #3)

function setup () {
  createCanvas (displayWidth, displayHeight);
  background (142, 163, 180); //background closer to gray in the beginning
  egg = new Egg(); //create new egg
}

function draw () {
//scene #1
  if (i < 6) {
    for (let a = cracks.length - 1; a >= 0; a--) { //update and show cracks
      cracks[a].update();
      cracks[a].show();
    }
  }
//scene #2
  else if (i == 6) {
    background (154, 206, 235); //reset background
    if (shapes.length < 5) {
        shapes.push(new Shape()); //create 5 shapes using shape class, pushing new shapes into shapes array until 5 shapes are created (new shapes will be created when one dies)
    }
    for (let a = shapes.length - 1; a >= 0; a--) { //update and show shapes (going backwards to ensure no shapes are skipped)
      shapes[a].update();
      shapes[a].show();
      for (let b = a - 1; b >= 0; b--) {
        shapes[a].crash(shapes[b]); //change velocity when shapes "crash"
      }
      if (shapes[a].alive == false) { //check if shapes are dead
        shapes.splice(a, 1); //remove shape from shapes array if dead
      }
    }
  }
//scene #3
  else if (i == 7) {
    background (154, 206, 235); //reset background
    fill (150, 205, 124); //green for grass
    noStroke ();
    rect (0, displayHeight-100, displayWidth, 100); //grass
    egg.update();
    egg.show();
  }
}

function mouseClicked () { //for scene #1
  if (i < 6) { //screen cracks 5 times, each on mouse click
    background (154, 206, 235, 51); //layer background to make previous crack fade
    let crack = new Crack(mouseX, mouseY); //create new crack on mouse click at (mouseX, mouseY)
    cracks.push(crack); //add new crack into cracks array
    i++; //on 6th, switches to scene #2
  }
  else if (i == 6) { //switch to scene #3
    i++;
  }
}