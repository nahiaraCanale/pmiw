class Madre {
  constructor() {
    this.x = width - 100; 
    this.y = height / 2;
    this.vel = 1.5;
  }

  perseguir(tx, ty) {
    if (this.x < tx) this.x += this.vel;
    if (this.x > tx) this.x -= this.vel;
    if (this.y < ty) this.y += this.vel;
    if (this.y > ty) this.y -= this.vel;
  }

  mostrar() { 
   fill(255, 0, 0);
   image(mamapj,this.x, this.y, 100, 100);
  }

  colisiona(coraline) {
    return dist(this.x, this.y, coraline.x, coraline.y) < 30;
  }

  reiniciar() {
    this.x = width - 100;
    this.y = height / 2;
  }
}
