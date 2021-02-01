class Ball{
    constructor(x, y){
        var options ={
            density: 1,
            frictionAir: 0.05,
            restitution: 0.5
        }
        this.body = Bodies.circle(x, y, 80, options);
        this.r = 80;
        this.x = x;
        this.y = y;
        World.add(myWorld, this.body);
    }

    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        strokeWeight(1);
        stroke("black")
        ellipseMode(CENTER);
        fill("grey");
        ellipse(0, 0, this.r, this.r);
        pop();
      }



}