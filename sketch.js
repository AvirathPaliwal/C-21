var fixedRect, movingRect;
var box2,box1

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  box1=createSprite(200,300,100,100);
  box2=createSprite(400,300,100,100);
  box1.velocityX = +5;
  box2.velocityX = -5;
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

 
  drawSprites();
bouncoff(fixedRect,movingRect)
bouncoff(box1,box2)


}
