var wall;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  speed=random(223,231)
  weight=random(30,52)
  thickness=random(22,83)

  bullet=createSprite(50,200,50,5)
  bullet.velocityX=speed;
  bullet.shapeColor=color(255);

  wall=createSprite(1500,200,thickness,height/2);
  wall.shapeColor=color(80,80,80)
}

function draw() {
  background(0); 
 if(wall.x-bulletx<(bulletwidth+wall.width)/2)
{
  bulletvelocity.x=0
  var deformation=0.5*weight*speed*speed/22509;
  if(deformation>180)
{
  bullet.shapeColor=color(255,0,0);
}
if(deformation<180&&deformation>100)
{
  bullet.shapeColor=color(230,230,0);
}
if(deformation<100)
{
  bullet.shapeColor=color(0,255,0);
}




function hasCollided(Lbullet,Lwall){


  bulletRightEdge=lbullet.x+bullet.width;
  wallLeftEdge=lwall.x
  if(bulletRightEdge>=wallLeftEdge)

{
  return true
}
return false;
}




drawSprites();
}
}