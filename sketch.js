
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score
var bananaGrp
var obstacleGrp
var survivalTime=0;


function preload(){
  
  
  monkey_running =     loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600)
  monkey=createSprite(30,200,30,30);
  monkey.addAnimation("monk",monkey_running)
  monkey.scale=0.1
ground=createSprite(300,275,900,10);
  ground.velocityX=-4
  bananaGrp=new Group();
    obstacleGrp=new Group();

}


function draw() {
background("white")
  drawSprites();
  
  if (ground.x<ground.width/2){
    
    ground.x=ground.width/2
    monkey.collide(ground)
    monkey.debug=true;
    if(keyDown('space')&& monkey.y>200){
      monkey.velocityY=-7
    }
    monkey.velocityY=monkey.velocityY+0.5
  }
  createBanannas();
  createobstacles();
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survivalTime:"+survivalTime,270,30);
  
}
function createBanannas(){
  if(World.frameCount%70===0){
    banana=createSprite(600,Math.round(random(120, 200)));
    banana.addImage(bananaImage)
    banana.velocityX=-2;
    banana.scale=0.1;
    banana.lifetime=350;
    bananaGrp.add(banana)
  }
  
}


function createobstacles(){
  if(World.frameCount%100===0){
   obstacle=createSprite(Math.round(random(30,400)),255);
   obstacle.addImage(obstaceImage)
   obstacle.velocityX=-2;
    obstacle.scale=0.1;
    obstacle.lifetime=350;
    obstacleGrp.add(obstacle)
  }
  
}




