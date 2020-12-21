var bullet, wall, thickness; 
var speed, weight;

function setup() {
  createCanvas(1000,1000);
  
  thickness=random(22,83);
  
  weight=random(30,52);
  
  speed=random(223,321)

  bullet=createSprite(50,200,30,20);
  bullet.velocityX=speed;
  
  wall=createSprite(800,200,thickness,height/2);
  wall.shapeColor="purple";
} 

function draw() {
  background(255,255,255);  
 
if (hasCollided(bullet,wall)){
  var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);
  bullet.velocityX=0;
  if (damage>10){
    wall.shapeColor=color(255,0,0);
  }

  if (damage<10){
    wall.shapeColor=color(0,255,0);
  }

}

console.log(bullet.velocityX);

 drawSprites();
}

function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x + lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}