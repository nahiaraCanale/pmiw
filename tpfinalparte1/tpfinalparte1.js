//link al video:  https://youtu.be/f6NbTWEQH2Q?si=GQnuYV2Upql9fTk8
let estado = 0;
let imagenes = [];
let font = [];
let boton1 = { x: 120, y: 400, w: 200, h: 60 };
let boton2 = { x: 360, y: 400, w: 200, h: 60 };
let sound 
function preload() {
  imagenes[0] = loadImage ("assets/portada.jpg");
  imagenes[1] = loadImage ("assets/inicio.jpg");
  imagenes[2] = loadImage ("assets/puerta.jpg");
  imagenes[3] = loadImage ("assets/coralinecae.jpg");
  imagenes[4] = loadImage ("assets/cuartocoraline.jpg");
  imagenes[5] = loadImage ("assets/coralineexplora.jpg");
  imagenes[6] = loadImage ("assets/encuentralibro.jpg");
  imagenes[7] = loadImage ("assets/coralinesale.jpg");
  imagenes[8] = loadImage ("assets/bobyratones.jpg");
  imagenes[9] = loadImage ("assets/escucharatones.jpg");
  imagenes[10] = loadImage ("assets/libro.jpg");
  imagenes[11] = loadImage ("assets/leelibro.jpg");
  imagenes[12] = loadImage ("assets/final1.jpg");
  imagenes[13] = loadImage ("assets/final2.jpg");
  imagenes[14] = loadImage ("assets/madre.jpg");
  imagenes[15] = loadImage ("assets/juegomadre.jpg");
  imagenes[16] = loadImage ("assets/encuentralibro2.jpg");
  imagenes[17] = loadImage ("assets/final3.jpg");
  imagenes[18] = loadImage ("assets/ignoraratones.jpg");
  imagenes[19] = loadImage ("assets/final4.jpg");
  imagenes[20] = loadImage ("assets/creditos.jpg");
  font[0] = loadFont("assets/titulo.ttf");
  sound = loadSound ("assets/Sonidopianocoraline.wav");
}

function setup() {
  createCanvas(640, 480);
  textFont(font[0]);
}

function draw() {
  background(255);
//inicio
  if (estado == 0) {
    image(imagenes[0], 0, 0, width, height);
    dibujarBoton(100, 200, 200, 60, "JUEGO NUEVO");
    dibujarBoton(100, 300, 200, 60, "CRÉDITOS");
 }
//intro
  else if (estado == 1) {
    image(imagenes[1], 0, 0, width, height);
    fill(255);
    textSize(15);
    text("\n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n Coraline Jones, una niña curiosa y \n decidida, casi siempre aburrida porque \n sus padres están muy ocupados. \n Explorando la nueva casa donde se \n mudo con sus padres encuentra una pequeña \n puerta  esta al abrirse por la noche la transporta a un \n mundo alternativo.  En este mundo todo es \n vibrante pero con Otros Padres idénticos \n a los reales, pero con ojos de botón estos le \n ofrecen el cariño, la atención y la diversión que tanto \n desea. Sin embargo, este paraíso es en realidad \n una trampa Coraline pronto descubre que su \n Otra Madre una bruja oscura, atrae a los niños para \n robarles el alma. Coraline deberá recorrer diferentes caminos \n y A su vez tomar decisiones claves que cambiarán el rumbo \n de la historia. Cada elección la acerca a uno de sus \n cuatro finales distintos. ¿Serás tú quien \n rompa el ciclo… o quien quede atrapado en él?",300, 50 );
   dibujarBoton(220, 400, 200, 60, "Continuar"); 
  }
//encuentra puerta
  else if (estado == 2) {
    image(imagenes[2], 0, 0, width, height);
    fill(255);
    textSize(20);
    text("Coraline encuentra la puerta al Otro Mundo...", 250, 50);
     dibujarBoton(boton1.x, boton1.y, boton1.w, boton1.h, "Abrir la puerta");
    dibujarBoton(boton2.x, boton2.y, boton2.w, boton2.h, "No abrirla por miedo");
//coraline cae
  }
 else if (estado==3){
 image(imagenes[3], 0,0, width, height);
  fill(255);
  textSize(20);
  text("Coraline cae al Otro Mundo...", 200, 50);
  dibujarBoton(220, 400, 200, 60, "Continuar");
  } 
 //coraline cuarto 
 else if (estado == 4) {
 image(imagenes[4], 0 , 0 , width, height);
   fill(255);
    textSize(20);
    text("Nota que es su cuarto pero un poco diferente. decide...",250, 50 );
    dibujarBoton(boton1.x, boton1.y, boton1.w, boton1.h );
    text ("\n explorar las \n habitaciones",220,410 );
    dibujarBoton(boton2.x, boton2.y, boton2.w, boton2.h, "buscar a sus padres");
 }
 //explora 
 else if ( estado == 5) {
  image (imagenes [5], 0, 0 , width, height);
   fill (255);
   textSize(20);
    text("explora las habitaciones de la casa", 250, 50);
    dibujarBoton(220, 400, 200, 60, "Continuar");
  }
//encuentra el libro 
else if ( estado== 6){
  image (imagenes [6], 0 ,0, width, height);
  fill (255);
  text ("encuentra un libro extraño. Decide...", 250,  50);
   dibujarBoton(boton1.x, boton1.y, boton1.w, boton1.h, "ignorarlo por miedo");
   dibujarBoton(boton2.x, boton2.y, boton2.w, boton2.h, "abrirlo y leerlo");
 }

//ignora el libro 
else if (estado == 7) {
 image (imagenes [7], 0 , 0 , width, height);
 fill (255);
 text ("sale por la puerta, se cruza con el vecino y dialoga con el", 300,50);
 dibujarBoton(220, 400, 200, 60, "Continuar");
}
//habla con bobinsky
else if (estado== 8) {
 image  (imagenes[8],0,0, width, height);
 fill (255);
 text("El señor Bobinsky le dice que los ratones le quieren dar un mensaje", 300, 30);
   dibujarBoton(boton1.x, boton1.y, boton1.w, boton1.h, "los escucha");
   dibujarBoton(boton2.x, boton2.y, boton2.w, boton2.h, "los ignora");
  }
//escucha a los ratones
else if (estado ==9) {
 image (imagenes [9],0 , 0, width, height); 
 fill (255); 
 text ("\n Estos le cuentan la verdad sobre el mundo \n y le aconsejan que lea el libro" ,300, 50);
  dibujarBoton(220, 400, 200, 60, "buscar el libro");
 }

//busca el libro 
else if (estado == 10) {
  image (imagenes [10], 0 ,0 , width, height);
  text ("\n Abre el libro, lo lee completo \n y accede a las pistas", 300, 50);
  dibujarBoton(220, 400, 200, 60, "Continuar");
  }
//vuelve a leer el libro
 else if (estado == 11) { 
  image (imagenes [11], 0 , 0 , width, height);
  text ("\n Coraline descubre que ella también es parte del bucle: \n no es la primera Coraline", 300, 50);
 dibujarBoton(220, 400, 200, 60, "Continuar");
 }
 //final corto 
 else if (estado ==12){
  image (imagenes [12], 0 , 0 , width, height)
  text ("\n Coraline por miedo a adentrarse decide quedarse en su mundo \n FIN",300,50);
  dibujarBoton(220, 400, 200, 60, "volver a inicio");  
 }
//fin de flujo principal
else if (estado ==13) {
 image (imagenes [13],0 ,0 , width, height) 
 dibujarBoton(220, 400, 200, 60, "inicio");  
 }
//encuentra a la otra madre
else if (estado== 14){ 
  image (imagenes [14],0,0, width, height)
  text ("\n \n Coraline se encuentrala Otra Madre, \n con botones en los ojos \n pero mas amable y buena.",300, 50);
  dibujarBoton(220, 400, 200, 60, "Acepta quedarse"); 
  }
//juego madre
else if (estado ==15) {
  image (imagenes [15],0,0,width, height)
   text ("\nLa Otra Madre propone un juego para mantenerte “entretenida” \n Encontrar los ojos de los niños.",300, 50);
   dibujarBoton(boton1.x, boton1.y, boton1.w, boton1.h, "comienza la busqueda");
   dibujarBoton(boton2.x, boton2.y, boton2.w, boton2.h, "negarse a jugar");
  }
//encuentralibro2
else if (estado ==16) {
  image (imagenes [16],0,0, width, height) 
   text ("\n Coraline buscando los ojos de los niños \n encuentra un libro extraño",300, 50);
   dibujarBoton(220, 400, 200, 60, "Continuar"); 
}
 //final3
 else if (estado == 17 ) {
   image (imagenes [17],0,0,width,height) 
   text ("\n La otra madre la obliga a coserse los botones en los ojos \n y queda atrapada para siempre.Se convierte en \n otro espíritu atrapado.\n  FIN",300, 50);
   dibujarBoton(220, 400, 200, 60, "volver a inicio"); 
  }
else if (estado == 18){
  image  (imagenes [18],0,0,width,height) 
  text ("estos se enojan y deciden delatarte con tus padres. ", 300, 50);
  dibujarBoton(220, 400, 200, 60, "continuar");  
  }
else if (estado == 19){
  image (imagenes [19],0,0, width, height) 
    text ("Te cosen los ojos y nunca mas puedes volver al mundo real. \n FIN ", 300, 50);
  dibujarBoton(220, 400, 200, 60, "volver a inicio");  
 }
else if (estado == 20) {
  image (imagenes [20],0,0, width,height)
  text ("Hecho por:",330, 160);
  textSize (15);
  text ("\n Yazmin Zaldivia \n Nahiara Canale",330, 190);
  textSize (20);
  text ("Autor de la obra:",330,250);
  textSize (15);
  text ("Neil Gaiman", 330,280);
  dibujarBoton(220, 400, 200, 60, "volver a inicio");
 }
 textSize(20);
}

function dibujarBoton(x, y, w, h, texto) {
  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    fill(4, 0, 46);
  } else {
    fill(31, 20,102);
  }
  rect(x, y, w, h, 15);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(20);
  text(texto, x + w / 2, y + h / 2);
}


function mousePressed() {
  //sonido
  if (mouseX > 100 && mouseX < 300 && mouseY > 200 && mouseY < 260) {
      sound.play ();
    }
  if (mouseX > 220 && mouseX < 420 && mouseY > 400 && mouseY < 460) {
      sound.play ();
     }
    if (mouseX > boton1.x && mouseX < boton1.x + boton1.w &&
        mouseY > boton1.y && mouseY < boton1.y + boton1.h) {
      sound.play (); 
    }

    if (mouseX > 100 && mouseX < 500 && mouseY > 300 && mouseY < 360) {
      sound.play();
    }
  
  //inicio:botón juego nuevo
   if (estado == 0) {
    if (mouseX > 100 && mouseX < 300 && mouseY > 200 && mouseY < 260) {
      estado = 1;
    }
     //creditos
     if (mouseX > 100 && mouseX < 500 && mouseY > 300 && mouseY < 360) {
      estado = 20;
    }
  }
  //introducción
  else if (estado == 1) {
      if (mouseX > 220 && mouseX < 420 && mouseY > 400 && mouseY < 460) {
      estado = 2;
     }
  }
 //encuentra la puerta 
  else if (estado == 2) {

      //entrar por la puerta
    if (mouseX > boton1.x && mouseX < boton1.x + boton1.w &&
        mouseY > boton1.y && mouseY < boton1.y + boton1.h) {
      estado = 3; 
    }
 //no entrar por miedo
    if (mouseX > boton2.x && mouseX < boton2.x + boton2.w &&
        mouseY > boton2.y && mouseY < boton2.y + boton2.h) {
      estado = 12; 
    }
   }
  //coraline cae 
 else if (estado == 3) {
  if (mouseX > 220 && mouseX < 420 && mouseY > 400 && mouseY < 460) {
      estado = 4;
  }
 }
 //coraline cuarto 
 else if (estado == 4){
  //explorar 
   if (mouseX > boton1.x && mouseX < boton1.x + boton1.w &&
        mouseY > boton1.y && mouseY < boton1.y + boton1.h) {
      estado = 5;
    }
    //buscar padres
    if (mouseX > boton2.x && mouseX < boton2.x + boton2.w &&
        mouseY > boton2.y && mouseY < boton2.y + boton2.h) {
      estado = 14; 
   } 
  }
//explora la casa
 else if (estado == 5){
  if (mouseX > 220 && mouseX < 420 && mouseY > 400 && mouseY < 460) {
      estado = 6;
   }
 }
 //encuentra el libro 
 else if (estado == 6 ){
    //ignorarlo por miedo
  if (mouseX > boton1.x && mouseX < boton1.x + boton1.w &&
        mouseY > boton1.y && mouseY < boton1.y + boton1.h) {
      estado = 7;
    }
    //abrirlo y leerlo
    if (mouseX > boton2.x && mouseX < boton2.x + boton2.w &&
        mouseY > boton2.y && mouseY < boton2.y + boton2.h) {
      estado = 10; 
   } 
 }  
  //sale por la puerta trasera
 else if (estado ==7) {
  if (mouseX > 220 && mouseX < 420 && mouseY > 400 && mouseY < 460) {
      estado = 8;
    }
  }
  else if (estado ==8) {
       //escucha a los ratones
  if (mouseX > boton1.x && mouseX < boton1.x + boton1.w &&
        mouseY > boton1.y && mouseY < boton1.y + boton1.h) {
      estado = 9;
    }
    //los ignora
    if (mouseX > boton2.x && mouseX < boton2.x + boton2.w &&
        mouseY > boton2.y && mouseY < boton2.y + boton2.h) {
      estado = 18; 
   } 
 }
//habka con los ratons
 else if (estado ==9) {
  if (mouseX > 220 && mouseX < 420 && mouseY > 400 && mouseY < 460) {
      estado = 10;
    }
 }
//vuekve a leer el libro
 else if (estado == 10) {
    if (mouseX > 220 && mouseX < 420 && mouseY > 400 && mouseY < 460) {
      estado = 11;
    }
  }
 //destruye el mundo 
 else if (estado == 11) {
 if (mouseX > 220 && mouseX < 420 && mouseY > 400 && mouseY < 460) {
      estado = 13;
    }
 }
 //final mas corto
 else if (estado == 12) {
  if (mouseX > 220 && mouseX < 420 && mouseY > 400 && mouseY < 460) {
      estado = 0;
    } 
   }
//vuelve al inicio fin flujo principal
 else if (estado == 13) { 
if (mouseX > 220 && mouseX < 420 && mouseY > 400 && mouseY < 460) {
      estado = 0;
    } 
 }

 else if (estado== 14) {
   if (mouseX > 220 && mouseX < 420 && mouseY > 400 && mouseY < 460) {
      estado = 15;
    } 
  }
  else if (estado == 15){
       //comineza la busqueda
  if (mouseX > boton1.x && mouseX < boton1.x + boton1.w &&
        mouseY > boton1.y && mouseY < boton1.y + boton1.h) {
      estado = 16;
    }
    //se niega a jugar 
    if (mouseX > boton2.x && mouseX < boton2.x + boton2.w &&
        mouseY > boton2.y && mouseY < boton2.y + boton2.h) {
      estado = 17; 
   } 
  }
//encuentralibro2
 else if (estado == 16){
    if (mouseX > 220 && mouseX < 420 && mouseY > 400 && mouseY < 460) {
      estado = 10;
    }
  }
 //final3
  else if (estado == 17){
     if (mouseX > 220 && mouseX < 420 && mouseY > 400 && mouseY < 460) {
      estado = 0;
    }
  }
 
//final 4
   else if (estado == 18){
    if (mouseX > 220 && mouseX < 420 && mouseY > 400 && mouseY < 460) {
      estado = 19;
    }
   }
    else if (estado ==  19){
    if (mouseX > 220 && mouseX < 420 && mouseY > 400 && mouseY < 460) {
      estado = 0;
    }
   }
    else if (estado ==  20){
    if (mouseX > 220 && mouseX < 420 && mouseY > 400 && mouseY < 460) {
      estado = 0;
    }
   }
  }
  
