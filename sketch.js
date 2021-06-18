const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3, box4, box5;
var ball;
var rope;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(600,height,1200,20)

    box1 = new Box(900,50,50,50);
    box2 = new Box(900,60,50,50);
    box3 = new Box(900,70,50,50);
    box4 = new Box(900,80,50,50);
    box5 = new Box(900,90,50,50);
    box6 = new Box(900,100,50,50);
    box7 = new Box(850,50,50,50);
    box8 = new Box(850,60,50,50);
    box9 = new Box(850,70,50,50);
    box10 = new Box(850,80,50,50);
    box11 = new Box(850,90,50,50);
    box12 = new Box(850,100,50,50);

    ball = new Ball(450,50,70,70);

    rope = new Rope(ball.body,{x:675, y:50})
}

function draw(){
    background(0);
    Engine.update(engine);
    
    ground.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();

    ball.display();

    rope.display();
    
    

}

function mouseDragged(){

    Matter.Body.setPosition(ball.body, {x:mouseX, y:mouseY})

}