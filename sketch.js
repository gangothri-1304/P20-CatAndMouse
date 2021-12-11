var cat;
var mouse;
var garden,gardenImg;

function preload() {
    //load the images here
    gardenImg = loadImage("garden.png");
    catImg1 = loadAnimation("cat1.png");
    catImg2 = loadAnimation("cat2.png","cat3.png");
    catImg3 = loadAnimation("cat4.png");
    mouseImg1 = loadAnimation("mouse1.png");
    mouseImg2 =loadAnimation("mouse2.png","mouse3.png");
    mouseImg3 = loadAnimation("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(810,630);
    cat.addAnimation("sit",catImg1);
    cat.scale = 0.13;

    mouse = createSprite(200,600);
    mouse.addAnimation("stand",mouseImg1);
    mouse.scale = 0.19;
}

function draw() {

    background(gardenImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
      cat.velocityX = 0;
      cat.addAnimation("catLastImage",catImg3);
      cat.changeAnimation ("catLastImage");
      cat.x=300;
      cat.scale=0.2;
      mouse.addAnimation("quitMode",mouseImg3);
      mouse.changeAnimation("quitMode");
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
    cat.x = cat.x-20;
    cat.addAnimation("sit",catImg2);
    cat.scale = 0.18;

    mouse.addAnimation("stand",mouseImg2);
  }

}
