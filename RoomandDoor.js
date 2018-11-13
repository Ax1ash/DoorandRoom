
var numStars = 200;
var xPos = new Array (numStars);
var yPos = new Array (numStars);
var xSpeed = new Array (numStars);
var ySpeed = new Array (numStars);


var r1,r2,drop,cloud,half,man,space,spaceClosed,pipe,finish;
var room,guy;

var count;
var move;
var updown;
var manPos;
var manCount;
var pipeRad;
var pipePosX;
var pipePosY;




function preload(){
            r1 = loadImage("room_closed.png");
    r2 = loadImage("room_beach.png");
    drop = loadImage("dooropened.png");
    cloud = loadImage("cloud.png");
    half = loadImage("half.png");
    man = loadImage("man.png");
    space = loadImage("space.png");
     spaceClosed = loadImage("space_closed.png");
     pipe = loadImage("pipe.png");
     finish=loadImage("final.png");
     
       room = loadImage("room.jpg");
  guy = loadImage("guy.jpg");
  
  


}

function setup() {
 createCanvas(900,900);
noStroke();

       for (var i = 20; i < numStars; i += random(10000,100000)) {
    fill(255);
    ellipse(random(width), random(height), 3, 3);
     }
    
count=0;
move = 350;
updown = 0;
manPos = 400;
manCount =0;
pipeRad =0;
pipePosX =0;
pipePosY =0;



}

function draw() {
  if(count==0){
  image(r1,0,0);
  }
  else if(count==1){
  image(r2,0,0);
  move=move-1;
      
   

  image(cloud,move,0);
  
  image(half,0,0);
  }
  
  else if(count==2){
   image(r2,0,0);
  
   if(manPos>-200&&manCount==0){
   manPos=manPos-2;
   
   }
    if(manPos==-200){
   manPos=manPos+2;
   manCount++;
  }
    else if(manCount==1){
    manPos=manPos+2;
  }


  
    image(man,manPos,0);
  
    image(cloud,move,0);
    image(half,0,0);
  }
  
  else if(count==3){
  image(r1,0,0);
  }
       else if(count == 4){
       fill(0,0,0);
       rect(0,0,900,900);

 }
 else if(count ==5){
 image(spaceClosed,0,0);
 move=700;
 }
 else if(count==6){
      fill(0, 3);
  rect(0, 0, width, height);
  
   
  for (var i = 50; i < numStars; i += random(10000,100000)) {
    fill(255);
    ellipse(random(width), random(height), 3, 3);
    
  
      }
      
 push();
translate(width*0.5,height*0.5);
rotate(frameCount/120);
image(pipe,-404,-37);
pop();
      
      image(cloud,move,54);
      move=move-5;
      image(cloud,move+600,204);
      
 image(space,0,0);
 }
 
 else if(count==7){
          fill(0,0,0);
       rect(0,0,900,900);
 }
     else if(count == 8){

    image(finish,0,0);
  
  room = loadImage("room.jpg");
  guy = loadImage("guy.jpg");
  scale(0.25);
  image(room,305,959);
  image(guy,2734,1225);


 }
  
  
}
function mouseClicked(){
count=count+1;
}
