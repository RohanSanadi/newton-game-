class Box{ 
constructor(x,y,radius)
{ var options = 
  { 'frictionAir':0, 'friction':0, 'frictionStatic':0, 
  // 'inertia': Infinity, 
  "restitution":2, 
  "isStatic":true   
} 
  this.body = Bodies.circle(x,y,radius,options);
   this.radius=radius 
   World.add(world,this.body); }
    display(){ push(); 
      strokeWeight(3) 
      stroke("white")
       ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
         pop(); 
        }   
      }         