var cloud;
var birdImg,bird;
var log1,log2,log3,log4;
var edge1,edge2;
var nestImg,nest;


function setup() {
  createCanvas(800,400);

  cloud=loadImage("cloud.jpg");
  birdImg=loadImage("bird.png");
  nestImg=loadImage("nest.png");

  edge1=createSprite(0,0,1600,10);
  edge2=createSprite(0,400,1600,10);

  nest=createSprite(750,200,20.20);
  nest.addImage(nestImg);
  nest.scale=0.3;

  bird=createSprite(50, 200, 50, 50);
  bird.addImage(birdImg);
  bird.scale=0.1;

  log1=createSprite(200,0,20,135);
  log1.velocityY=2;
  log2=createSprite(350,400,20,135);
  log2.velocityY=-2;
  log3=createSprite(500,0,20,135);
  log3.velocityY=2;
  log4=createSprite(650,400,20,135);
  log4.velocityY=-2;

  log1.shapeColor="brown";
  log2.shapeColor="brown";
  log3.shapeColor="brown";
  log4.shapeColor="brown";

}

function draw() {
  background(cloud); 
  createEdgeSprites();

  log1.bounceOff(edge1);
  log1.bounceOff(edge2);  

  log2.bounceOff(edge1);
  log2.bounceOff(edge2);

  log3.bounceOff(edge1);
  log3.bounceOff(edge2);

  log4.bounceOff(edge1);
  log4.bounceOff(edge2);

  if(keyDown("right")){
    bird.x=bird.x+3
   }

   if(keyDown("left")){
    bird.x=bird.x-3
   }

   if(bird.lifetime===0){
    fill("red")
    textSize(50)
    text("GameOver",300,200);
   }

   if(bird.isTouching(nest)){
    fill("red")
    textSize(50)
    text("You Win",300,200);
   }

   end();
  drawSprites();
}
function end(){
  if(bird.isTouching(log1)||bird.isTouching(log2)||bird.isTouching(log3)||bird.isTouching(log4)){

    log1.lifetime=0;
    log2.lifetime=0;
    log3.lifetime=0;
    log4.lifetime=0;
    bird.lifetime=0;
    nest.lifetime=0;
    
  }
  if(bird.isTouching(nest)){
    log1.lifetime=0;
    log2.lifetime=0;
    log3.lifetime=0;
    log4.lifetime=0;
    bird.x=750;
  }
}