var i = 0; //for controlling scnes
let cracks = []; //for creating cracks (scene #1)
let shapes = []; //for creating shapes (scene #2)

function setup () {
  createCanvas (displayWidth, displayHeight);
  background (154, 206, 235);
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
        shapes.push(new Shape()); //create 5 shapes using shape class, pushing new shapes into shapes array until 5 shapes are created
    }
    for (let a = shapes.length - 1; a >= 0; a--) { //update and show shapes (going backwards to ensure no shapes are skipped)
      shapes[a].update();
      shapes[a].show();
      for (let b = a - 1; b >= 0; b--) {
        shapes[a].crash(shapes[b]); //change velocity when shapes "crash"
      }
      if (shapes[a].alive == false) { //check if shapes are dead (transparent)
        shapes.splice(a, 1); //remove shape from array if dead
      }
    }
  }
// //scene #3
//   else if (i == 7) {
//     background (255);
//   }
}

function mouseClicked () {
  if (i < 6) { //draw 4 cracks, each on mouse click
    background (154, 206, 235, 51); //layer background to make previous crack more transparent
    let crack = new Crack(mouseX, mouseY); //create new crack on mouse click at (mouseX, mouseY)
    cracks.push(crack); //add new crack into cracks array
    i++;
  }
  // else if (i == 6) {
  //   i++;
  // }
}