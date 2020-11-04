const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var stand1;
var polygon,polygonImg;

function preload()
{
  polygonImg = loadImage("Polygon.png");
}

function setup()
{
  
  createCanvas(800,400);
  
	engine = Engine.create();
	world = engine.world;

  stand1 = new stand(400,310,300,15);  

  //tower1 level4
  block1 = new blockTypeA(300,275,30,40);
  block2 = new blockTypeA(330,275,30,40);
  block3 = new blockTypeA(360,275,30,40);
  block4 = new blockTypeA(390,275,30,40);
  block5 = new blockTypeA(420,275,30,40);
  block6 = new blockTypeA(450,275,30,40);
  block7 = new blockTypeA(480,275,30,40);

  //tower1 level3
  block8 = new blockTypeB(330,235,30,40);
  block9 = new blockTypeB(360,235,30,40);
  block10 = new blockTypeB(390,235,30,40);
  block11 = new blockTypeB(420,235,30,40);
  block12 = new blockTypeB(450,235,30,40);

  //tower1 level2
  block13 = new blockTypeC(360,195,30,40);
  block14 = new blockTypeC(390,195,30,40);
  block15 = new blockTypeC(420,195,30,40);

  //tower1 top
  block16 = new blockTypeD(390,155,30,40);

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  sling = new Sling(this.polygon,{x:100,y:200});

  Engine.run(engine);
}

function draw() {
  background(0);
  
  imageMode(CENTER);
  image(polygonImg,polygon.position.x,polygon.position.y,40,40);

  Engine.update(engine);
  
  stand1.display();
  
  

  //tower1
  
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  drawSprites();
}

function mouseDragged()
{
	Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY});
}
 
function mouseReleased()
{
	sling.fly();
}
  
