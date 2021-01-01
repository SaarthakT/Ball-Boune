var car,wall;

var speed, weight;

function setup() {
  createCanvas(1600,400);
  car=createSprite(50,200,50,50);
  wall=createSprite(1500,200,60, height/2)
  wall.shapeColor=(80,80,80)
  //createSprite(400, 200, 50, 50);
  speed=random(55,90)
  weight=random(400,1500)
}

function draw() {
  background(255,255,255);
  drawSprites();
  

  car.velocityX=speed;
  if(((car.x-wall.x)<(wall.width/2+car.width/2)) && ((wall.x-car.x)<(wall.width/2+car.width/2))){
    car.velocityX= 0
    wall.velocityX= 0
    }
  if((car.y-wall.y)<(wall.height/2+car.height/2) && (wall.y-car.y)<(wall.height/2+car.height/2)){
      car.velocityY= 0
      wall.velocityY= 0
    } 
  if(0.5*weight*speed*speed/22500 < 100){
        car.shapeColor(0,255,0)
      }
  if((0.5*weight*speed*speed/22500 < 180) && ((0.5*weight*speed*speed)/22500) > 100){
        car.shapeColor(230,230,0)        
    }
  if(0.5*weight*speed*speed/22500 > 180 ){
        car.shapeColor=color(255,0,0)};
  }