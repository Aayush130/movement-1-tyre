let angle = 0;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);  
}

function draw() {
  background(255);  
  
  translate(width / 2, height / 2);  
  rotate(angle); 
   
  
  stroke(0);
  strokeWeight(10);
  fill(80);  
  ellipse(0, 0, 200, 200);  // Outer circle representing the tire
  
 
  fill(100);
  ellipse(0, 0, 80, 80);  // for disc brake 
  
  
  stroke(255);  // rim
  strokeWeight(3);
  for (let i = 0; i < 360; i += 45) {
    line(0, 0, cos(i) * 100, sin(i) * 100);  // rim rotating with the tire
  }
  

  angle += 4; 
}
