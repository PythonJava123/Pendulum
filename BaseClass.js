class BaseClass{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        rect(this.body.x, this.body.y, this.body.width, this.body.height);
        rectMode(CENTER);
        fill("blue");
      }
}