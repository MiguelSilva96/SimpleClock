
function setup() {	
	createCanvas(400, 400);
	frameRate(5);
}


function draw() {
	background(30, 30, 40);

	//adjust coordinate system to center
	translate(200, 200);
	//0º at the top
	rotate(-PI/2);

	drawHours();

	let hr  = hour();
	let min = minute();
	let sec = second();

	let angleSecs = PI/30 * sec;
	let angleMins = PI/30 * min;
	let angleHour = PI/6  * hr;
	
	//to move hour pointer between exact hours
	angleHour += PI/6 * min/60;

	//Second counter
	strokeWeight(4);
	stroke(12, 143, 213);
	noFill();
	arc(0, 0, 300, 300, 0, angleSecs);

	//Minute pointer
	push();
	rotate(angleMins);
	stroke(155, 50, 50);
	line(0, 0, 100, 0);
	pop();

	//Hour pointer
	push();
	rotate(angleHour);
	stroke(232, 123, 50);
	line(0, 0, 90, 0);
	pop();

}

function drawHours() {
		let angle = PI/6;
		strokeWeight(4);
		stroke(12, 143, 120);
		for(var i = 1; i < 13; i++) {
			push();
			rotate(angle * i);
			line(0, 120, 0, 130);
			pop();
		}
}