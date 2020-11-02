var car,wall;
var speed ,weight;

function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(50,200,50,50);
  /*Create a Wall which is half the height of the canvas and whose width is 60 pixels
Keep this Wall at 1500 pixels distance from the left edge of the canvas.
Set the color of the Wall to color (80,80,80)*/
  wall=createSprite(1500,200,60,height/2);
 /* Assign the velocityX property of the car sprite to the speed variable.
This should make the car sprite move towards the wall.*/
car.velocityX=speed;
}

function draw() {
  background(255,255,255);
  
  if(car.isTouching(wall)){
car.velocityX=0;
  }

  if(wall.x -car.x<(car.width+wall.width)/2){
car.velocityX=0;
var deformation = 0.5 *weight*speed*speed/22500 ;
if(deformation>180){
car.shapeColor=color(255,0,0);w
}

if(deformation<180 && deformation>100){
car.shapeColor=color(230,230,0);
}

  if(deformation<100){
car.shapeColor=color(0,255,0);
  }
  }           
  drawSprites();
}