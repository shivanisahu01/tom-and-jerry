var garden,catimg1,catimg2,cat,mouse
function preload() {
    //load the images here
    garden=loadImage("images/garden.png")
    catimg1=loadAnimation("images/cat1.png");
    mouseimg1=loadAnimation("images/mouse1.png");
    catimg2=loadAnimation("images/cat2.png","images/cat3.png");
    mouseimg2=loadAnimation("images/mouse2.png","images/mouse3.png");
    catimg3=loadAnimation("images/cat4.png");
    mouseimg3=loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(870,600)
    cat.addAnimation("cat",catimg1)
    cat.scale=0.2
    mouse=createSprite(200,600)
    mouse.addAnimation("mouse1",mouseimg1)
    mouse.scale=0.15
}

function draw() {

    background(garden);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
        cat.velocityX=0
        cat.addAnimation("cat1",catimg3)
     cat.x=300
     cat.scale=0.15
        cat.changeAnimation("cat1")
        mouse.addAnimation("mouse2",mouseimg3)
        mouse.changeAnimation("mouse2")
    }
    keyPressed()
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
 if(keyDown("LEFT_ARROW")){
     cat.velocityX=-5
     mouse.addAnimation("teasing",mouseimg2)
     mouse.changeAnimation("teasing");
     mouse.frameDelay=25
     

 
    cat.addAnimation("run",catimg2)
    cat.changeAnimation("run");

}}
