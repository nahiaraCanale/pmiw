//https://youtu.be/0BPIHxZs_eY?si=4lMOhRP0uv2uOdVV
let columnas = 8;
let filas = 14;
let anchoCelda, altoCelda;
let desplazamiento = 0;
let colorA;
let colorB;

function preload() {
   grilladegrade = loadImage("assets/grilladegrade.jpg");
}

function setup() {
  createCanvas(800, 400);
  anchoCelda = (width / 2.0) / columnas;
  altoCelda = height / float(filas);
  noStroke();
  colorA = color(255);
  colorB = color(0);
}

function draw() {
 background(255);
  image(grilladegrade, 0, 0, width / 2, height);
  translate(400, 0);
  for (let col = 0; col < columnas; col++) {
    for (let fila = 0; fila < filas; fila++) {
      let x = col * anchoCelda;
      let y = fila * altoCelda;
      dibujarCelda(x, y, anchoCelda, altoCelda, fila, col, desplazamiento);
    }
  }
}

function dibujarCelda(x, y, ancho, alto, fila, col, desplazamiento) {
  for (let lineaX = 0; lineaX < ancho; lineaX++) {
    let desplazadoX = lineaX + desplazamiento;
    fill(colorDegradado(desplazadoX, ancho, fila, col));
    rect(x + lineaX, y, 1, alto);
  }
}

function colorDegradado(desplazadoX, anchoCelda, fila, columna) {
  let amt = map(desplazadoX % anchoCelda, 0, anchoCelda, 0, 1);
  let c = lerpColor(colorA, colorB, amt);
  if (fila % 2 == 0) {
    return c;
  } else {
    return lerpColor(colorB, colorA, amt);
  }
}

function mouseMoved() {
  desplazamiento = map(mouseX, 0, width, 0, anchoCelda);
}

function keyPressed() {
  if (key == 'r') {
    desplazamiento = 0;
    colorA = color(255);
    colorB = color(0);
  } else if (key == 'v') {
    colorA = color(200, 100, 255);
    colorB = color(80, 0, 120);
  } else if (key == 'a') {
    colorA = color(255, 255, 180);
    colorB = color(120, 120, 0);
  }
} 
