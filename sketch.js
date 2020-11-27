const Engine = Matter.Engine;//creates the physic engine
const World = Matter.World;//physical world where we add the objects or bodies
const Bodies = Matter.Bodies;//angry bird etc


var engine,world;
var ground 
var ball

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
 var option = {
   isStatic : true
 }
 var bounce = {
   restitution :  1
 }
 ground = Bodies.rectangle(200,300,400,10,option)
 World.add(world,ground)
 
 ball=Bodies.circle(200,50,20,bounce)
 World.add(world,ball)
}

function draw() {
  background("pink");  
  Engine.update(engine);
   

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,10)
 
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
  
  drawSprites();
}