const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, body;
var platform, sling1;

function setup(){
    var canvas = createCanvas(600,600);

    engine = Engine.create();
    world = engine.world;

    ball = new Ball(50,50,25);

    platform = new Ground(300,150,150,20);

    sling1 = new SlingShot(ball.body,{x:300, y:150});
}

function draw(){

    background("grey");
    Engine.update(engine);

    ball.display();

    platform.display();
    sling1.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x: mouseX , y: mouseY});
}