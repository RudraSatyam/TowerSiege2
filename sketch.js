
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint; 

var engine, world;
var ground;
var box0, box1, box2, box3, box4, box5, box6, box8, box9, box10, box11, box12;
var stone, polygonImage;
var sling;

function preload() {
  polygonImage = loadImage("polygon.png");
}

function setup() {
  engine = Engine.create();
	world = engine.world;
	 
  createCanvas(800,600);

  ground = new Ground(300, 400, 160, 10);
  box0 = new Box(300, 380, 25, 20);
  box1 = new Box(325, 380, 25, 20);
  box2 = new Box(350, 380, 25, 20);
  box3 = new Box(275, 380, 25, 20);
  box4 = new Box(250, 380, 25, 20);
  box5 = new Box(320, 360, 25, 20);
  box6 = new Box(295, 360, 25, 20);
  box7 = new Box(270, 360, 25, 20);
  box8 = new Box(285, 340, 25, 20);
  box9 = new Box(310, 340, 25, 20);
  box10 = new Box(300, 320, 25, 20);

  stone = Bodies.circle(100, 200, 15);  
  World.add(world, stone);

  sling = new SlingShot(this.stone, {x: 100, y: 200});
  
  Engine.run(engine);

}

function draw() { 
 background("black");  
 Engine.update(engine);
 
 ground.display();
 box0.display();
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

 imageMode(CENTER);
 image(polygonImage, stone.position.x, stone.position.y,30,30);
 sling.display();
}

function mouseDragged() {
Matter.Body.setPosition(this.stone, {x: mouseX, y:mouseY});
}

function mouseReleased() {
sling.fly();
}