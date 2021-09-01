var hr, min, sec
var line

function setup() {
  createCanvas(800,400);
  line = createSprite(0,0,100,0);

  angleMode(DEGREES)

  stroke(255,0,0)
  strokeWeight(7)
  line(10,10,100,10)
}

function draw() {
  background(255,255,255);  
  drawSprites();

  hr = hour()
  min = minute()
  sec = second()

  scAngle = map(sec, 0, 60, 0, 360)

}