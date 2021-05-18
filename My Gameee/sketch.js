//making man
var man,zombie;
var bg1,standing;
var score = 0 ;
var clcBG;
var health = 100 ;
var hearts;
var heartful , heart9 , heart8 ,heart7 ,heart6 , heart5 , heart4 , heart3 , heart2 , heart1 
var state = "stand" ;
function preload()
{

    bg1 = loadImage("images/bg.jpg")
    homebg1 = loadImage("images/HomeBG.jpg")
    standing = loadAnimation("images/stand.png","images/stand1.png","images/stand.png")
    punching = loadAnimation("images/punch1.png","images/punch2.png")
    Zom1 = loadImage("images/z1.png");
    Zom2 = loadImage("images/z2.png");
    Zom3 = loadImage("images/z3.png");
    Zom4 = loadImage("images/z4.png");
    heartful = loadImage("images/hfull.png");
    heart9 = loadImage("images/9H.png");
    heart8 = loadImage("images/8H.png");
    heart7 = loadImage("images/7H.png");
    heart6 = loadImage("images/6H.png");
    heart5 = loadImage("images/5H.png");
    heart4 = loadImage("images/4H.png");
    heart3 = loadImage("images/3H.png");
    heart2 = loadImage("images/2H.png");
    heart1 = loadImage("images/1H.png");
    

}

function setup()
{
    //basics
    createCanvas(1820,1070);

    //making man
    man = createSprite(500,800,100,100);
    man.addAnimation("hi", standing);
    man.scale = 3.7;
        man.debug=true;
    man.setCollider("Rectangle", -35,5,man.width-80,man.height-30);

    //making zombie
    zombie = createSprite(100,100,10,10);
    ZomGroup = new Group();
    
    hearts = createSprite(300,50,100,100)
    hearts.scale= .5

}

function draw ()
{
    //basics
    background(bg1);

    textSize(40);
    fill("RED")
    text("Score : "+ score, 1500,100 )

    spawnZombies();

    if(state === "stand")
    {

        //making it punch
        if(keyWentDown("SPACE"))
        {

        man.addAnimation("hi",punching)
        //man.setCollider("Rectangle", -5,5,man.width-80,man.height-30);

        state = "punch";

         if(man.isTouching(ZomGroup))
        {
         ZomGroup.destroyEach();
         score+= Math.round(random(2,7));
        }


        }

        killman();
        getHearts();
    }

    if(state === "punch") 
    {
    
        //making it come back 

            if(keyWentUp("SPACE"))
            {

            man.addAnimation("hi", standing);
            state="stand";
 
            }
    }

    //FUNCTION
    
    
    //console.log(health);
    drawSprites();
    console.log(state)
}

function spawnZombies()
{
   if (frameCount % 150 === 0)
     {
       var zombie = createSprite(1500,855,10,40);
       zombie.velocityX = -3;

        //generate random obstacles
        var rand = Math.round(random(1,4));
        switch(rand) 
        {
          case 1: zombie.addImage(Zom1);zombie.setCollider("Rectangle" ,0,0,zombie.width-15 , zombie.height+350);
                  break;
          case 2: zombie.addImage(Zom2);zombie.setCollider("Rectangle" ,0,0,zombie.width-15 , zombie.height+150);
                  break;
          case 3: zombie.addImage(Zom3);zombie.setCollider("Rectangle" ,0,0,zombie.width-15 , zombie.height+150);
                  break;
          case 4: zombie.addImage(Zom4);zombie.setCollider("Rectangle" ,0,0,zombie.width-30 , zombie.height+250);  
          default: break;
        }

        //assign scale and lifetime to the zombie           
        zombie.scale = 2;
        zombie.lifetime = 400;
        zombie.debug=true;

       //add each zombie to the group
        ZomGroup.add(zombie);
    }
}


function getHearts()
{

  if(health === 100)
  {
      hearts.addImage("full" , heartful );
  }

  if(health === 90)
  {
      hearts.addImage("full" , heart9 );
  }

  if(health === 80)
  {
      hearts.addImage("full" , heart8 );
  }

  if(health === 70)
  {
      hearts.addImage("full" , heart7 );
  }

  if(health === 60)
  {
      hearts.addImage("full" , heart6 );
  }

  if(health === 50)
  {
      hearts.addImage("full" , heart5 );
  }

  if(health === 40)
  {
      hearts.addImage("full" , heart4 );
  }

  if(health === 30)
  {
      hearts.addImage("full" , heart3 );
  }

  if(health === 20)
  {
      hearts.addImage("full" , heart2 );
  }

  if(health === 10)
  {
      hearts.addImage("full" , heart1 );
  }

  if(health === 0)
  {
      //die();
  }

}

function killman()
{
      //making zom kill man
      if(ZomGroup.isTouching(man))
      {
  
        health-= 10;
        ZomGroup.destroyEach();
  
      }
}