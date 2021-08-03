var astronaut;
var backgroundimg, bg;
var sleep, brush, gym, eat, drink, move, bath;
var edges;

function preload() {
  bg = loadImage("iss.png");
  sleep = loadAnimation("sleep.png");
  brush = loadAnimation("brush.png");
  gym = loadAnimation("gym1.png", "gym2.png");
  eat = loadAnimation("eat1.png", "eat2.png");
  drink = loadAnimation("drink1.png", "drink2.png");
  move = loadAnimation("move.png", "move.png","move1.png","move1.png");
  bath = loadAnimation("bath1.png", "bath2.png");
}

function setup() {
  createCanvas(800, 475);
  backgroundimg = createSprite(400, 175, 50, 50);
  backgroundimg.addImage(bg);
  backgroundimg.scale = 0.2

  astronaut = createSprite(400, 200, 50, 50);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.075

  edges = createEdgeSprites()
}

function draw() {
  background(255, 255, 255)
  astronaut.bounceOff(edges) 
  drawSprites();

  if (keyDown("UP_ARROW")) {
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.x = 600
    astronaut.y = 350
    astronaut.velocityX = 0
    astronaut.velocityY = 0
  }

  if (keyDown("DOWN_ARROW")) {
    astronaut.addAnimation("brushing", gym)
    astronaut.changeAnimation("brushing")
    astronaut.x = 400
    astronaut.y = 375
    astronaut.velocityX = 0
    astronaut.velocityY = 0
  }

  if (keyDown("LEFT_ARROW")) {
    astronaut.addAnimation("eating", eat)
    astronaut.changeAnimation("eating")
    astronaut.x = 200
    astronaut.y = 370
    //astronaut.collide(edges)
    astronaut.velocityX = -2
    astronaut.velocityY = -2
  }

  if (keyDown("RIGHT_ARROW")) {
    astronaut.addAnimation("bathing", bath)
    astronaut.changeAnimation("bathing")
    astronaut.x = 400
    astronaut.y = 200
    astronaut.velocityX = 0
    astronaut.velocityY = 0
  }

  if (keyDown("m")) {
    console.log("moving");
    astronaut.addAnimation("moving", move)
    astronaut.changeAnimation("moving")
    //astronaut.x = 550
    //astronaut.y = 300
    astronaut.velocityX = 1
    astronaut.velocityY = 1
  }

  
}