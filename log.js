class Log {
    constructor(x, y, height, angle) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 20, height, options);
      this.width = 20;
      this.height = height;
      this.angle = angle;
      
      World.add(world, this.body);


      Body.setAngle(this.body, this.angle)

    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(0, 255, 50);
      stroke(0, 50, 200);
      strokeWeight(3);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };