var startbg,startbgimg;
var playbutton,playbuttonimg;
var playbg,playbgimg;
var gamestate="start";
var card1,card2,card3,card4,card5,card6,card6;
var cardimg;

function preload(){
   startbgimg=loadImage("start.jpg");
   playbgimg=loadImage("playbg.jpg");
   playbuttonimg=loadImage("playbutton.png");
   cardimg=loadImage("card.png");
}

function setup() {
  createCanvas(1000,600);

  startbg=createSprite(500,300,1000,600);
  startbg.addImage("start",startbgimg);
  startbg.scale=1.2;

  playbg=createSprite(500,300,1000,600);
  playbg.addImage("play",playbgimg);
  playbg.scale=1.2;

  playbutton=createSprite(500,300,100,50);
  playbutton.scale=0.4;
  playbutton.addImage("button",playbuttonimg);

  card1=createSprite(500,200);
  card1.addImage("1",cardimg);
  card1.scale=0.5;

  card2=createSprite(700,200);
  card2.addImage("2",cardimg);
  card2.scale=0.5;

  card3=createSprite(900,200);
  card3.addImage("3",cardimg);
  card3.scale=0.5;



  card4=createSprite(500,450);
  card4.addImage("4",cardimg);
  card4.scale=0.5;

  card5=createSprite(700,450);
  card5.addImage("5",cardimg);
  card5.scale=0.5;

  card6=createSprite(900,450);
  card6.addImage("6",cardimg);
  card6.scale=0.5;
}


function draw() {
  background(0); 
  drawSprites();
  
  if(gamestate === "start"){
    startbg.visible=true;
    playbutton.visible=true;
    playbg.visible=false;

    card1.visible=false;
    card2.visible=false;
    card3.visible=false;
    card4.visible=false;
    card5.visible=false;
    card6.visible=false;

    if(mousePressedOver(playbutton)){
      gamestate="play";
    }
  }
  if(gamestate === "play"){
    startbg.visible=false;
    playbutton.visible=false;
    playbg.visible=true;

    card1.visible=true;
    card2.visible=true;
    card3.visible=true;
    card4.visible=true;
    card5.visible=true;
    card6.visible=true;

    fill(0);
    textSize(30);
    text("LEVEL : 1",100,50)

  }
}