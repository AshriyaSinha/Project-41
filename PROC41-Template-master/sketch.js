const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world

var umbrella
var drops = []
var maxDrops = 100

var thunder, t1, t2, t3, t4
var rand
var thunderCreatedFrame = 0

function preload(){
    t1 = loadImage ("images/thunderbolt/1.png")
    t2 = loadImage ("images/thunderbolt/2.png")
    t3 = loadImage ("images/thunderbolt/3.png")
    t4 = loadImage ("images/thunderbolt/4.png")

}

function setup(){
   createCanvas (400,800);
   engine = Engine.create()
   world = engine.world

  umbrella = new Umbrella (200,600)

   if (frameCount % 150 === 0){
       for(var i=0; i<maxDrops;i++){
           drops.push (new Drop (random(0,400),random(0,400)))
       }
   }
   
    
}

function draw(){
    Engine.update (engine)
    background(0)
    umbrella.display ()

    for(var i = 0;i<maxDrops;i++){
        drops[i].display()
        drops[i].update()
    }

    rand = Math.round(random(1,4))
    if(frameCount % 80 === 0){
        thunderCreatedFrame = frameCount
        thunder = createSprite (random(10,370), random(10,30), 10,10)
        switch(rand){
            case 1 : thunder.addImage (t1)
            break
            case 2 : thunder.addImage (t2)
            break
            case 3 : thunder.addImage (t3)
            break
            case 4 : thunder.addImage (t4)
            break
            default : break 
        }
        thunder.scale = random (0.3,0.6)
    }

    if(thunderCreatedFrame + 10 === frameCount && thunder){
        thunder.destroy()
    }

    drawSprites()
    
}   

