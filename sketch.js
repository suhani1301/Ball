const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, object;

function setup() {
  createCanvas(400,400);
  
  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic:true
  }

  var ball_option={
    restitution:0.8
  }

  object = Bodies.rectangle(200,390,400,10,options);
  World.add(world,object);
   ball=Bodies.circle(200,100,20,ball_option);
   World.add(world,ball)
  console.log(object.position.x,object.position.y);
}

function draw() 
{
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(object.position.x,object.position.y,400,10);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20)
}