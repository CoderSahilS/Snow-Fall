var snowman, snowball, snowmanImg, snowballImg;

function preload(){
snowImg = loadImage("snow1.jpg");
snowballImg = loadImage("snow4.webp");
snowmanImg = loadImage("snowman.png");
}

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  
  //Creating Snowman
  snowman = createSprite(575,300,50,50);
  snowman.addImage("snow", snowmanImg);
  snowman.scale = 0.1;
}

function draw() {
  background(snowImg); 
  
  if(keyDown("space")){
    snowman.velocityY = -2;
  }

  //add gravity
  snowman.y = snowman.y +0.8;

  drawSprites();
}