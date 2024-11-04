class Crack {
	constructor (mouseX, mouseY){
	   	this.startPoint = [mouseX, mouseY]; //crack center (mouseX, mouseY) at the time of the click
	    this.abovepoints = [ //points for crack above crack center
	    	[random(0, displayWidth), 2*(mouseY/3)], //first above point
	    	[random(0, displayWidth), mouseY/3], //second above point
	    	[random(0, displayWidth), 0], //third above point
	    ];
		this.belowpoints = [ //points for crack below crack center
	    	[random(0, displayWidth), (mouseY + (displayHeight - mouseY)/3)], //first below point
	    	[random(0, displayWidth), (mouseY + 2*(displayHeight - mouseY)/3)], //second below point
	    	[random(0, displayWidth), displayHeight], //third below point
	    ];
	    this.leftpoints = [ //points for crack to the left of crack center
	    	[2*(mouseX/3), random(0, displayHeight)], //first left point
	    	[mouseX/3, random(0, displayHeight)], //second left point
	    	[0, random(0, displayHeight)], //third left point
	    ];
	    this.rightpoints = [ //points for crack to the right of crack center
	    	[(mouseX + (displayWidth - mouseX)/3), random(0, displayHeight)], //first right point
	    	[(mouseX + 2*(displayWidth - mouseX)/3), random(0, displayHeight)], //second right point
	    	[displayWidth, random(0, displayHeight)], //third right point
	    ];
	    this.progress = 0; //for drawing animation affect
	    this.currentlineindex = 0; //for controlling first/second/third crack segment
	}
	update() {
	    if (this.currentlineindex < 3) {
	    	this.progress += 0.01; //increase crack segment drawing progress by 1%
	    }
  	}
  	show() {
	  	stroke(0, 100, 200);
	    strokeWeight(5);
		this.drawCrack(this.abovepoints, this.progress); //draw crack above crack center
	    this.drawCrack(this.belowpoints, this.progress); //draw crack below crack center
	    this.drawCrack(this.leftpoints, this.progress); //draw crack to the left of crack center
	    this.drawCrack(this.rightpoints, this.progress); //draw crack to the right of crack center

	    // noStroke();
	    // fill(100, 0, 0, 100);
	    // let [bx,by] = this.startPoint;
	    // ellipse(bx, by, this.bruisesize, this.bruisesize);
	}
	drawCrack(points, progress) { //function for drawing crack
	    let [x, y] = this.startPoint; //crack center
	    if (this.currentlineindex < 3) {
	    	let [x1, y1] = points[0]; //first (closest to the crack center) point
	    	let [x2, y2] = points[1]; //second (middle) point
	    	let [x3, y3] = points[2]; //third (farthest from crack center) point
	    	//first (closest to the crack center) crack segment
	    	if (this.currentlineindex == 0) {
	    		let currentX = lerp(x, x1, progress); //linear interpolation, parameters are two values and the progress between the two values
	    		let currentY = lerp(y, y1, progress);
	    		line(x, y, currentX, currentY); //crack segment between crack center and first point
	    	}
	    	//second (middle) crack segment
	    	else if (this.currentlineindex == 1) {
	    		let current1X = lerp(x1, x2, progress);
	    		let current1Y = lerp(y1, y2, progress);
	    		line(x1, y1, current1X, current1Y); //crack segment between first point and second point
	    	}
	    	//third (farthest) crack segment
	    	else if (this.currentlineindex == 2) {
	    		let current2X = lerp(x2, x3, progress);
	    		let current2Y = lerp(y2, y3, progress);
	    		line(x2, y2, current2X, current2Y); //crack segment between second point and third point
	    	}
	    	//for controlling sequence of crack segment animation
		    if (progress >= 1) { //when one crack segment finishes
		        this.currentlineindex++; //draw next crack segment
		        this.progress = 0; //reset progress of crack segment drawing
		    }
		}
	}
}