const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ground,ball;



function setup() {

  var canvas  = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

var ground_options = {

  isStatic:true
}
  ground = Bodies.rectangle(200,380,600,15,ground_options);
  World.add(world,ground);

var ball_options = {

  isStatic:false,
  restitution:1
}
ball = Bodies.circle(300,50,30,ball_options);
World.add(world,ball);
 // createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  rectMode(CENTER);
  
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(CENTER);
  ellipse(ball.position.x,ball.position.y,30,);
 // rect(200,200,50,50);
  //drawSprites();
}