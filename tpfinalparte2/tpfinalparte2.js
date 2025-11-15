//link al video: https://youtu.be/bMjyjgeZdSg
let juego;
let win;
let lose;
let clicksonido;
let font;
function preload() {
  coralinepj = loadImage('assets/coralinepj.png');
  mamapj = loadImage('assets/mamacoraline.png');
  llave = loadImage ('assets/llavecoraline.png');
  win = loadSound("assets/win.mp3");
  lose = loadSound('assets/lose.mp3');
  clicksonido = loadSound('assets/clicksonido.wav');
  font = loadFont("assets/tipografia.ttf");
  fondojuego =loadImage ("assets/fondojuego.png"); 
  perdiste = loadImage ("assets/perdiste.jpg");
  ganaste = loadImage ("assets/ganaste.jpg");
}

function setup() {
  createCanvas(640, 480);
  juego = new Juego();
  textFont (font);
  textSize (60);
}

function draw() {
  juego.actualizar();
}

// Esto pasa el clic al objeto principal
function mousePressed() {
  clicksonido.play();
  juego.mousePressed();
}
