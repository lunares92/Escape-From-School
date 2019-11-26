//recursos
var background = new Image();
background.src = "fundo jogo escape.png";

var monster = new Image();
monster.src = "monster.png";
//variaveis do jogo
var canvas, ctx, ALTURA, mvLeft = false, mvRight = false, mvUp = false, movProfDir, movProfEsq, frames = 0, maxPulos = 3, estadoAtual,
estados = { jogar: 0,jogando: 1, perdeu: 2, ganhou: 3, pergunta: 4},
chao = {y: 250, altura: 50, cor: "#D2691E",
    desenha: function(){
      ctx.fillStyle = this.cor;
      ctx.fillRect(0,this.y, LARGURA, this.altura);
    }
},

parede = {y: 200, altura: 100, cor: "#FF8C00",
    desenha: function(){
      ctx.fillStyle = this.cor;
      ctx.fillRect(0,this.y, LARGURA, this.altura);
    }
},
personagem = { x: 10, y: 250, altura: 25, largura: 15, cor: "#00acee", gravidade: 0.20001, velocidade: 0, forcaDoPulo: 4, qntPulos: 0,  
//gravidade
  atualiza: function(){
    this.velocidade += this.gravidade;
    this.y += this.velocidade;
    if(this.y > chao.y - this.altura){
        this.y = chao.y - this.altura;
        this.qntPulos = 0;
        this.velocidade = 0;
    }
    //estados
    if(estadoAtual == estados.perdeu){
    this.x = 10;
    }
    else if(estadoAtual == estados.ganhou){
    this.x = 10;
    }

//tentativa colisão
if(this.x >=70 && this.x <= 105){
 
      if(this.y> mesa1.y - this.altura){
        
     this.y = mesa1.y - this.altura
      
   }
  }
  if(this.x >=165 && this.x <= 200){
      if(this.y> mesa2.y - this.altura){
      this.y = mesa2.y - this.altura
    }
  }
  if(this.x >=190 && this.x <= 225){
      if(this.y> mesa4.y - this.altura){
      this.y = mesa4.y - this.altura
    }
  }
  if(this.x >=390 && this.x <= 425){
      if(this.y> mesa5.y - this.altura){
      this.y = mesa5.y - this.altura
    }
  }
  if(this.x >=470 && this.x <= 505){
      if(this.y> mesa6.y - this.altura){
      this.y = mesa6.y - this.altura
      
    }
  }
  if(this.x >495 && this.x <= 520){
      if(this.y> mesa8.y - this.altura){
      this.y = mesa8.y - this.altura
      
    }
  }
  if(this.x >=650 && this.x <= 685){
      if(this.y> mesa9.y - this.altura){
      this.y = mesa9.y - this.altura
    }
  }
  if(this.x >=675 && this.x <= 710){
      if(this.y> mesa11.y - this.altura){
      this.y = mesa11.y - this.altura
    }
  }
  if(this.x >=700 && this.x <= 735){
      if(this.y> mesa13.y - this.altura){
      this.y = mesa13.y - this.altura
    }
  }
  if(this.x >=840 && this.x <= 875){
      if(this.y> mesa14.y - this.altura){
      this.y = mesa14.y - this.altura
      
    }
  }
  if(this.x >=930 && this.x <= 965){
      if(this.y> mesa15.y - this.altura){
      this.y = mesa15.y - this.altura
    }
  }
  if(this.x >=1030 && this.x <= 1065){
      if(this.y> mesa16.y - this.altura){
      this.y = mesa16.y - this.altura
      
    }
  }
  if(this.x >=1190 && this.x <= 1125){
      if(this.y> mesa17.y - this.altura){
      this.y = mesa17.y - this.altura
    }
  }
  if(this.x >=290 && this.x <= 325){
      if(this.y> armario1.y - this.altura){
      this.y = armario1.y - this.altura
      
    }
  }
  if(this.x >520 && this.x <= 555){
      if(this.y> armario2.y - this.altura){
      this.y = armario2.y - this.altura
    }
  }
  if(this.x >230 && this.x < 290){
      if(this.y> ventilador2.y - this.altura){
      this.y = ventilador2.y - this.altura
    }
  }
  

  } ,  
//pulo ou mvUp
  pula: function(){
    if(this.qntPulos < maxPulos){
      this.velocidade = -this.forcaDoPulo;
      this.qntPulos++;               
  }
  },
  
  desenha: function(){
    ctx.fillStyle = this.cor;
    ctx.fillRect(this.x, this.y, this.largura, this.altura);
    //ctx.drawImage(this.img, 0, 0,65, 65, this.x, this.y10, 40, 40);
  } 
};
var fundo = {
  img: background,
  x: 0,
  y: 0,
  width: 1200,
  height: 300,
  desenha: function(){
    ctx.fillStyle = this.img;
    ctx.drawImage(this.img, this.x, this.y,);
  } 
  }
//apartir daqui serão os obstáculos
var mesa1 = {x: 80, y: 230, altura: 20, largura: 25, cor: "#DAA520",         //MESA1
    desenha: function(){
      ctx.fillStyle = this.cor;
      ctx.fillRect(this.x, this.y, this.largura, this.altura);
    }
};
var mesa2 = {x: 175, y: 230, altura: 20, largura: 25, cor: "#00CED1",           //MESA2
    desenha: function(){
      ctx.fillStyle = this.cor;
      ctx.fillRect(this.x, this.y, this.largura, this.altura);
    }
};
var mesa3 = {x: 200, y: 230,  altura: 20, largura: 25, cor: "#DAA520",     //MESA3
    desenha: function(){
      ctx.fillStyle = this.cor;
      ctx.fillRect(this.x, this.y, this.largura, this.altura);
    }
};
var mesa4 = { x: 200, y: 210, altura: 20, largura: 25, cor: "#00CED1",        //MESA4
    desenha: function(){
      ctx.fillStyle = this.cor;
      ctx.fillRect(this.x, this.y, this.largura, this.altura);
    }
};
var mesa5 = { x: 400, y: 230, altura: 20, largura: 25, cor: "#DAA520",              //MESA5
    desenha: function(){
      ctx.fillStyle = this.cor;
      ctx.fillRect(this.x, this.y, this.largura, this.altura);
    }
};
var mesa6 = {x: 480, y: 230, altura: 20, largura: 25, cor: "#00CED1",           //MESA6
    desenha: function(){
      ctx.fillStyle = this.cor;
      ctx.fillRect(this.x, this.y, this.largura, this.altura);
    }
};
var mesa7 = {x: 505, y: 230, altura: 20, largura: 25, cor: "#DAA520",           //MESA7
    desenha: function(){
      ctx.fillStyle = this.cor;
      ctx.fillRect(this.x, this.y, this.largura, this.altura);
    }
};
var mesa8 = {x: 505, y: 210, altura: 20, largura: 25, cor: "#00CED1",           //MESA8
    desenha: function(){
      ctx.fillStyle = this.cor;
      ctx.fillRect(this.x, this.y, this.largura, this.altura);
    }
};
var mesa9 = {x: 660, y: 230, altura: 20, largura: 25, cor: "#DAA520",             //MESA9
    desenha: function(){
      ctx.fillStyle = this.cor;
      ctx.fillRect(this.x, this.y, this.largura, this.altura);
    }
};
var mesa10 = {x: 685, y: 230, altura: 20, largura: 25, cor: "#00CED1",          //MESA10
    desenha: function(){
      ctx.fillStyle = this.cor;
      ctx.fillRect(this.x, this.y, this.largura, this.altura);
    }
};
var mesa11 = {x: 685, y: 210, altura: 20, largura: 25, cor: "#DAA520",            //MESA11
    desenha: function(){
      ctx.fillStyle = this.cor;
      ctx.fillRect(this.x, this.y, this.largura, this.altura);
    }
};
var mesa12 = { x: 710, y: 230, altura: 20, largura: 25, cor: "#00CED1",         //MESA12
    desenha: function(){
      ctx.fillStyle = this.cor;
      ctx.fillRect(this.x, this.y, this.largura, this.altura);
    }
};
var mesa13 = {x: 710, y: 210, altura: 20, largura: 25, cor: "#808000",              //MESA13
    desenha: function(){
      ctx.fillStyle = this.cor;
      ctx.fillRect(this.x, this.y, this.largura, this.altura);
    }
};
var mesa14 = { x: 850, y: 230, altura: 20, largura: 25, cor: "#B0E0E6",               //MESA14
    desenha: function(){
      ctx.fillStyle = this.cor;
      ctx.fillRect(this.x, this.y, this.largura, this.altura);
    }
};
var mesa15 = {x: 940, y: 230,  altura: 20, largura: 25, cor: "#808000",             //MESA15
    desenha: function(){
      ctx.fillStyle = this.cor;
      ctx.fillRect(this.x, this.y, this.largura, this.altura);
    }
};
var mesa16 = { x: 1040, y: 230, altura: 20, largura: 25, cor: "#B0E0E6",              //MESA16
    desenha: function(){
      ctx.fillStyle = this.cor;
      ctx.fillRect(this.x, this.y, this.largura, this.altura);
    }
};
var mesa17 = {  x: 1100,y: 230, altura: 20, largura: 25, cor: "#808000",            //MESA17

    desenha: function(){
      ctx.fillStyle = this.cor;
      ctx.fillRect(this.x, this.y, this.largura, this.altura);
    }
};
//ARMARIOS
var armario1 = {x: 300, y: 200,  altura: 50,  largura: 25, cor: "#808080",
    desenha: function(){
      ctx.fillStyle = this.cor;
      ctx.fillRect(this.x, this.y, this.largura, this.altura);
    }
};
var armario2 = { x: 530, y: 200, altura: 50, largura: 25, cor: "#808080",

    desenha: function(){
      ctx.fillStyle = this.cor;
      ctx.fillRect(this.x, this.y, this.largura, this.altura);
    }
};
//VENTILADORES
var ventilador1 = {x: 600, y: 160, altura: 5, largura: 50, cor: "#363636",
    desenha: function(){
      ctx.fillStyle = this.cor;
      ctx.fillRect(this.x, this.y, this.largura, this.altura);
    }
};
var ventilador2 = {x: 240, y: 200, altura: 5, largura: 50, cor: "#363636",
    desenha: function(){
      ctx.fillStyle = this.cor;
      ctx.fillRect(this.x, this.y, this.largura, this.altura);
    }
};
var ventilador3 = {x: 425, y: 170, altura: 5, largura: 50, cor: "#363636",
    desenha: function(){
      ctx.fillStyle = this.cor;
      ctx.fillRect(this.x, this.y, this.largura, this.altura);
    }
};
var ventilador4 = {x: 860, y: 200, altura: 5, largura: 50, cor: "#363636",
   desenha: function(){
      ctx.fillStyle = this.cor;
      ctx.fillRect(this.x, this.y, this.largura, this.altura);
    }
};
//objetos com movimentos
professor1 = {x: 570, y: 225, altura: 25, largura: 12, xVel: 0.5, cor: "#FFFAFA",
    movimento: function(){
      this.x = this.x + this.xVel;
       if (this.x > 640 || this.x < 565){
        this.xVel = -this.xVel;
     } 
},
    desenha: function(){
      ctx.fillStyle = this.cor;
      ctx.fillRect(this.x, this.y, this.largura, this.altura);
    },  
},
professor2 = { x: 325, y: 225, altura: 25, largura: 12, xVel: 0.5, cor: "#FFFAFA",
    movimento: function(){
       this.x = this.x + this.xVel;
       if (this.x > 388 || this.x < 325){
        this.xVel = -this.xVel;
     }
},
    desenha: function(){
      ctx.fillStyle = this.cor;
      ctx.fillRect(this.x, this.y, this.largura, this.altura);
    }
},
professor3 = {x: 745, y: 225, altura: 25, largura: 12, xVel: 0.5, cor: "#FFFAFA",
    movimento: function(){
       this.x = this.x + this.xVel;
     if (this.x > 830 || this.x < 740){
      this.xVel = -this.xVel;
     }
},
    desenha: function(){
      ctx.fillStyle = this.cor;
      ctx.fillRect(this.x, this.y, this.largura, this.altura);
    }
}, 
professor4 = {x: 902, y: 225, altura: 25, largura: 12, xVel: 0.5, cor: "#FFFAFA",
movimento: function(){
  this.x = this.x + this.xVel;
if (this.x > 925 || this.x < 880){
 this.xVel = -this.xVel;
}
},
    desenha: function(){
      ctx.fillStyle = this.cor;
      ctx.fillRect(this.x, this.y, this.largura, this.altura);
    }
},
professor5 = {x: 970, y: 225, altura: 25, largura: 12, xVel: 0.5, cor: "#FFFAFA",
movimento: function(){
  this.x = this.x + this.xVel;
if (this.x > 1020 || this.x < 969){
 this.xVel = -this.xVel;
}
},
    desenha: function(){
      ctx.fillStyle = this.cor;
      ctx.fillRect(this.x, this.y, this.largura, this.altura);
    }
},
portaFinalFase1 = { x: 1170, y: 210, altura: 40, largura: 25, cor: "#D2691E",
    atualiza: function(){
      if(personagem.x == this.x){
        estadoAtual = estados.ganhou
      }
    },
    desenha: function(){
      ctx.fillStyle = this.cor;
      ctx.fillRect(this.x, this.y, this.largura, this.altura);
    }
};

//Arrays
  var sprites = [];
var mesa = [];
var armario = [];
var ventilador = [];

// FUNÇÕES GERAIS
//colisão
function colisao(){
  if(personagem.x + personagem.largura > professor1.x  && 
  personagem.x < professor1.x + professor1.largura &&
  personagem.y + personagem.altura > professor1.y &&
  personagem.y < professor1.y + professor1.altura ){
    estadoAtual = estados.perdeu
    personagem.cor = "#f00";
  }
  else{ 
    personagem.cor = "#0000CD"
  }
if(personagem.x + personagem.largura > professor2.x  && 
  personagem.x < professor2.x + professor2.largura &&
  personagem.y + personagem.altura > professor2.y &&
  personagem.y < professor2.y + professor2.altura ){
    estadoAtual = estados.perdeu
  
  }
  else{ 
    personagem.cor = "#0000CD"
  }

  if(personagem.x + personagem.largura > professor3.x  && 
  personagem.x < professor3.x + professor3.largura &&
  personagem.y + personagem.altura > professor3.y &&
  personagem.y < professor3.y + professor3.altura ){
    estadoAtual = estados.perdeu
    
  }
  else{ 
    personagem.cor = "#0000CD"
  }

if(personagem.x + personagem.largura > professor4.x  && 
  personagem.x < professor4.x + professor4.largura &&
  personagem.y + personagem.altura > professor4.y &&
  personagem.y < professor4.y + professor4.altura ){
    estadoAtual = estados.perdeu
    
  }
  else{ 
    personagem.cor = "#0000CD"
  }

if(personagem.x + personagem.largura > professor5.x  && 
  personagem.x < professor5.x + professor5.largura &&
  personagem.y + personagem.altura > professor5.y &&
  personagem.y < professor5.y + professor5.altura ){
    estadoAtual = estados.perdeu
    
  }
  else{ 
    personagem.cor = "#0000CD"
  }
}


//movimentação
// seta esquerda = 37, seta direita = 39, seta cima = 38, seta baixo = 40,
function teclaDown (e){ 
  var key = e.keyCode; 
  switch(key){ 
    case 38: mvUp = true; 
    break; 
    case 37: mvLeft = true; 
    break; 
    case 39: mvRight = true; 
    break; 
    } 
    } 
function teclaUp (e){ 
  var key = e.keyCode; 
  switch(key){ 
    case 38: mvUp = false; 
    break;
    case 37: mvLeft = false; 
    break; 
    case 39: mvRight = false; 
    break; 
  } 
} 
function movimento_personagem (event){ 
  
  if (mvUp) { 
    if(estadoAtual == estados.jogando){
    personagem.pula(); 
    }
    
    else if (estadoAtual == estados.jogar){
    estadoAtual = estados.jogando;
    }
    else if (estadoAtual == estados.perdeu){
      estadoAtual = estados.jogar;
      personagem.velocidade = 0;
       personagem.y = 0;
    }
    else if (estadoAtual == estados.ganhou){
      estadoAtual = estados.jogar
    }
  }
  if (mvLeft) { 
    personagem.x-=2; 
    }
  if (mvRight) { 
    personagem.x+=2; 
    } 
    //limites da tela
    personagem.x = Math.max(0, Math.min(1200 - personagem.largura, personagem.x));
 
}

//corpo do jogo
function main() {
  ALTURA = window.innerHeight;
  LARGURA = window.innerWidth;

  if(LARGURA >=500){
    LARGURA = 1200;
    ALTURA = 300;
  }
  canvas = document.createElement("canvas");
  canvas.width = LARGURA;
  canvas.height = ALTURA;
  canvas.style.border = "1px solid #000";

  ctx = canvas.getContext("2d");
  document.body.appendChild(canvas);
  window.addEventListener("keydown",teclaDown);
  window.addEventListener("keyup",teclaUp);
  
 estadoAtual = estados.jogar
      
 
 

  roda();
}
//loop
function roda() {
  atualiza();
  desenha();

  window.requestAnimationFrame(roda, atualiza);
}
//upadate
function atualiza() {
  frames++; 
  
  personagem.atualiza();
  movimento_personagem();
  
 if(estadoAtual == estados.jogando){
  professor1.movimento();
  professor2.movimento();
  professor3.movimento();
  professor4.movimento();
  professor5.movimento();
  portaFinalFase1.atualiza();
  colisao();
}
}
//drawn
function desenha() {
  ctx.fillStyle = "#00BFFF";
  ctx.fillRect(0,0, LARGURA, ALTURA);
  
  
  if (estadoAtual == estados.jogar){
    ctx.fillStyle = "green";
   ctx.fillRect(LARGURA /2 - 125, ALTURA /2 - 50, 250, 100);
   ctx.beginPath();    
  ctx.font="25px Verdana";
  ctx.fillStyle="blue";  
   ctx.fillText(" Pule para iniciar ",LARGURA /2 -115 ,ALTURA /2 );
  ctx.fillStyle="red";
  ctx.fillText("Escape From School",475,50);
  
  }
  else if (estadoAtual == estados.perdeu){
    ctx.fillStyle = "red";
   ctx.fillRect(LARGURA /2 - 100, ALTURA /2 - 50, 200, 100);
   ctx.beginPath();  
   ctx.fillStyle="blue";  
   ctx.fillText(" Voce Perdeu! ",LARGURA /2 -90,ALTURA /2 );
  ctx.font="25px Verdana";
  ctx.fillStyle="red";
  ctx.fillText("Escape From School",475,50);
  }
  else if (estadoAtual == estados.jogando) {
  parede.desenha();
  chao.desenha();
  fundo.desenha();
  personagem.desenha();
  mesa1.desenha();
  mesa2.desenha();
  mesa3.desenha();
  mesa4.desenha();
  mesa5.desenha();
  mesa6.desenha();
  mesa7.desenha();
  mesa8.desenha();
  mesa9.desenha();
  mesa10.desenha();
  mesa11.desenha();
  mesa12.desenha();
  mesa13.desenha();
  mesa14.desenha();
  mesa15.desenha();
  mesa16.desenha();
  mesa17.desenha();

  armario1.desenha();
  armario2.desenha();

  ventilador1.desenha();
  ventilador2.desenha();
  ventilador3.desenha();
  ventilador4.desenha();

  professor1.desenha();
  professor2.desenha();
  professor3.desenha();
  professor4.desenha();
  professor5.desenha();
 //indicador de fase1 
  ctx.beginPath();    
  ctx.font="18px Verdana";
  ctx.fillStyle="blue";
  ctx.fillText("Fase 1",50,100);
  //final fase 1
  portaFinalFase1.desenha();
  ctx.beginPath();    
  ctx.font="25px Verdana";
  ctx.fillStyle="red";
  ctx.fillText("Escape From School",475,50);
}
else if(estadoAtual == estados.ganhou){
  ctx.fillStyle = "yellow";
  ctx.fillRect(LARGURA /2 - 250, ALTURA /2 - 50, 500, 100);
  ctx.font="25px Verdana";
  ctx.fillStyle="blue";  
  ctx.fillText(" Voce Perdeu ",LARGURA /2 -75,ALTURA /2 );
  ctx.fillText("pois fugir da escola nao e uma vitoria" , LARGURA/2 - 230, ALTURA/2 + 20)
  ctx.fillStyle="red";
  ctx.fillText("Escape From School",475,50);
   //colocar boton para estado jogar 2
}


}
alert("use as setas do teclado para jogar")
//inicialia o jogo
main();