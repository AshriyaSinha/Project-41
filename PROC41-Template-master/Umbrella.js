class Umbrella {
    constructor (x,y){
        var options = {
            isStatic : true
        }

        this.umbrella = Bodies.circle (x,y,50,options)
        this.image = loadImage ("images/walking Frame/walking_4.png")
        this.radius = 50
        World.add(world,this.umbrella)
    }
    
    display (){
        var pos = this.umbrella.position 
        imageMode (CENTER)
        image(this.image,pos.x,pos.y + 70,300,300)
    }
}