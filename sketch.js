var color ; 

function setup() {
  createCanvas(530,530);
}
function draw() {
  if (World.mouseX >255) {
    color = World.mouseX - 255;
  }
  else{
    color = World.mouseX;
  }
  background(color,350,350);  
}
