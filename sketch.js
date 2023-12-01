
var ground, groundImage, player, playerImage, platform, platformGroup, AI, AIImage, arrow, arrowImage
function preload(){
  groundImage = loadImage("../Assets/Images/Ground.png")
  platformImage = loadImage("../Assets/Images/Ground.png")
  playerImage = loadImage("../Assets/Images/Player.png")
  AIImage = loadImage("../Assets/Images/AI.png")
  arrowImage = loadImage("../Assets/Images/Arrow.png")
}

function setup(){
  createCanvas(1490,740);
  ground = createSprite(700,740, 3000, 55)
  ground.addImage(groundImage)
  ground.scale = 10

  player = createSprite(70,40, 20, 25)
  player.addImage(playerImage)
  player.scale = 1.5

  AI = createSprite(740,40, 20, 25)
  AI.addImage(AIImage)
  AI.scale = 1.5

  arrow = createSprite(70,35)

  arrow.position = player.position 
  arrow.addImage(arrowImage)
  arrow.scale = 0.5

  platformGroup = new Group()

  createPlatform()
  createPlatform()
  createPlatform()
  createPlatform()
  createPlatform()
  createPlatform()
  createPlatform()
  createPlatform()
  createPlatform()
  createPlatform()
  createPlatform()
  createPlatform()
  createPlatform()
  createPlatform()
  createPlatform()
  createPlatform()
  createPlatform()
  createPlatform()
  createPlatform()





}


function draw(){
  //set background color 
  background("blue");

  if (keyDown("right_arrow")){
    player.x = player.x + 5
  }


  if (keyDown("up_arrow")){
    player.y = player.y - 10
  }


  if (keyDown("left_arrow")){
    player.x = player.x - 5
  }

  if (keyDown("D")){
    AI.x = AI.x + 5
  }

  if (keyDown("A")){
    AI.x = AI.x - 5
  }

  if (keyDown("w")){
    AI.y = AI.y - 10
  }

  player.collide(ground);
  player.collide(platformGroup);


  





  player.velocityY = player.velocityY + 0.4

  AI.collide(ground);
  AI.collide(platformGroup);

  AI.velocityY = AI.velocityY + 0.4

  drawSprites();

  r()


  
}

function createPlatform(){
  if (frameCount% 100 === 0){
   platform = createSprite(100, 400, 100 ,20)
    platform.y = Math.round(random(1, 740))
    platform.x = Math.round(random(1, 1490))
    platform.addImage(platformImage)

    platformGroup.add(platform)
  }
}


  function r(){
    if (player.collide(AI)){
      arrow.position = AI.position
    }
  
    // else {
     if(AI.collide(player)){
         arrow.position = player.position
       }
     

}