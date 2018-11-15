function setup() {

 createCanvas(170,170);
 fill(255,0,0);
 noStroke();
 ellipse(70, 60, 60, 60);
 rect(85, 60, 35, 35);
 triangle(48, 80, 85, 125, 85, 85);
 
 beginShape();
vertex(85, 60);
bezierVertex(150, -20, 180, 85, 110, 115);
endShape();

 arc(85, 85, 80, 80, 0, PI-HALF_PI, PIE);

}

function draw() {
  
}
