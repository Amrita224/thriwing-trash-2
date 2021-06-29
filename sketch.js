
var   Ball,Dustbin,groundBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload() {

}

function setup() {
	createCanvas(900, 500);


	ground = createSprite(width / 2, height - 50, width, 10);
	ground.shapeColor = "brown";

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.



	groundBody = Bodies.rectangle(width / 2, height - 50, width, 10, { isStatic: true });
	World.add(world, groundBody);







	Dustbin=new dustbin(750,435);	
	Ball = new ball(55, 400,500);
	

	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(0);
    

	ground.x = groundBody.position.x;
	ground.y = groundBody.position.y;




	drawSprites();
	Engine.update(engine);


	Dustbin.display();
	Ball.display();
	
	
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(Ball.body, Ball.body.position, { x: 32, y: -50 });
	}
}

