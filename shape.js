
class Shape {
	constructor() {
		this.side = 100
		this.position = createVector(random (0,displayWidth), random (0,displayHeight-this.side));
		this.velocity = createVector(random (-5,5), random (-5,5));
		this.opacity = 255;
	}
	show() {
		fill(0, 100, 200, this.opacity);
		stroke (0, 100, 200, this.opacity);
		rect (this.position.x, this.position.y, this.side,this.side);
	}
	update() {
    	this.position.add(this.velocity);
    	this.checkEdges();
  	}

  	checkEdges() {
	    if (this.position.x > displayWidth-this.side || this.position.x < 0) {
	      this.velocity.x *= -1;
	    }
	    if (this.position.y > displayHeight-this.side || this.position.y < 0) {
	      this.velocity.y *= -1;
	    }
 	}
 	crash(other) {
	    if (this.position.x < other.position.x + other.side && this.position.x + this.side > other.position.x && this.position.y < other.position.y + other.side && this.position.y + this.side > other.position.y) {
	    	console.log ('HIT');
	    	this.velocity.x *= -1;
	    	this.velocity.y *= -1;
	    	other.velocity.x *= -1;
	    	other.velocity.y *= -1;
	    	this.opacity -= 51;
	    	other.opacity -= 51;
	    }
  	}
}