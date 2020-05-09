class Ball  {
  constructor(x,y,radius){
  
    var options = {
    'restitution': 0.8,
    'friction': 1.0,
    'density': 1.0

    }
    this.radius = radius;
    this.body = Bodies.circle(x,y,radius,options);  
    World.add(world,this.body);
  }

  display() {
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    ellipseMode(CENTER);
    ellipse(this.body.position.x, this.body.position.y, this.radius);
    fill("blue");
    pop();
  }
}
