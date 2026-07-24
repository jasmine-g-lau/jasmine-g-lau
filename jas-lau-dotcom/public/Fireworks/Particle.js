class Particle {
  constructor(x, y, xSpeed, ySpeed, pColor, size) {
    this.x = x;
    this.y = y;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
    this.pColor = pColor;
    this.size = size;
    this.isActive = true;
  }
  step() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    this.ySpeed += gravity;
    if (this.y > height) {
      this.isActive = false;
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