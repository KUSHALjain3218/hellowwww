var hr,mn,sc;
hr=hour();
mn=minute();
sc=second();

function setup() {
  createCanvas(1000,1000);
  
  
  
}

function draw() {
  background(0,0,0);  
  drawSprites();
  angleMode(DEGREES);
  scAngle=map(sc,0,60,0,360);
  scAngle1=map(mn,0,60,0,360);
  scAngle2=map(hr,0,60,0,360);
  push();
  rotate(scAngle);
  stroke(255,0,0)
  strokeWeight(30);
  line(500,500,100,0);
  pop();
  push();
  rotate(scAngle1);
  stroke(0,0,255)
  strokeWeight(20);
  line(500,500,100,0);
  pop();
  push();
  rotate(scAngle2);
  stroke(0,255,0)
  strokeWeight(10);
  line(500,500,100,0);
  pop();
}