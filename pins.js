class Pin{
    constructor(x,y){
        var options={
        isStatic:true,

        }
        this.body= Bodies.circle(x,y,40,options);
        World.add(world,this.body);
        this.radius=40
    }
    display(){
        fill("white");
        ellipseMode(CENTER);
    ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);

    }
}