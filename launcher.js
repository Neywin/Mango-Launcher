class launcher{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.01,
            length:10
        }
        this.pointB = pointB;
        this.launcher = Constraint.create(options);
        World.add(world,this.launcher);
        
    }
   fly(){
       this.launcher.bodyA = null;
   }

   attach(body){
    this.launcher.bodyA = body;
    }

    display(){
        if (this.launcher.bodyA){
    
        stroke(50,24,10);
        strokeWeight(4);
        line(this.launcher.bodyA.position.x,this.launcher.bodyA.position.y,this.pointB.x,this.pointB.y);

    }
    }
}