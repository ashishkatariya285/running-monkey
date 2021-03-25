var PLAY=1;
var END=0;
var gameState=1;

var monkey , monkey_running
var banana ,bananaImage, Obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
 obstacleImage=loadImage("obstacle.png")
  
 
}



function setup() {
  createCanvas(400,400);
  monkey=createSprite(20,300,20,20);
monkey.addAnimation("monkey",monkey_running);
  monkey.scale=0.1;
  
 ground= createSprite(0,340,1200,20);
  ground.x=ground.width/2;
  ground.velocityX=-4;
  console.log(ground.x)
  bananaGroup=new Group();
  ObstacleGroup=new Group();
}
function draw() {


  background("lightgreen");


  textSize(20);
  text("score:"+ score,0,40)
  if(bananaGroup.isTouching(monkey)){
    score=score+1;
    bananaGroup.destroyEach();
  }
  if(gameState===PLAY){ 
     
  if(keyDown("space") && monkey.y>=100){
    monkey.velocityY=-13;
   
  } 
    if(gameState===END){
      text("gameover",0,200)
      textSize(50);
      ground.velocityX=0;
      bananaroupG.velocityX=0   
    }
     monkey.velocityY=monkey.velocityY +0.8;
  
  }
 if(ObstacleGroup.isTouching(monkey)){
   gameState=END;
   ObstacleGroup.destroyEach(); 
   ground.velocityX=0
 }
  if(ground.x<300){
    ground.x=300;
  }
spawnfruits();
   spawnObstacle();
  monkey.collide(ground);
  drawSprites();
  
}
function spawnfruits(){
  if(frameCount%80===0){  
  
  banana=createSprite(0,200,20,20);
  banana.x=Math.round(random(60,320));
  banana.addImage(bananaImage);
  banana.scale=0.09;
    banana.velocityX=-4;
    bananaGroup.add(banana)
}
}
function spawnObstacle(){
  if(frameCount%100===0){
    
    Obstacle=createSprite(100,310,40);
    Obstacle.x=Math.round(random(100,190));
    Obstacle.addImage(obstacleImage);
    Obstacle.scale=0.09;
     Obstacle.velocityX=ground.velocityX;
    ObstacleGroup.add(Obstacle);
  } 
    
  
  
  
  
  
}



