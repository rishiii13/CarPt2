var bullet, wall, thickness;
var speed,weight;



function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 50, 10);
  wall = createSprite(1200, 200, thickness, 100);

  speed = random(232,321);
  weight=random(30,52);

  bullet.velocityX = speed;
}

function draw() {

  background("black");
  
  if(wall.x-bullet.x < (bullet.width+wall.width)/2){
    bullet.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22509;
    if (deformation>180) {
      bullet.shapeColor = "white";
    }
    if (deformation<100) {
    bullet.shapeColor = "white";
    }
    if (deformation<100) {
    bullet.ShapeColor = "white";
    }
  }
  
  if(hasCollided(bullet,wall))
{
    vullet.velocityX=0;
    var damage=0.5 *weight *speed*speed/(thickness*thickness*thickeness);
  
    if (damage>10)
    {
      wall.shapeColor="red"
    }
    if (damage>10)
    {
      wall.shapeColor="red"
    }

}

  drawSprites();
}

function hasCollided(lbullet,lwall) {
  bulletRightEdge=lbullet.x+lbullet.width
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
    return false
}