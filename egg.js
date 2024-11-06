class Egg{
  constructor(){
    this.position = createVector(displayWidth/2, displayHeight/2); //position of egg (center of display)
    this.velocity = createVector(); //velocity of egg (set up to be updated later)
    this.acceleration = createVector(); //acceleration of egg (set up to be updated later)
    this.pump = -5; //pump for when mouse gets close (negative because pump = moves up = lower y)
    this.gravity = 0.2; //gravity/fall of egg (positive because fall = moves down = higher y)
    this.cracked = false;
  }
  update() {
    if (this.cracked == false) { //if not egg is not cracked
      let mouse = createVector(mouseX, mouseY); //position of mouse
      let between = mouse.sub(this.position); //subtract the positon of egg from the position of the mouse, getting the vector between the two
      let distance = between.mag(); //get the magnitude of the "between" vector (the magnitude/length of the vector between egg and mouse)
      if (distance < 100) { //if mouse gets close to egg (if length of vector between the two is less than 100)
        between.setMag(this.pump); //set the magnitude of the vector between egg and mouse to equal the pump
      } else { //if egg is too far (length of vector between the two is greater than 100)
        between.setMag(0); //set the magnitude of the vector between egg and mouse to equal 0 (no pump)
      }
      this.acceleration = between; //set the acceleration vector to be the between vector as determined above
      this.acceleration.y += this.gravity; //add gravity to y acceleration for fall
      this.velocity.add(this.acceleration); //add the fall & pump (between vector) to the velocity vector
      this.velocity.limit(3); //limit the maximum speed of egg for more control
      this.position.add(this.velocity); //add the velocity vector to get the position of the egg
      if (this.position.y >= displayHeight-145 || this.position.y <= 45 || this.position.x >= displayWidth -45 || this.position.x <= 45) { //if the egg touches the sides of the display
        this.cracked = true;
      }
    }
  }
  show() {
    if (this.cracked == false) { //if egg is not cracked
      stroke(255, 195, 0);
      strokeWeight(5);
      fill(255, 225, 128);
      ellipse(this.position.x, this.position.y, 90, 90); //draw egg at position determined above
    }
    else if (this.cracked == true) { //if egg is cracked
      stroke(255, 195, 0);
      strokeWeight(5);
      fill(255, 225, 128);
      ellipse(this.position.x, this.position.y, 90, 90); //draw egg at position determined above
      //cracks
      line(this.position.x,this.position.y-45, this.position.x-10,this.position.y-15);
      line(this.position.x-10,this.position.y-15, this.position.x+10,this.position.y+10);
      line(this.position.x+10,this.position.y+10, this.position.x,this.position.y+45);
      if (this.position.y<displayHeight-145) { //if egg is not on the grass
          this.position.y *= 1.5; //make the egg fall down onto the grass fast
      }
      else { //if/when egg is on grass
        this.position.y = displayHeight-145; //leave the egg on the grass
      }
    }
  }
}
