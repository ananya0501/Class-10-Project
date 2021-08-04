//variables

var ship, ship_animation, edges, sea, sea_image; 

function preload(){
 
//loading the ship animation

ship_animation = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

//loading the sea image

sea_image = loadImage("sea.png");
}

function setup(){
  createCanvas(900,550);

//creating the sea and adding its image
  
sea = createSprite(100,100);
sea.addImage("sea", sea_image);

//creating the ship and adding its animation

ship = createSprite(60,160,100,100);  
ship.addAnimation("moving", ship_animation); 
ship.scale = 0.35;
ship.x = 140;

//making the edges as sprites

edges = createEdgeSprites();

}

function draw() {

//assigning the velocity to the sea so, that it can move backwards

sea.velocityX = -5;

//to reset the sea x position

if(sea.x<0){
  sea.x = sea.width/2;
}

//to move the ship aside when some other ship or submarine is coming

if(ship.y>130 && ship.y<400){
   if(keyDown("down")){
    ship.y = ship.y+5;
}
   else if(keyDown("up")){
   ship.y = ship.y-5;
}}

//reset the ship when it's y position is lesser than 130

if(ship.y===130){
  ship.y = 160;
}

//reset the ship when it's y position is greater than 400

if(ship.y===400){
  ship.y = 350;
}
 drawSprites();
}