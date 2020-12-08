var movingRect,fixedRect,box;
var movingRect2;
function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  movingRect=createSprite(500,200,50,50);
 
  box=createSprite(500,300,20,20)
  box.shapeColor="orange"
  movingRect2=createSprite(600 ,200, 50, 50);
  movingRect2.velocityX=-2;
}

function draw() {
  
  background(255,255,255);  
  movingRect.x=World.mouseX
  movingRect.y=World.mouseY
  if(isTouching(movingRect,box)){
    movingRect.shapeColor="red"
    box.shapeColor="red"
    
  }
  else{
    movingRect.shapeColor="green"
    box.shapeColor="green"
  }
bounceOff(movingRect2,fixedRect)
  drawSprites();
}
function isTouching(object1,object2){
  if(object1.x-object2.x==object1.width/2+object2.width/2 ||
    object2.x-object1.x==object1.width/2+object2.width/2 ||
    object2.y-object1.y==object1.height/2+object2.height/2 ||
    object1.y-object2.y==object1.height/2+object2.height/2){
return true;
  

    }
    else{
      return false;
    }

}
function bounceOff(movingRect,fixedRect){
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 &&
    fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2 )
    {
movingRect.velocityX*=(-1)
fixedRect.velocityX*=(-1)
    }
  if(  fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2 &&
    movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2)
{
  movingRect.velocityY*=(-1)
fixedRect.velocityY*=(-1)
}

}