var s1;
function setup() {
  createCanvas(400,400);
  s1 = createSprite(200,200,50,50);
}

function draw() 
{
  background(30);
if(keyDown("right")){
s1.x=s1.x+5;

}

if(keyDown("left")){
  s1.x=s1.x-5;
  
  }

  if(keyDown("up")){
    s1.y=s1.y-5;
    
    }

    if(keyDown("down")){
      s1.y=s1.y+5;
      
      }

drawSprites();
}




