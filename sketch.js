var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloud, cloudsGroup, cloudImage;
var cactus, cactusGroup, c1, c2, c3, c4, c5, c6;


var newImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");

  c1 = loadImage ("obstacle1.png");
  c2 = loadImage ("obstacle2.png");
  c3 = loadImage ("obstacle3.png");
  c4 = loadImage ("obstacle4.png");
  c5 = loadImage ("obstacle5.png");
  c6 = loadImage ("obstacle6.png");


 
}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  console.log("Hello"+ 5)
  
}

function draw() {
  background(180);
  
  
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  //spawn the clouds
  spawnClouds();
  spawnObstacles();
  
  drawSprites();
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10,60))
    cloud.scale = 0.4;
    cloud.velocityX = -3;
    
    
    //assigning lifetime to the variable, time= distance/speed
    cloud.lifetime = 210
    
    //adjust the depth
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;
  }
}
    function spawnObstacles (){
      if (frameCount % 80 === 0){ 
        cactus = createSprite(605,165,20,20);
        cactus.velocityX = -6;
        r= Math.round(random(1,6))
  
        switch(r) {
case 1: cactus.addImage(c1)
break;
case 2: cactus.addImage (c2)
break;
case 3: cactus.addImage (c3)
break;
case 4: cactus.addImage (c4)
break;
case 5: cactus.addImage (c5)
break;
case 6: cactus.addImage(c6)
break;
default:break;
}
cactus.scale = 0.5
cactus.lifetime = 105
      }

    }


    


