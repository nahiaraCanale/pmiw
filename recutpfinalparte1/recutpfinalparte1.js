//link al video: https://youtu.be/Q0-CILwyQKY?si=nlDla8qgJDjvMSJh
}let estado = 0;
let imagenes = [];
let font = [];
let sound;

// coordenadas de los botones principales 
// Boton 1 (Izquierda)
let boton1_x = 120;
let boton1_y = 400;
let boton1_w = 200;
let boton1_h = 60;

// Boton 2 (Derecha)
let boton2_x = 360;
let boton2_y = 400;
let boton2_w = 200;
let boton2_h = 60;

//  boton de 'Continuar' (Centro)
let boton_continuar_x = 220;
let boton_continuar_y = 400;
let boton_continuar_w = 200;
let boton_continuar_h = 60;


function preload() {
  imagenes[0] = loadImage("assets/portada.jpg");
  imagenes[1] = loadImage("assets/inicio.jpg");
  imagenes[2] = loadImage("assets/puerta.jpg");
  imagenes[3] = loadImage("assets/coralinecae.jpg");
  imagenes[4] = loadImage("assets/cuartocoraline.jpg");
  imagenes[5] = loadImage("assets/coralineexplora.jpg");
  imagenes[6] = loadImage("assets/encuentralibro.jpg");
  imagenes[7] = loadImage("assets/coralinesale.jpg");
  imagenes[8] = loadImage("assets/bobyratones.jpg");
  imagenes[9] = loadImage("assets/escucharatones.jpg");
  imagenes[10] = loadImage("assets/libro.jpg");
  imagenes[11] = loadImage("assets/leelibro.jpg");
  imagenes[12] = loadImage("assets/final1.jpg");
  imagenes[13] = loadImage("assets/final2.jpg");
  imagenes[14] = loadImage("assets/madre.jpg");
  imagenes[15] = loadImage("assets/juegomadre.jpg");
  imagenes[16] = loadImage("assets/encuentralibro2.jpg");
  imagenes[17] = loadImage("assets/final3.jpg");
  imagenes[18] = loadImage("assets/ignoraratones.jpg");
  imagenes[19] = loadImage("assets/final4.jpg");
  imagenes[20] = loadImage("assets/creditos.jpg");
  font[0] = loadFont("assets/titulo.ttf");
  sound = loadSound("assets/Sonidopianocoraline.wav");
}

function setup() {
  createCanvas(640, 480);
  textFont(font[0]);
}

function draw() {
  background(255);
  // inicio
  if (estado == 0) {
    image(imagenes[0], 0, 0, width, height);
    // Botón JUEGO NUEVO
    dibujarBoton(100, 200, 200, 60, "JUEGO NUEVO");
    // Botón CRÉDITOS
    dibujarBoton(100, 300, 200, 60, "CRÉDITOS");
  }
  // intro
  else if (estado == 1) {
    image(imagenes[1], 0, 0, width, height);
    fill(255);
    textSize(15);
    text(
      "\n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n Coraline Jones, una niña curiosa y \n decidida, casi siempre aburrida porque \n sus padres están muy ocupados. \n Explorando la nueva casa donde se \n mudo con sus padres encuentra una pequeña \n puerta  esta al abrirse por la noche la transporta a un \n mundo alternativo.  En este mundo todo es \n vibrante pero con Otros Padres idénticos \n a los reales, pero con ojos de botón estos le \n ofrecen el cariño, la atención y la diversión que tanto \n desea. Sin embargo, este paraíso es en realidad \n una trampa Coraline pronto descubre que su \n Otra Madre una bruja oscura, atrae a los niños para \n robarles el alma. Coraline deberá recorrer diferentes caminos \n y A su vez tomar decisiones claves que cambiarán el rumbo \n de la historia. Cada elección la acerca a uno de sus \n cuatro finales distintos. ¿Serás tú quien \n rompa el ciclo… o quien quede atrapado en él?",
      300,
      50
    );
    dibujarBoton(boton_continuar_x, boton_continuar_y, boton_continuar_w, boton_continuar_h, "Continuar");
  }
  // encuentra puerta (usa boton1 y boton2)
  else if (estado == 2) {
    image(imagenes[2], 0, 0, width, height);
    fill(255);
    textSize(20);
    text("Coraline encuentra la puerta al Otro Mundo...", 250, 50);
    dibujarBoton(boton1_x, boton1_y, boton1_w, boton1_h, "Abrir la puerta");
    dibujarBoton(boton2_x, boton2_y, boton2_w, boton2_h, "No abrirla por miedo");
  }
  // coraline cae
  else if (estado == 3) {
    image(imagenes[3], 0, 0, width, height);
    fill(255);
    textSize(20);
    text("Coraline cae al Otro Mundo...", 200, 50);
    dibujarBoton(boton_continuar_x, boton_continuar_y, boton_continuar_w, boton_continuar_h, "Continuar");
  }
  // coraline cuarto (usa boton1 y boton2)
  else if (estado == 4) {
    image(imagenes[4], 0, 0, width, height);
    fill(255);
    textSize(20);
    text("Nota que es su cuarto pero un poco diferente. decide...", 250, 50);
    dibujarBoton(boton1_x, boton1_y, boton1_w, boton1_h);
    text("\n explorar las \n habitaciones", boton1_x + boton1_w / 2, boton1_y + boton1_h / 2);
    dibujarBoton(boton2_x, boton2_y, boton2_w, boton2_h, "buscar a sus padres");
  }
  // explora
  else if (estado == 5) {
    image(imagenes[5], 0, 0, width, height);
    fill(255);
    textSize(20);
    text("explora las habitaciones de la casa", 250, 50);
    dibujarBoton(boton_continuar_x, boton_continuar_y, boton_continuar_w, boton_continuar_h, "Continuar");
  }
  // encuentra el libro (usa boton1 y boton2)
  else if (estado == 6) {
    image(imagenes[6], 0, 0, width, height);
    fill(255);
    text("encuentra un libro extraño. Decide...", 250, 50);
    dibujarBoton(boton1_x, boton1_y, boton1_w, boton1_h, "ignorarlo por miedo");
    dibujarBoton(boton2_x, boton2_y, boton2_w, boton2_h, "abrirlo y leerlo");
  }
  // ignora el libro
  else if (estado == 7) {
    image(imagenes[7], 0, 0, width, height);
    fill(255);
    text(
      "sale por la puerta, se cruza con el vecino y dialoga con el",
      300,
      50
    );
    dibujarBoton(boton_continuar_x, boton_continuar_y, boton_continuar_w, boton_continuar_h, "Continuar");
  }
  // habla con bobinsky (usa boton1 y boton2)
  else if (estado == 8) {
    image(imagenes[8], 0, 0, width, height);
    fill(255);
    text(
      "El señor Bobinsky le dice que los ratones le quieren dar un mensaje",
      300,
      30
    );
    dibujarBoton(boton1_x, boton1_y, boton1_w, boton1_h, "los escucha");
    dibujarBoton(boton2_x, boton2_y, boton2_w, boton2_h, "los ignora");
  }
  // escucha a los ratones
  else if (estado == 9) {
    image(imagenes[9], 0, 0, width, height);
    fill(255);
    text(
      "\n Estos le cuentan la verdad sobre el mundo \n y le aconsejan que lea el libro",
      300,
      50
    );
    dibujarBoton(boton_continuar_x, boton_continuar_y, boton_continuar_w, boton_continuar_h, "buscar el libro");
  }
  // busca el libro
  else if (estado == 10) {
    image(imagenes[10], 0, 0, width, height);
    text("\n Abre el libro, lo lee completo \n y accede a las pistas", 300, 50);
    dibujarBoton(boton_continuar_x, boton_continuar_y, boton_continuar_w, boton_continuar_h, "Continuar");
  }
  // vuelve a leer el libro
  else if (estado == 11) {
    image(imagenes[11], 0, 0, width, height);
    text(
      "\n Coraline descubre que ella también es parte del bucle: \n no es la primera Coraline",
      300,
      50
    );
    dibujarBoton(boton_continuar_x, boton_continuar_y, boton_continuar_w, boton_continuar_h, "Continuar");
  }
  // final corto
  else if (estado == 12) {
    image(imagenes[12], 0, 0, width, height);
    text(
      "\n Coraline por miedo a adentrarse decide quedarse en su mundo \n FIN",
      300,
      50
    );
    dibujarBoton(boton_continuar_x, boton_continuar_y, boton_continuar_w, boton_continuar_h, "volver a inicio");
  }
  // fin flujo principal
  else if (estado == 13) {
    image(imagenes[13], 0, 0, width, height);
    dibujarBoton(boton_continuar_x, boton_continuar_y, boton_continuar_w, boton_continuar_h, "inicio");
  }
  // encuentra a la otra madre
  else if (estado == 14) {
    image(imagenes[14], 0, 0, width, height);
    text(
      "\n \n Coraline se encuentrala Otra Madre, \n con botones en los ojos \n pero mas amable y buena.",
      300,
      50
    );
    dibujarBoton(boton_continuar_x, boton_continuar_y, boton_continuar_w, boton_continuar_h, "Acepta quedarse");
  }
  // juego madre (usa boton1 y boton2)
  else if (estado == 15) {
    image(imagenes[15], 0, 0, width, height);
    text(
      "\nLa Otra Madre propone un juego para mantenerte “entretenida” \n Encontrar los ojos de los niños.",
      300,
      50
    );
    dibujarBoton(boton1_x, boton1_y, boton1_w, boton1_h, "comienza la busqueda");
    dibujarBoton(boton2_x, boton2_y, boton2_w, boton2_h, "negarse a jugar");
  }
  // encuentralibro2
  else if (estado == 16) {
    image(imagenes[16], 0, 0, width, height);
    text(
      "\n Coraline buscando los ojos de los niños \n encuentra un libro extraño",
      300,
      50
    );
    dibujarBoton(boton_continuar_x, boton_continuar_y, boton_continuar_w, boton_continuar_h, "Continuar");
  }
  // final3
  else if (estado == 17) {
    image(imagenes[17], 0, 0, width, height);
    text(
      "\n La otra madre la obliga a coserse los botones en los ojos \n y queda atrapada para siempre.Se convierte en \n otro espíritu atrapado.\n  FIN",
      300,
      50
    );
    dibujarBoton(boton_continuar_x, boton_continuar_y, boton_continuar_w, boton_continuar_h, "volver a inicio");
  }
  // ignora ratones
  else if (estado == 18) {
    image(imagenes[18], 0, 0, width, height);
    text("estos se enojan y deciden delatarte con tus padres. ", 300, 50);
    dibujarBoton(boton_continuar_x, boton_continuar_y, boton_continuar_w, boton_continuar_h, "continuar");
  }
  // final4
  else if (estado == 19) {
    image(imagenes[19], 0, 0, width, height);
    text(
      "Te cosen los ojos y nunca mas puedes volver al mundo real. \n FIN ",
      300,
      50
    );
    dibujarBoton(boton_continuar_x, boton_continuar_y, boton_continuar_w, boton_continuar_h, "volver a inicio");
  }
  // creditos
  else if (estado == 20) {
    image(imagenes[20], 0, 0, width, height);
    text("Hecho por:", 330, 160);
    textSize(15);
    text("\n Yazmin Zaldivia \n Nahiara Canale", 330, 190);
    textSize(20);
    text("Autor de la obra:", 330, 250);
    textSize(15);
    text("Neil Gaiman", 330, 280);
    dibujarBoton(boton_continuar_x, boton_continuar_y, boton_continuar_w, boton_continuar_h, "volver a inicio");
  }
  textSize(20);
}

function dibujarBoton(x, y, w, h, texto) {
  // Función global, no es un método de clase.
  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    fill(4, 0, 46);
  } else {
    fill(31, 20, 102);
  }
  rect(x, y, w, h, 15);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(20);
  text(texto, x + w / 2, y + h / 2);
}

function mousePressed() {
  // Enfoque 100% Estructurado: usar coordenadas explícitas o variables primitivas

  // inicio: botones de portada (estado 0)
  if (estado == 0) {
    // "JUEGO NUEVO" (Usa coordenadas explícitas)
    if (mouseX > 100 && mouseX < 300 && mouseY > 200 && mouseY < 260) {
      sound.play();
      estado = 1;
      return;
    }
    // "CRÉDITOS" (Usa coordenadas explícitas)
    if (mouseX > 100 && mouseX < 300 && mouseY > 300 && mouseY < 360) {
      sound.play();
      estado = 20;
      return;
    }
  }

  // introducción (Usa variables primitivas de 'Continuar')
  else if (estado == 1) {
    if (mouseX > boton_continuar_x && mouseX < boton_continuar_x + boton_continuar_w && 
        mouseY > boton_continuar_y && mouseY < boton_continuar_y + boton_continuar_h) {
      sound.play();
      estado = 2;
      return;
    }
  }

  // encuentra la puerta (Usa variables primitivas boton1 y boton2)
  else if (estado == 2) {
    // entrar por la puerta (boton1 - Izquierda)
    if (
      mouseX > boton1_x && mouseX < boton1_x + boton1_w &&
      mouseY > boton1_y && mouseY < boton1_y + boton1_h
    ) {
      sound.play();
      estado = 3;
      return;
    }
    // no entrar por miedo (boton2 - Derecha)
    if (
      mouseX > boton2_x && mouseX < boton2_x + boton2_w &&
      mouseY > boton2_y && mouseY < boton2_y + boton2_h
    ) {
      sound.play();
      estado = 12;
      return;
    }
  }

  // coraline cae (Usa variables primitivas de 'Continuar')
  else if (estado == 3) {
    if (mouseX > boton_continuar_x && mouseX < boton_continuar_x + boton_continuar_w && 
        mouseY > boton_continuar_y && mouseY < boton_continuar_y + boton_continuar_h) {
      estado = 4;
      return;
    }
  }

  // coraline cuarto (Usa variables primitivas boton1 y boton2)
  else if (estado == 4) {
    // explorar (boton1 - Izquierda)
    if (
      mouseX > boton1_x && mouseX < boton1_x + boton1_w &&
      mouseY > boton1_y && mouseY < boton1_y + boton1_h
    ) {
      sound.play();
      estado = 5;
      return;
    }
    // buscar padres (boton2 - Derecha)
    if (
      mouseX > boton2_x && mouseX < boton2_x + boton2_w &&
      mouseY > boton2_y && mouseY < boton2_y + boton2_h
    ) {
      sound.play();
      estado = 14;
      return;
    }
  }

  // explora la casa (Usa variables primitivas de 'Continuar')
  else if (estado == 5) {
    if (mouseX > boton_continuar_x && mouseX < boton_continuar_x + boton_continuar_w && 
        mouseY > boton_continuar_y && mouseY < boton_continuar_y + boton_continuar_h) {
      sound.play();
      estado = 6;
      return;
    }
  }

  // encuentra el libro (Usa variables primitivas boton1 y boton2)
  else if (estado == 6) {
    // ignorarlo por miedo (boton1 - Izquierda)
    if (
      mouseX > boton1_x && mouseX < boton1_x + boton1_w &&
      mouseY > boton1_y && mouseY < boton1_y + boton1_h
    ) {
      estado = 7;
      return;
    }
    // abrirlo y leerlo (boton2 - Derecha)
    if (
      mouseX > boton2_x && mouseX < boton2_x + boton2_w &&
      mouseY > boton2_y && mouseY < boton2_y + boton2_h
    ) {
      sound.play();
      estado = 10;
      return;
    }
  }

  // sale por la puerta trasera (Usa variables primitivas de 'Continuar')
  else if (estado == 7) {
    if (mouseX > boton_continuar_x && mouseX < boton_continuar_x + boton_continuar_w && 
        mouseY > boton_continuar_y && mouseY < boton_continuar_y + boton_continuar_h) {
      sound.play();
      estado = 8;
      return;
    }
  }

  // habla con bobinsky (Usa variables primitivas boton1 y boton2)
  else if (estado == 8) {
    // escucha ratones (boton1 - Izquierda)
    if (
      mouseX > boton1_x && mouseX < boton1_x + boton1_w &&
      mouseY > boton1_y && mouseY < boton1_y + boton1_h
    ) {
      sound.play();
      estado = 9;
      return;
    }
    // los ignora (boton2 - Derecha)
    if (
      mouseX > boton2_x && mouseX < boton2_x + boton2_w &&
      mouseY > boton2_y && mouseY < boton2_y + boton2_h
    ) {
      sound.play();
      estado = 18;
      return;
    }
  }

  // escucha ratones (Usa variables primitivas de 'Continuar')
  else if (estado == 9) {
    if (mouseX > boton_continuar_x && mouseX < boton_continuar_x + boton_continuar_w && 
        mouseY > boton_continuar_y && mouseY < boton_continuar_y + boton_continuar_h) {
      sound.play();
      estado = 10;
      return;
    }
  }

  // busca libro (Usa variables primitivas de 'Continuar')
  else if (estado == 10) {
    if (mouseX > boton_continuar_x && mouseX < boton_continuar_x + boton_continuar_w && 
        mouseY > boton_continuar_y && mouseY < boton_continuar_y + boton_continuar_h) {
      sound.play();
      estado = 11;
      return;
    }
  }

  // vuelve a leer libro (Usa variables primitivas de 'Continuar')
  else if (estado == 11) {
    if (mouseX > boton_continuar_x && mouseX < boton_continuar_x + boton_continuar_w && 
        mouseY > boton_continuar_y && mouseY < boton_continuar_y + boton_continuar_h) {
      sound.play();
      estado = 13;
      return;
    }
  }

  // final corto (Usa variables primitivas de 'Continuar')
  else if (estado == 12) {
    if (mouseX > boton_continuar_x && mouseX < boton_continuar_x + boton_continuar_w && 
        mouseY > boton_continuar_y && mouseY < boton_continuar_y + boton_continuar_h) {
      sound.play();
      estado = 0;
      return;
    }
  }

  // fin flujo principal (Usa variables primitivas de 'Continuar')
  else if (estado == 13) {
    if (mouseX > boton_continuar_x && mouseX < boton_continuar_x + boton_continuar_w && 
        mouseY > boton_continuar_y && mouseY < boton_continuar_y + boton_continuar_h) {
      sound.play();
      estado = 0;
      return;
    }
  }

  // encuentra a la otra madre (Usa variables primitivas de 'Continuar')
  else if (estado == 14) {
    if (mouseX > boton_continuar_x && mouseX < boton_continuar_x + boton_continuar_w && 
        mouseY > boton_continuar_y && mouseY < boton_continuar_y + boton_continuar_h) {
      sound.play();
      estado = 15;
      return;
    }
  }

  // juego madre (Usa variables primitivas boton1 y boton2)
  else if (estado == 15) {
    // comienza la busqueda (boton1 - Izquierda)
    if (
      mouseX > boton1_x && mouseX < boton1_x + boton1_w &&
      mouseY > boton1_y && mouseY < boton1_y + boton1_h
    ) {
      sound.play();
      estado = 16;
      return;
    }
    // negarse a jugar (boton2 - Derecha)
    if (
      mouseX > boton2_x && mouseX < boton2_x + boton2_w &&
      mouseY > boton2_y && mouseY < boton2_y + boton2_h
    ) {
      sound.play();
      estado = 17;
      return;
    }
  }

  // encuentra libro2 (Usa variables primitivas de 'Continuar')
  else if (estado == 16) {
    if (mouseX > boton_continuar_x && mouseX < boton_continuar_x + boton_continuar_w && 
        mouseY > boton_continuar_y && mouseY < boton_continuar_y + boton_continuar_h) {
      sound.play();
      estado = 10;
      return;
    }
  }

  // final3 (Usa variables primitivas de 'Continuar')
  else if (estado == 17) {
    if (mouseX > boton_continuar_x && mouseX < boton_continuar_x + boton_continuar_w && 
        mouseY > boton_continuar_y && mouseY < boton_continuar_y + boton_continuar_h) {
      sound.play();
      estado = 0;
      return;
    }
  }

  // ignora ratones (Usa variables primitivas de 'Continuar')
  else if (estado == 18) {
    if (mouseX > boton_continuar_x && mouseX < boton_continuar_x + boton_continuar_w && 
        mouseY > boton_continuar_y && mouseY < boton_continuar_y + boton_continuar_h) {
      sound.play();
      estado = 19;
      return;
    }
  }

  // final4 (Usa variables primitivas de 'Continuar')
  else if (estado == 19) {
    if (mouseX > boton_continuar_x && mouseX < boton_continuar_x + boton_continuar_w && 
        mouseY > boton_continuar_y && mouseY < boton_continuar_y + boton_continuar_h) {
      estado = 0;
      return;
    }
  }

  // creditos (Usa variables primitivas de 'Continuar')
  else if (estado == 20) {
    if (mouseX > boton_continuar_x && mouseX < boton_continuar_x + boton_continuar_w && 
        mouseY > boton_continuar_y && mouseY < boton_continuar_y + boton_continuar_h) {
      sound.play();
      estado = 0;
      return;
    }
  }
}
