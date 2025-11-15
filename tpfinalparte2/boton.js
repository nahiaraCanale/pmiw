class Boton {
  constructor(x, y, w, h, texto, accion) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.texto = texto;
    this.accion = accion; 
    this.activo = true;
    this.hover = false;
  }

  actualizar(mx, my, clic) {
    if (!this.activo) return;
    this.hover = this.estaSobre(mx, my);

    if (clic && this.hover && this.accion) {
      this.accion(); 
    }
  }

  mostrar() {
    if (!this.activo) return;

    stroke(0);
    fill(this.estaSobre(mouseX, mouseY) ? 220 : 180);
    rect(this.x, this.y, this.w, this.h, 5);
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(14);
    text(this.texto, this.x + this.w / 2, this.y + this.h / 2);
  }

  estaSobre(mx, my) {
    return (
      mx > this.x &&
      mx < this.x + this.w &&
      my > this.y &&
      my < this.y + this.h
    );
  }

  activar() { this.activo = true; }
  desactivar() { this.activo = false; }
}
