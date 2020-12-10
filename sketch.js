const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var box1, box2, bottomPig, bird, log1
var box3, box4, topPig, log2;

function setup(){
    var canvas = createCanvas(1000,500);
    engine = Engine.create();
	world = engine.world;

	bird = new Bird(75, 50);
	ground = new Ground(500,height,1000,20);

    box1 = new Box(600,450,70,70);
    box2 = new Box(800,450,70,70);
	bottomPig = new Pig(700, 450);
	log1 = new Log(700, 350, 350, PI/2);

	box3 = new Box(600,300,70,70);
    box4 = new Box(800,300,70,70);
	topPig = new Pig(700, 300);
	log2 = new Log(700, 200, 350, PI/2);
	
}

function draw(){
    background(128, 128, 128);
    Engine.update(engine);

	bird.display();
	ground.display();

    box1.display();
	box2.display();
	bottomPig.display();
	log1.display();

	box3.display();
	box4.display();
	topPig.display();
	log2.display();
}