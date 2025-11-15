class Llave {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.tomada = false;
  }

  mostrar() {
    if (!this.tomada) {
      fill(255, 255, 0);
      image(llave,this.x, this.y, 70, 70);
    }
  }

  detectar(coraline) {
    return dist(this.x, this.y, coraline.x, coraline.y) < 30;
  }

  tomar() {
    this.tomada = true;
  }
}
