class Juego {
  constructor() {
    this.estado = "inicio"; // inicio, jugando, gana, pierde
    this.coraline = new Coraline();
    this.madre = new Madre();
    this.llaves = [];
    this.totalLlaves = 3;
    this.crearLlaves();
    this.boton = new Boton(width - 120, height - 50, 100, 30, "Reiniciar", () => {
      this.reiniciar();
    });
  }

  crearLlaves() {
    for (let i = 0; i < this.totalLlaves; i++) {
      this.llaves.push(new Llave(random(50, width - 50), random(50, height - 50)));
    }
  }

  actualizar() {
    background (20);
    if (this.estado === "inicio") {
      this.mostrarInstrucciones();
    } 
    else if (this.estado === "jugando") {
      image(fondojuego, width/2 , height/2, 640, 480);
      this.jugar();
    } 
    else if (this.estado === "gana") {
      image(ganaste, width/2 , height/2, 640, 480);
      this.mostrarFinal("GANASTE");
      text("\n\n\nHecho por: \nYazmin zaldivia\nNahiara canale", width / 2, height / 2 + 40);
    } 
    else if (this.estado === "pierde") {
      image(perdiste, width/2 , height/2, 640, 480);
      this.mostrarFinal("PERDISTE");
      text("\n\n\nHecho por: \nYazmin zaldivia\nNahiara canale", width / 2, height / 2 + 40);
    }
  this.boton.mostrar();
  }

  mostrarInstrucciones() {
    fill(255);
    textAlign(CENTER);
    textSize(18);
    text("\nCORALINE:\n Recoge las 3 llaves antes de que la otra madre te atrape", width / 2, height / 2 - 50);
    text("Usa las flechas para moverte", width / 2, height / 2);
    text("Haz clic para comenzar", width / 2, height / 2 + 40);
  }

jugar() {
  // Movimiento y dibujo de Coraline
  this.coraline.mover();
  this.coraline.mostrar();

  // Movimiento de la madre
  this.madre.perseguir(this.coraline.x, this.coraline.y);
  this.madre.mostrar();

  // Detección de colisiones con las llaves
  for (let i = 0; i < this.llaves.length; i++) {
    let llave = this.llaves[i];
    llave.mostrar();

    if (!llave.tomada && llave.detectar(this.coraline)) {
      llave.tomar();
    }
  }
  let llavesRestantes = []; // nuevo arreglo para guardar las que no fueron tomadas

  for (let i = 0; i < this.llaves.length; i++) {
    let llave = this.llaves[i];
    if (!llave.tomada) {
      llavesRestantes.push(llave); // guardo solo las que NO fueron tomadas
    }
  }

  this.llaves = llavesRestantes;

  // Condición de victoria
  if (this.llaves.length === 0) {
    this.estado = "gana";
    win.play();
  }

  // Condición de derrota
  if (this.madre.colisiona(this.coraline)) {
    this.estado = "pierde";
    lose.play();
  }
}


  mostrarFinal(texto) {
    fill(255);
    textAlign(CENTER);
    textSize(28);
    text(texto, width / 2, height / 2);
  }

  mousePressed() {
    if (this.estado === "inicio") {
      this.estado = "jugando";
      return;
    }

    this.boton.actualizar(mouseX, mouseY, true);
  }

  reiniciar() {
    this.estado = "inicio";
    this.llaves = [];
    this.crearLlaves();
    this.coraline.reiniciar();
    this.madre.reiniciar();
  }
}
