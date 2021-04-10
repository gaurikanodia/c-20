function setup() {
  createCanvas(800,400);
  fixedSprite=createSprite(400, 200, 100, 50);
  fixedSprite.shapeColor="red";

  movingSprite=createSprite(200,200,40,80);
  movingSprite.shapeColor="red";
}

function draw() {
  background(0);
  
  movingSprite.x=mouseX;
  movingSprite.y=mouseY;
console.log(movingSprite.x-fixedSprite.x)

if(movingSprite.x-fixedSprite.x <= movingSprite.width/2 + fixedSprite.width/2 &&
  fixedSprite.x-movingSprite.x <= movingSprite.width/2 + fixedSprite.width/2)
{
  fixedSprite.shapeColor="green";
  movingSprite.shapeColor="green";
}

else {

  fixedSprite.shapeColor="red";
  movingSprite.shapeColor="red";
}

  drawSprites();
}