const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;


function setup(){
    var canvas = createCanvas(1200, 500);
    engine = Engine.create();
    world = engine.world;


    roof = new Ground(400,60,700,50)
   bob1 = new Box(400,400,50) 
   bob2 = new Box(500,400,50) 
   bob3 = new Box(600,400,50) 
   bob4 = new Box(300,400,50) 
   bob5 = new Box(200,400,50) 
   rope1 = new Sling(bob1.body,{x: 400, y:85});
    rope2 = new Sling(bob2.body,{x: 500, y:85}); 
    rope3 = new Sling(bob3.body,{x: 600, y:85}); 
    rope4 = new Sling(bob4.body,{x: 300, y:85}); 
    rope5 = new Sling (bob5.body,{x: 200, y:85})
 //ground = new Ground(480,145,300,20);
  // box1 =new Box  (360,300,40,40)
   //box1Band= new Sling(box1.body,{x:360,y:150})
   //box2 =new Box (410,300,40,40)
   //box2Band= new Sling(box2.body,{x:410,y:150})
  // box3 =new Box (460,300,40,40)
//box3Band= new Sling(box3.body,{x:460,y:150})
  //  box4 =new Box(510,300,40,40)
  //  box4Band= new Sling(box4.body,{x:510,y:150})
  //  box5 =new Box (560,300,40,40)
  //  box5Band= new Sling(box5.body,{x:560,y:150})
   
    
}

function draw(){
    background("white   ")
   Engine.update(engine);
    strokeWeight(4);
  text(mouseX+" "+mouseY,100,100)
//   ground.display();
//   box1.display();
//   box1Band.display(); 
//   box2.display();
//   box2Band.display();
//   box3.display();
// box3Band.display();
// box4.display();
// box4Band.display();
// box5.display();
// box5Band.display(); 
bob1.display();
 bob2.display(); 
 bob3.display(); 
 bob4.display(); 
 bob5.display(); 
 roof.display(); 
rope1.display();
 rope2.display(); 
 rope3.display(); 
 rope4.display(); 
 rope5.display();
}  
    function keyPressed(){
    if(keyCode===32){ 
    //  bob5.body.position.x = 100;
      // bob5.body.position.y = 200;
      Matter.Body.applyForce(bob5.body,bob5.body.position ,{x:-0.15, y:.1}) 
       Matter.Body.setStatic(bob5.body,true) 
   }
}
