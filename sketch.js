var tela = 1;

var xIniciar = 260; yIniciar = 160; alturaIniciar = 45; larguraIniciar = 115;

var xInstrucoes = 120; yInstrucoes = 220; alturaInstrucoes = 45; larguraInstrucoes = 160

var xCreditos = 390; yCreditos = 247; alturaCreditos = 45; larguraCreditos = 115;

var xVoltar = 525; yVoltar = 310; alturaVoltar = 20; larguraVoltar = 50;



let img;
function preload() {
  imgMenu = loadImage('planomenu.png');
  imgTela = loadImage('planodefundo.png');
  imgBarraca = loadImage('barraca.png');
  imgDenise = loadImage('fotodenise.png');
  imgRafaella = loadImage('fotorafaella.png');
  
  
}

function setup() {
  createCanvas(625, 350);  
}

function draw() {
  
  // Tela Inicial - Menu
  if (tela == 1){
    image(imgMenu, 0, 0);{
      // Título do Jogo      
      textStyle(BOLD);
      textSize(30);
      fill(29, 17, 83);
      textAlign(CENTER, TOP);
      text('Barraca das Frutas', 0, 70, width);
      
      // Botão Executar jogo            
      if (mouseX > xIniciar && mouseX < xIniciar+larguraIniciar && mouseY > yIniciar && mouseY < yIniciar+alturaIniciar){
        noStroke();
        fill(77, 252,77);
        rect(xIniciar, yIniciar, larguraIniciar, alturaIniciar, 20);
        if (mouseIsPressed){
          tela = 2;
        }
      }
      textStyle(BOLDITALIC);
      textSize(28);
      fill(17, 83, 36);
      text('Iniciar', 320, 170);
      
      // Botão Como jogar            
      if (mouseX > xInstrucoes && mouseX < xInstrucoes+larguraInstrucoes && mouseY > yInstrucoes && mouseY < yInstrucoes+alturaInstrucoes){
        noStroke();
        fill(237, 215, 50);
        rect(xInstrucoes, yInstrucoes, larguraInstrucoes, alturaInstrucoes, 20);
        if (mouseIsPressed){
          tela = 3;
        }
      }
      textStyle(BOLDITALIC);
      textSize(24);
      fill(237, 43, 37);
      text('Como Jogar', 200, 230);
          
      // Botão Créditos
      if (mouseX > xCreditos && mouseX < xCreditos+larguraCreditos && mouseY > yCreditos && mouseY < yCreditos+alturaCreditos){
        noStroke();
        fill(219, 175, 228);
        rect(xCreditos, yCreditos, larguraCreditos, alturaCreditos, 20);
        if (mouseIsPressed){
          tela = 4;
        }
      }
      textStyle(BOLDITALIC);
      textSize(22);
      fill(0);
      text('Créditos', 450, 260);      
      
    }        
  } // Fim da tela1
  
  // Tela de Instruções sobre o jogo
  if (tela == 3){
    image(imgMenu, 0, 0);
    
    textAlign(CENTER);
    textStyle(BOLD);
    textSize(28);
    fill(29, 17, 83);
    text("Como Jogar",0,70,width);
    
    textSize(16);
    fill(29, 17, 83);
    textAlign(CENTER);
    text(" > Leia as sílabas e tente descobrir qual é a fruta;\n\n> Use o mouse para mover as sílabas\ne formar o nome da fruta;\n\n> Se o nome estiver correto, a fruta aparecerá\nna barraca do seu Antônio.", 0,140, width)
    
            
    fill(237, 215, 50);
    rect(xVoltar, yVoltar, larguraVoltar, alturaVoltar, 20);
    noStroke();
 
      
    if (mouseX > xVoltar && mouseX < xVoltar+larguraVoltar && mouseY > yVoltar && mouseY < yVoltar+alturaVoltar){      
      if (mouseIsPressed){
        tela = 1;
      }   
    }
    
  }
  
  // Tela Iniciar o Jogo
  if (tela == 2){
    background(184, 211, 255);
    image(imgBarraca, 320, 60);
    
    
    textAlign(CENTER, CENTER);
    textSize(30);
    text('Em construção', 0, 37, width);
    
    
    textAlign(LEFT);
    textSize(18);
    fill(0);
    text('Seu Antônio está triste porque\nas suas frutas desapareceram.\n\nVamos ajudar a encontrá-las?', 40, 145);
    
      
    
    fill(237, 215, 50);
    rect(xVoltar, yVoltar, larguraVoltar, alturaVoltar, 20);
    noStroke();
  
      
    if (mouseX > xVoltar && mouseX < xVoltar+larguraVoltar && mouseY > yVoltar && mouseY < yVoltar+alturaVoltar){      
      if (mouseIsPressed){
        tela = 1;
      }   
    }    
  }
  
  if (tela == 4){
    // Tela Créditos
    image(imgTela, 0, 0);{
           
    rect(20, 20, 585, 320);
    noStroke();
    fill(29, 17, 83);{
    textAlign(CENTER,TOP);
    textSize(20);
    text("Informações e créditos:", 0, 50, width);
          
    image(imgDenise, 420, 180);
    image(imgRafaella, 115, 180);
            
    textAlign(CENTER);
    textSize(12);
      
    text("Rafaella Hochscheidt - Consultora\nPedagoga, Universidade Potiguar, 2016", 145, 270);
    text("Denise Mendonça - Programadora\nGraduanda em Ciências e Tecnologia, UFRN", 445, 270);
      
    textAlign(LEFT);
    textSize(14);
    text("              Barraca das Frutas é um jogo educacional pensado para contribuir com\nque alunos do 2º ano do Ensino Fundamental exercitem a formação silábica das\npalavras, em conformidade com as habilidades BNC EF02LP04 e EF02LP05. A\ntemática de frutas foi escolhida com o objetivo de ser mais atrativo por reunir\num vocabulário comum na rotina de crianças.", 40, 85);
     
    }
      
    //Botão voltar ao Menu Inicial
         
      
    rect(xVoltar, yVoltar, larguraVoltar, alturaVoltar, 20);
    fill(237, 215, 50);
    noStroke();
  
      
    if (mouseX > xVoltar && mouseX < xVoltar+larguraVoltar && mouseY > yVoltar && mouseY < yVoltar+alturaVoltar){      
      if (mouseIsPressed){
        tela = 1;
      }   
    }   
  } // Fim da tela4
  }
}