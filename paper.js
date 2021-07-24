class paper {
  constructor(x, y, d) {
    var options = {
      restitution: 0.3,
      friction: 0.5,
      density: 1.2,
    };
    this.d = d;
    this.x = x;
    this.y = y;

    this.body = Bodies.circle(x, y, d / 2, options);
    World.add(world, this.body);
  }
  display() {
    ellipseMode(RADIUS);
    fill("yellow");
    ellipse(this.body.position.x, this.body.position.y, this.d, this.d);
  }
}
