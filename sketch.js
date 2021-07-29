
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var bob;
var rope1,rope2,rope3,rope4,rope5;
function setup() {
	createCanvas(800, 700);
    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   bob1=new Bobs(200,400,20)
   bob2=new Bobs(240,400,20)
   bob3=new Bobs(280,400,20)
   bob4=new Bobs(320,400,20)
   bob5=new Bobs(360,400,20)
   bob6=new Bobs(400,400,20)
   roof=new Roof(350,100,700,20)
   rope1=new Rope(bob1.body,roof.body,-100,0)
   rope2=new Rope(bob2.body,roof.body,-50,0)
   rope3=new Rope(bob3.body,roof.body,0,0)
   rope4=new Rope(bob4.body,roof.body,50,0)
   rope5=new Rope(bob5.body,roof.body,100,0)
  
Engine.run(engine);
  
}
function draw() {
  background(0);
  text(mouseX+","+mouseY,mouseX,mouseY)
  roof.display();
 rope1.display()
  rope2.display();
  rope3.display()
  rope4.display()
  rope5.display()
  
 
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  bob6.display()

}


function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob2.body.position,{x:-10,y:-50})
	}
}




