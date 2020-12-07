var bullet,wall,thickness;
var speed,weight;

function setup() {
  createCanvas(1600,400);
 
 speed=random(223,321);
 weight=random(30,52);                   
 thickness=random(22,83);

 bullet= createSprite(50, 200, 50, 5);
 bullet.velocityX=speed;

 wall=createSprite(1200,200,thickness,height/2)
 wall.shapeColor=(80,80,80);

 
}

function collided(bullet,wall){

  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;

  if(bulletRightEdge>=wallLeftEdge)
  {
     return true;
  }
     return false;
}

function draw() {
  background("black"); 
 
  if(collided(bullet,wall)){
bullet.velocityX=0
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)

if(damage>10){

  wall.shapeColor="red";

}

if(damage<10){

  wall.shapeColor="green";

}
  }
 
  drawSprites();
}