var imgs = [];
var x = 0;
var clicked = 0;


function preload(){
  background = loadImage('images/background.jpg')
  
  img0 = loadImage('images/0.jpg')
  img1 = loadImage('images/1.jpg')
  img2 = loadImage('images/2.jpg')
  img3 = loadImage('images/3.jpg')
  
}

function setup() 
{
createCanvas(background.width,background.height)
frameRate(10);
image(background,0,0)  

// halfw = imgs[0].width/2;
// halfh = imgs[0].height/2;
cursor('pointer');
 
}

function draw() 
{ 
  
  
//print(mouseX, mouseY);
  if (mouseX >= 400 && mouseY >= 350)
  {  
      if (clicked == 1)
      {
      image(img0,0,0)
      ellipse(mouseX, mouseY, 400, 400)
      }  
      else
      {  
      image(background,0,0)   
       }  
  }
  else if (mouseX <= 300 && mouseY >= 350) 
  {  
      if (clicked == 1)
      {
        image(img1,0,0)
        ellipse(mouseX, mouseY, 400, 400)
      }  
      else
      {  
       image(background,0,0)   
      }  
  }
    else if (mouseX <= 300 && mouseY <= 310) 
  {  
      if (clicked == 1)
       {
        image(img2,0,0)
        ellipse(mouseX, mouseY, 300, 300)
       }  
       else
       {  
       image(background,0,0)   
      } 
  }
  else if (mouseX >= 350 && mouseY <= 310) 
  {  
       if (clicked == 1)
    
       {
        image(img3,0,0)
        ellipse(mouseX, mouseY, 300, 300)
       }  
       else
       {  
      image(background,0,0)   
       }  
     
        }
  else 
  {
      image(background, 0, 0,)
  }

 fill(250, 255, 255, 50); 
 noStroke();

}

function mouseClicked(){
   if (clicked == 1){
   clicked = 0
   }
   else{
   clicked = 1
   }
 }
