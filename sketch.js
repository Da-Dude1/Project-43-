var player, ground


function setup() {
  createCanvas(800,400);
  ground= createSprite(400,390,800,20)
  player=createSprite(20, 350, 20, 50);
  
}

function draw() {
  background(255,255,255);  
  drawSprites();
}