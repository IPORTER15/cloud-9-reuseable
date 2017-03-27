var x = 300;
var y = 200;

function setup(){
    createCanvas(600,400);
    background(50);
}

function draw(){
    mrbudi(300,200);
    mrbudi(100,200);
    mrbudi(200,300);
    mrbudi(300,300);
    mrbudi(400,300);
    mrbudi(500,300);
    
 if (mouseIsPressed){
    mrbudi(mouseX,mouseY);
   }
}

function mrbudi(x,y){
    //stem
    fill(25,150,50);
    rect(x-5,y,10,100);
   
   //petals
   noStroke();
   fill(255,150,200);
   ellipse(x+10,y-10,35,35);
   ellipse(x+10,y+10,35,35);
   ellipse(x-10,y+10,35,35);
   ellipse(x-10,y-10,35,35);
   
   
   //bulb
    fill(255,200,0);
    ellipse(x,y,25,25);
    
   
}