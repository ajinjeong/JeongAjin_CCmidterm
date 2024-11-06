class Shape {
	constructor() {
		this.side = 100; //size of shape
		this.position = createVector(random (0,displayWidth), random (0,displayHeight-this.side)); //position of shape (random on display)
		this.velocity = createVector(random (-5,5), random (-5,5)); //velocity of shape (random between -5 and 5)
		this.opacity = 255; //starting opacity
		this.alive = true; //for controlling dead shapes
	}
	show() {
		fill(70, 130, 180, this.opacity);
		noStroke ();
		rect (this.position.x, this.position.y, this.side, this.side);
	}
	update() {
    	this.position.add(this.velocity);
    	this.checkEdges();
    	this.checkAlive();
  	}
  	checkEdges() { //check for touching display edges
	    if (this.position.x > displayWidth-this.side || this.position.x < 0) { //if hits sides of display 
	    	this.velocity.x *= -1; //reverse x velocity
	    }
	    if (this.position.y > displayHeight-this.side || this.position.y < 0) { //if hits top/bottom of display
	    	this.velocity.y *= -1; //reverse y velocity
	    }
 	}
 	crash(other) { //check for crashing into other shapes
	    if (this.position.x < other.position.x + other.side && this.position.x + this.side > other.position.x && this.position.y < other.position.y + other.side && this.position.y + this.side > other.position.y) { //if this shape crashing into other shape
	    	this.velocity.x *= -1; //reverse x velocity of this shape
	    	this.velocity.y *= -1; //reverse y velocity of this shape
	    	other.velocity.x *= -1; //reverse x velocity of other shape
	    	other.velocity.y *= -1; //reverse y velocity of other shape
	    	this.opacity -= 51; //decrease opacity of this shape
	    	other.opacity -= 51; //decrease opacity of other shape
	    }
  	}
  	checkAlive() { //check whether alive (not transparent)
	    if (this.opacity == 0) { //if transparent (opacity == 0)
	    	this.alive = false; //not alive
	    }
  	}
}