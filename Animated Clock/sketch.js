function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(200,200);
  rotate(-90);
  
  let hr = hour();
  let min = minute();
  let sec = second();
  
  
  strokeWeight(8);
  noFill();
  
  stroke(255,100,150);
  let secArc = map(sec,0,60,0,360);
  arc(0,0,300,300,0,secArc);
 
  stroke(2,150,255);
  let minArc = map(min,0,60,0,360);
  arc(0,0,280,280,0,minArc);
  
  stroke(250,255,100);
  let hrArc = map(hr%12,0,12,0,360);
  arc(0,0,260,260,0,hrArc);
  
  
   
  push();
  rotate(secArc);
  stroke(255,100,150);
  line(0,0,100,0);
  pop();
  
  push();
  rotate(minArc);
  stroke(100,150,255);
  line(0,0,100,0);
  pop();
  
  push();
  rotate(hrArc);
  stroke(250,255,100);
  line(0,0,100,0);
  pop();
  
  
  // strokeWeight(4);
  // stroke(255);
  // noFill();
  // ellipse(200,200,300,300);
  
  
  
 
  // fill(255);
  // noStroke();
  // text(hr+':'+min+':'+sec,10,200);
}


