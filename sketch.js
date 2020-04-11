
var r = 0;
var o = 70;
var g=265;


function setup(){

  createCanvas(1300,500);
}


function draw(){
  r=map(mouseX,0,1300,0,265);
  o =map(mouseX,60,800,60,150);
  g= map(mouseX,0,1300,265,0);
  background(r,o,g);
  fill(355);
  ellipse(mouseX,200,60,6ss0);
}