var doorOpen=0;
var r= new Array(60);
var k=0;
var ballNum=0;
var ballXpos = new Array(60);
var ballYpos = new Array(60);

function setup() 
{
  createCanvas(600,600);  
  for(var i=0; i<30; i++)
  {
  r[i] = random(80);
  }
}

function draw() {
   noStroke();
  fill(65,230,255);
  rect(0,0,600,400); // sky
    fill(255);
    for(var i=0; i<6; i++)
  for(var j=0; j<6; j++)
  {
  ellipse(40+i*130-r[k],0+j*80-r[k],110-j,50-j);
  ellipse(20+i*130-r[k],0+j*80-r[k],40-j,65-j);
  ellipse(40+i*130-r[k],0+j*80-r[k],40-j,80-j);
  ellipse(60+i*130-r[k],0+j*80-r[k],40-j,70-j);
  k++;
  }
  k=0;
  fill(204,204,153);
  rect(0,400,600,200); // bottom



  fill(80,50,50);
  noStroke();
  rect(200,100,20,400); // side door
  rect(200,100,200,20);
  rect(400,100,20,400);

  stroke(0);
  noFill();
  beginShape();
  vertex(215,499);
  vertex(215,115);
  vertex(405,115);
  vertex(405,499);
  endShape();
  strokeWeight(2);
  beginShape();
  vertex(205,499);
  vertex(205,105);
  vertex(415,105);
  vertex(415,499);
  endShape();
  
  if(doorOpen==1)
  {
  strokeWeight(1);
  fill(80,30,30); //inner door
  //noStroke();
  rect(220,120,180,380);
  stroke(0);
  strokeWeight(3);
  fill(60,20,20);
  rect(240,140,140,160);
  rect(240,310,140,40);
  rect(240,360,140,120);
  fill(80,30,30);
  rect(250,150,120,140); //2
  rect(250,320,120,20); //2
  rect(250,370,120,100); //2
  
  fill(80,80,80);
  ellipse(230,330,25,25);
  fill(0);
  ellipse(230,330,10,10);  
  //line(215,100,215,500);
  }
  if(doorOpen==0)
  {
  strokeWeight(1); //side door open
  fill(80,30,30);
  beginShape(QUAD_STRIP); 
  vertex(400,120);
  vertex(400,500);
  vertex(510,90);
  vertex(510,520);
  vertex(520,90);
  vertex(520,520);
  endShape();
  
  strokeWeight(3);
  fill(60,20,20); //inner door open
  beginShape(); 
  vertex(420,140);
  vertex(490,125);
  vertex(490,290);
  vertex(420,295);
  endShape(CLOSE);
  
  beginShape(); 
  vertex(420,305);
  vertex(490,300);
  vertex(490,350);
  vertex(420,350);
  endShape(CLOSE);
  
  beginShape(); 
  vertex(420,360);
  vertex(490,361);
  vertex(490,490);
  vertex(420,480);
  endShape(CLOSE);
  
  fill(80,30,30);
  beginShape();  //2
  vertex(430,150);
  vertex(480,140);
  vertex(480,280);
  vertex(430,285);
  endShape(CLOSE);
  
  beginShape(); 
  vertex(430,315);
  vertex(480,312);
  vertex(480,340);
  vertex(430,340);
  endShape(CLOSE);
  
   beginShape(); 
  vertex(430,370);
  vertex(480,371);
  vertex(480,475);
  vertex(430,470);
  endShape(CLOSE);
  
  ellipse(500,325,10,10);
  }
  fill(125,125,125); //ball
  strokeWeight(1);
  ellipse(100,450,60,60);
  strokeWeight(2);
  line(70,450,130,450);
  
  for(var i=0; i<ballNum; i++)
  {
  fill(125,125,125);
  strokeWeight(1);
  ellipse(ballXpos[i],ballYpos[i],60,60);
  strokeWeight(2);
  line(ballXpos[i]-30,ballYpos[i],ballXpos[i]+30,ballYpos[i]);
  }
  if (mouseIsPressed) {
  if(mouseButton == RIGHT && mouseY>400)
  {
    ballXpos[ballNum] = mouseX;
    ballYpos[ballNum] = mouseY;
    ballNum++;
  
  }
  }
}
function mouseClicked()
{
  if(mouseButton == LEFT)
  {
      if(doorOpen==1) doorOpen =0;
    else doorOpen=1;
  }
  
}
