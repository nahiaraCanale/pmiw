class Coraline {
  constructor() {
    this.x = width / 4;
    this.y = height / 2;
    this.vel = 3;
  }

  mover() {
    if (keyIsDown(LEFT_ARROW)) this.x -= this.vel;
    if (keyIsDown(RIGHT_ARROW)) this.x += this.vel;
    if (keyIsDown(UP_ARROW)) this.y -= this.vel;
    if (keyIsDown(DOWN_ARROW)) this.y += this.vel;
    // Limitar X
    if (this.x < 0) {
      this.x = 0;
    }
    if (this.x > width) {
      this.x = width;
    }

    // Limitar Y
    if (this.y < 0) {
      this.y = 0;
    }
    if (this.y > height) {
      this.y = height;
    }
  }

  mostrar() {
    fill(0, 150, 255);
    imageMode(CENTER, CENTER);
    image(coralinepj, this.x, this.y, 100, 100);
  }

  reiniciar() {
    this.x = width / 4;
    this.y = height / 2;
  }
}
