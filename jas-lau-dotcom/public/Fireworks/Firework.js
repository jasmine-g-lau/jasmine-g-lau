class Firework {
  constructor(targetX, targetY) {
    this.x = targetX;
    this.y = height;
    this.targetY = targetY;
    let distance = height - targetY;
    this.ySpeed = -Math.sqrt(2 * gravity * distance);
    this.xSpeed = 0;
    this.pColor = random(colors);
    this.size = 6;
    this.isActive = true;
  }
  step() {
    this.y += this.ySpeed;
    this.ySpeed += gravity;
    if (this.ySpeed >= 0 || this.y <= this.targetY) {
      this.explode();
      this.isActive = false;
    }
  }
  explode() {
    for (let i = 0; i < 50; i++) {
      let angle = random(TWO_PI);
      let speed = random(2, 6);
      let xSpeed = cos(angle) * speed;
      let ySpeed = sin(angle) * speed;
      particles.push(
        new Particle(this.x, this.y, xSpeed, ySpeed, this.pColor, random(3, 6))
      );
    }
  }
  draw() {
    push();
    fill(this.pColor);
    noStroke();
    star(this.x, this.y, this.size / 2, this.size, 5);
    pop();
  }
}