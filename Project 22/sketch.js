const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5, chain1, chain2, chain3, chain4, chain5, roof;
//Create multiple bobs, mulitple ropes varibale here

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	bob1 = new Bob(350,700,50)
	bob2 = new Bob(400,700,50)
	bob3 = new Bob(450,700,50)
	bob4 = new Bob(500,700,50)
	bob5 = new Bob(550,700,50)
	rope1 = new Rope(bob1.body,{x:350,y:100})
	rope2 = new Rope(bob2.body,{x:400,y:100})
	rope3 = new Rope(bob3.body,{x:450,y:100})
	rope4 = new Rope(bob4.body,{x:500,y:100})
	rope5 = new Rope(bob5.body,{x:550,y:100})
	roof = Bodies.rectangle(400,100,230,20,roof_options);

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);


  //call display() to show ropes here
bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
  
  //create ellipse shape for multiple bobs here
ellipse(bob1.postion.x, bob1.position.y, 50)
ellipse(bob2.postion.x, bob2.position.y, 50)
ellipse(bob3.postion.x, bob3.position.y, 50)
ellipse(bob4.postion.x, bob4.position.y, 50)
ellipse(bob5.postion.x, bob5.position.y, 50)
 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.body.applyForce(bob1.body, bob1.body.position,{x:-30,y:155});
	}

}