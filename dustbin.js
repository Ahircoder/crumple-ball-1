class dustbin {
  constructor(x, y, width, height) {
    var options = {
      friction: 0.3,
      density: 3,
      isStatic:true,
    };
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;

    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    rectMode(CENTER);
    fill(255);
    rect(pos.x, pos.y, this.width, this.height);
  }
}
