var moedas = 0;
var rodadabobo = 1;
var atk = 0;
var def = 0;
var atkv = 0;
var defv = 0;
var chave = 0;
var diamante = 0;

var fimdejogo = 1;

var espada = 1;

var vida = 100;
const progresso = document
 .querySelector(".barra2 div")

var vidarei = 100;
const progressorei = document
 .querySelector(".barrarei div")

var xp = 0;
const progresso3 = document
 .querySelector(".barra3 div")

var xprei = 1;


var mana = 100;
const progresso4 = document
 .querySelector(".barra4 div")

var turnoratatosk = 2;
var turnocarpas = 2;
var turnosopro = 2;
var turnoryujin = 2;

var roundrex = 0;
var ataquerex = 1;

/* INÍCIO EASTER EGG*/
function ganharmoedas() {

 alert("Você achou um Easter Egg");

 document.getElementById(
   "idresultado").innerHTML =
  "⚠️Você ganhou 500 moedas⚠️";

 document.getElementById(
   "idstatus").innerHTML =
  "Você achou um Easter Egg";

 moedas = 500;
 document.getElementById(
   "idmoedas").innerHTML =
  "🪙 Moedas: " + moedas;
 document.getElementById(
   "barramoedas").innerHTML =
  "🪙 Moedas: " + moedas;

  chave = 500;

  document.getElementById(
    "idchave").innerHTML =
   "🔑 Chaves: " + chave;
  document.getElementById(
    "barrachaves").innerHTML =
   "🔑 Chaves: " + chave;

}
/*FIM EASTER EGG*/


/* Gerar ATK*/
function desafiarbobo() {
 /* limpa as mensagens na Magic store*/
 document.getElementById(
  "idmago").innerHTML = "";
 document.getElementById(
  "idmago2").innerHTML = "";
 document.getElementById(
  "idmago3").innerHTML = "";
  document.getElementById("rex")
  .innerHTML =
  "";
 document.getElementById(
  "idmago4").innerHTML = "";
 document.getElementById("roubo")
  .innerHTML = "";
 document.getElementById("fenix")
  .innerHTML = "";
  document.getElementById("ryujin")
  .innerHTML =
  "";
 document.getElementById("cerbero")
  .innerHTML = "";
 document.getElementById("invocacao")
  .innerHTML =
  "";

 /* gera o ATK */
 if (rodadabobo === 1 && vida > 0 &&
  fimdejogo === 1) {
  var atk = (Math.floor(Math
   .random() * 10 + 1) * 100);
  atkv = atk;
  document.getElementById("idatk")
   .innerHTML = "🗡️ATK: " + atk;
  rodadabobo = rodadabobo + 1;
  document.getElementById("idlutar")
   .innerHTML = "Gerar DEF ";
  document.getElementById(
    "idresultado").innerHTML =
   "⚠️Clique no botão GERAR DEF⚠️";
  document.getElementById("idstatus")
   .innerHTML =
   "Batalha em andamento";

  /* gera o XP */
  if (xp < 100) {
   xp = xp + 1;
   document.getElementById("xp")
    .innerHTML = "⚡XP: " + xp;
   document.getElementById("barraxp")
    .innerHTML = "⚡XP: " + xp;
   progresso3.setAttribute("style",
    "width: " + xp + "%");
  }

 }
 /*FIM GERAR ATK*/


 /* gera o ATK */
 else if (rodadabobo === 1 && vida >
  0 && fimdejogo === 2) {
  document.getElementById(
    "idresultado").innerHTML =
   "Você já derrotou o Rei do Submundo, parabéns por trazer hora aos Cavaleiros";
  document.getElementById("idstatus")
   .innerHTML = "🤩 PARABÉNS 🤩";
 }

 /*INÍCIO DO GERAR DEF*/
 /* gera a DEF */
 else if (rodadabobo === 2 && vida >
  0) {
  var def = (Math.floor(Math
   .random() * 10 + 1) * 100);
  defv = def;
  document.getElementById("iddef")
   .innerHTML = "🛡️DEF: " + def;
  rodadabobo = rodadabobo + 1;
  document.getElementById("idlutar")
   .innerHTML = "Travado";
  document.getElementById(
    "idaguardando").innerHTML =
   "ATACAR";
  document.getElementById(
    "idresultado").innerHTML =
   "⚠️Clique no botão ATACAR⚠️";
  document.getElementById("idstatus")
   .innerHTML =
   "Batalha em andamento";
 }

 /* início alerta*/
 else {
  document.getElementById(
    "idresultado").innerHTML =
   "🚫 Antes de gerar um novo ATK/DEF finalize a batalha com o botão ATACAR, ou valide se você ainda tem Pontos de Vida 🚫";

  document.getElementById("idstatus")
   .innerHTML =
   "ALGO ESTÁ ERRADO";
 }
 /*fim alerta*/
}
/*FIM DO GERAR DEF*/


/*INÍCIO DO BOTÃO ATACAR*/
function atacar() {
 /*Se não tiver atk ou def*/
 if (atkv === 0 | defv === 0) {
  document.getElementById(
    "idresultado").innerHTML =
   "🚫 Antes de batalhar você deve gerar o ATK/DEF com o botão Gerar ATK/DEF 🚫";

  document.getElementById("idstatus")
   .innerHTML =
   "ALGO ESTÁ ERRADO";
 }


 /* vencedor*/
 else if (atkv > 500) {

  document.getElementById(
    "idresultado").innerHTML =
   "Seu ATK de " + atkv +
   " foi maior que a DEF de 500 do Rei. Você ganhou 2 moedas.";
  document.getElementById("idstatus")
   .innerHTML = "🤩 VITÓRIA 🤩";
  document.getElementById("idatk")
   .innerHTML = "🗡️ATK: ?";
  document.getElementById("iddef")
   .innerHTML = "🛡️DEF: ?";
  moedas = moedas + 2;
  document.getElementById("idmoedas")
   .innerHTML = "🪙 Moedas: " +
   moedas;
  document.getElementById(
    "barramoedas").innerHTML =
   "🪙 Moedas: " + moedas;

  rodadabobo = 1;
  atkv = 0;
  defv = 0;

  /* subtrair a vida do Rei*/
  if (vidarei > 0) {
   vidarei = vidarei - 5;
   progressorei.setAttribute("style",
    "width: " + vidarei + "%");
   document.getElementById(
     "idvidarei").innerHTML =
    "🧪 LP: " + vidarei;
  }

  /* Habilidade: Maldição do faraó*/
  if (vidarei < 60) {
   vida = vida - 5;

   if(vida < 1){
vida = 0;
   }
   progresso.setAttribute("style",
    "width: " + vida + "%");
   document.getElementById(
     "idvida").innerHTML =
    "🧪 LP: " + vida;
   document.getElementById(
     "barralp").innerHTML =
    "🧪 LP: " + vida;

   document.getElementById("roubo")
    .innerHTML =
    "Habilidade Maldição do faraó foi usada";
  }
  
  /* Habilidade: Maldição do faraó*/
  if (vidarei < 50) {
   vida = vida - 5;

   if(vida < 1){
    vida = 0;
       }

   progresso.setAttribute("style",
    "width: " + vida + "%");
   document.getElementById(
     "idvida").innerHTML =
    "🧪 LP: " + vida;
   document.getElementById(
     "barralp").innerHTML =
    "🧪 LP: " + vida;

   document.getElementById("roubo")
    .innerHTML =
    "Habilidade Maldição do faraó foi usada";
  }
  /* Habilidade: Maldição do faraó*/
  if (vidarei < 10) {
   vida = vida - 5;

   if(vida < 1){
    vida = 0;
       }

   progresso.setAttribute("style",
    "width: " + vida + "%");
   document.getElementById(
     "idvida").innerHTML =
    "🧪 LP: " + vida;
   document.getElementById(
     "barralp").innerHTML =
    "🧪 LP: " + vida;

   document.getElementById("roubo")
    .innerHTML =
    "Habilidade Maldição do faraó foi usada";
  }

  /* Habilidade: Sopro de esperança*/
  if (turnosopro === 3 && vida < 100) {
   vida = vida + 10;
   progresso.setAttribute("style",
    "width: " + vida + "%");
   document.getElementById(
     "idvida").innerHTML =
    "🧪 LP: " + vida;
   document.getElementById(
     "barralp").innerHTML =
    "🧪 LP: " + vida;

   document.getElementById("fenix")
    .innerHTML =
    "Habilidade Sopro de esperança foi usada";
  }

      if (turnosopro === 4 && vida < 100) {
    vida = vida + 20;

    if (vida >100){vida = 100;    }

    progresso.setAttribute("style",
     "width: " + vida + "%");
    document.getElementById(
      "idvida").innerHTML =
     "🧪 LP: " + vida;
    document.getElementById(
      "barralp").innerHTML =
     "🧪 LP: " + vida;

    document.getElementById("fenix")
     .innerHTML =
     "Habilidade Sopro de esperança foi usada";
   }
  
  /* Habilidade: Águas abissais*/
  if (turnoryujin === 3 && vidarei > 0) {
    vidarei = vidarei - 5;
    if (vidarei < 1){ vidarei = 0;}

   progressorei.setAttribute("style",
    "width: " + vidarei + "%");
   document.getElementById(
     "idvidarei").innerHTML =
    "🧪 LP: " + vidarei;
 
    document.getElementById("ryujin")
     .innerHTML =
     "Habilidade Águas abissais foi usada";
   }

    /* Habilidade: Águas abissais*/
  if (turnoryujin === 4 && vidarei > 0) {
    vidarei = vidarei - 15;
    if (vidarei < 1){ vidarei = 0;}

   progressorei.setAttribute("style",
    "width: " + vidarei + "%");
   document.getElementById(
     "idvidarei").innerHTML =
    "🧪 LP: " + vidarei;
 
    document.getElementById("ryujin")
     .innerHTML =
     "Habilidade Águas abissais foi usada";
   }

     /* Habilidade: Águas abissais*/
  if (turnoryujin === 5 && vidarei > 0) {
    vidarei = vidarei - 25;
    if (vidarei < 1){ vidarei = 0;}

   progressorei.setAttribute("style",
    "width: " + vidarei + "%");
   document.getElementById(
     "idvidarei").innerHTML =
    "🧪 LP: " + vidarei;
 
    document.getElementById("ryujin")
     .innerHTML =
     "Habilidade Águas abissais foi usada";
   }

  /* Habilidade: Lago dos desejos*/
if (turnocarpas > 2 && turnocarpas < 4){

  document.getElementById("invocacao")
   .innerHTML =
   "Habilidade Lago dos desejos foi usada";
     moedas = moedas + 2;
  document.getElementById("idmoedas")
   .innerHTML = "🪙 Moedas: " +
   moedas;
  document.getElementById(
    "barramoedas").innerHTML =
   "🪙 Moedas: " + moedas;
}

  /* Habilidade: Lago dos desejos*/
if (turnocarpas > 3 && turnocarpas < 5){

  document.getElementById("invocacao")
   .innerHTML =
   "Habilidade Lago dos desejos foi usada";
     moedas = moedas + 4;
  document.getElementById("idmoedas")
   .innerHTML = "🪙 Moedas: " +
   moedas;
  document.getElementById(
    "barramoedas").innerHTML =
   "🪙 Moedas: " + moedas;
}


  /* Cérbero*/
  if (vidarei < 35 && chave > 0) {

   chave = chave - 1;

   document.getElementById(
     "idchave").innerHTML =
    "🔑 Chaves: " + chave;
   document.getElementById(
     "barrachaves").innerHTML =
    "🔑 Chaves: " + chave;

   document.getElementById("cerbero")
    .innerHTML =
    "Habilidade Devorador de Chaves foi usada";
  }


  /* quando a vida do Rei for 0*/
  if (vidarei === 0) {
   document.getElementById(
     "idresultado").innerHTML =
    "Você derrotou o Rei do Submundo";
   document.getElementById("idstatus")
    .innerHTML = "🏆 PARABÉNS 🏆";
   alert(
    "Você derrotou o Rei do Submundo"
   );
   vidarei = 0;
   progressorei.setAttribute("style",
    "width: " + vidarei + "%");
   document.getElementById(
     "idvidarei").innerHTML =
    "🧪 LP: " + vidarei;
   fimdejogo = 2;
  }

  document.getElementById("idlutar")
   .innerHTML = "Gerar ATK ";

 } 

  /* Derrota*/
  else if (defv < 500) {

  document.getElementById(
    "idresultado").innerHTML =
   "Sua DEF de " + defv +
   " foi menor que o ATK de 500 do Rei.";
  document.getElementById(
    "idstatus").innerHTML =
   "🤬 DERROTA 🤬";

  document.getElementById(
    "idatk").innerHTML =
   "🗡️ATK: ?";

  document.getElementById(
    "iddef").innerHTML =
   "🛡️DEF: ?";



  rodadabobo = 1;
  atkv = 0;
  defv = 0;

  if (vida > 0) {
   vida = vida - 10;

   if(vida < 1){vida = 0; }

   progresso.setAttribute("style",
    "width: " + vida + "%");
   document.getElementById(
     "idvida").innerHTML =
    "🧪 LP: " + vida;
   document.getElementById(
     "barralp").innerHTML =
    "🧪 LP: " + vida;
  }

  /* Contador Roud*/
  if (xprei < 100) {
   xprei = xprei + 1;
   document.getElementById(
     "xprei").innerHTML =
    "🔁 Round: " + xprei;
  }

  /* Habilidade Cérbero*/
  if (xprei > 2) {
   xprei = 1;
   moedas = 0;

   document.getElementById("xprei")
    .innerHTML = "🔁 Round: " + xprei;


   document.getElementById("idmoedas")
    .innerHTML = "🪙 Moedas: " +
    moedas;
   document.getElementById(
     "barramoedas").innerHTML =
    "🪙 Moedas: " + moedas;
   document.getElementById("roubo")
    .innerHTML =
    "Habilidade Devorador de Moedas foi usada";

  if (mana > 0) {
   mana = mana - 10;
   document.getElementById(
     "idmana").innerHTML =
    "🔮 Mana: " + mana;
   document.getElementById(
     "barramana").innerHTML =
    "🔮 Mana: " + mana;
   progresso4.setAttribute("style",
    "width: " + mana + "%");
  }
  }

    /* Habilidade Cérbero*/
    if (xprei > 1) {
      xprei = 2;
     if (mana > 0) {
      mana = mana - 10;
      document.getElementById(
        "idmana").innerHTML =
       "🔮 Mana: " + mana;
      document.getElementById(
        "barramana").innerHTML =
       "🔮 Mana: " + mana;
      progresso4.setAttribute("style",
       "width: " + mana + "%");

       document.getElementById("roubo")
       .innerHTML =
       "Habilidade Devorador de Mana foi usada";
   
     }
     }

  /* Cérbero*/
  if (vidarei < 35 && chave > 0) {

   chave = chave - 1;

   document.getElementById(
     "idchave").innerHTML =
    "🔑 Chaves: " + chave;
   document.getElementById(
     "barrachaves").innerHTML =
    "🔑 Chaves: " + chave;

   document.getElementById("cerbero")
    .innerHTML =
    "Habilidade Devorador de Chaves foi usada";
  }

  /* Início Habilidade: Ataque pré-histórico*/
  if(roundrex >= 0){
  roundrex = roundrex + 1;
  document.getElementById("rexcontador")
  .innerHTML =
  "Rouds de derrota até o momento: " + roundrex;

  if (roundrex === 6 && ataquerex === 1) {
roundrex = 0;
ataquerex = 2;
vida = vida -20;

if(vida < 0 ){vida = 0;}

progresso.setAttribute("style",
 "width: " + vida + "%");
document.getElementById(
  "idvida").innerHTML =
 "🧪 LP: " + vida;
document.getElementById(
  "barralp").innerHTML =
 "🧪 LP: " + vida;
 document.getElementById("rex")
 .innerHTML =
 "Habilidade Ataque pré-histórico foi usada";
 document.getElementById("rexcontador")
  .innerHTML =
  "Rouds de derrota até o momento: " + roundrex;
  document.getElementById("rexmensagem")
  .innerHTML =
  "A cada 5 Rounds de derrota, você leva 30 LP de prejuíso. Sempre que o Rex atacar o número de Rounds para o ataque diminui em 1";
   }

   if (roundrex === 5 && ataquerex === 2) {
    roundrex = 0;
    ataquerex = 3;
    vida = vida -20;
    
    if(vida < 0 ){vida = 0;}

    progresso.setAttribute("style",
     "width: " + vida + "%");
    document.getElementById(
      "idvida").innerHTML =
     "🧪 LP: " + vida;
    document.getElementById(
      "barralp").innerHTML =
     "🧪 LP: " + vida;
     document.getElementById("rex")
     .innerHTML =
     "Habilidade Ataque pré-histórico foi usada";
     document.getElementById("rexcontador")
      .innerHTML =
      "Rouds de derrota até o momento: " + roundrex;
      document.getElementById("rexmensagem")
      .innerHTML =
      "A cada 4 Rounds de derrota, você leva 30 LP de prejuíso. Sempre que o Rex atacar o número de Rounds para o ataque diminui em 1";
       }

       if (roundrex === 4 && ataquerex === 3) {
        roundrex = 0;
        ataquerex = 4;
        vida = vida -20;
        
        if(vida < 0 ){vida = 0;}
        
        progresso.setAttribute("style",
         "width: " + vida + "%");
        document.getElementById(
          "idvida").innerHTML =
         "🧪 LP: " + vida;
        document.getElementById(
          "barralp").innerHTML =
         "🧪 LP: " + vida;
         document.getElementById("rex")
         .innerHTML =
         "Habilidade Ataque pré-histórico foi usada";
         document.getElementById("rexcontador")
          .innerHTML =
          "Rouds de derrota até o momento: " + roundrex;
          document.getElementById("rexmensagem")
          .innerHTML =
          "A cada 3 Rounds de derrota, você leva 30 LP de prejuíso. Sempre que o Rex atacar o número de Rounds para o ataque diminui em 1";
           }

           
       if (roundrex === 3 && ataquerex === 4) {
        roundrex = 0;
        ataquerex = 5;
        vida = vida -20;
        
        if(vida < 0 ){vida = 0;}
        
        progresso.setAttribute("style",
         "width: " + vida + "%");
        document.getElementById(
          "idvida").innerHTML =
         "🧪 LP: " + vida;
        document.getElementById(
          "barralp").innerHTML =
         "🧪 LP: " + vida;
         document.getElementById("rex")
         .innerHTML =
         "Habilidade Ataque pré-histórico foi usada";
         document.getElementById("rexcontador")
          .innerHTML =
          "Rouds de derrota até o momento: " + roundrex;
          document.getElementById("rexmensagem")
          .innerHTML =
          "A cada 2 Rounds de derrota, você leva 30 LP de prejuíso. Sempre que o Rex atacar o número de Rounds para o ataque diminui em 1";
           }

           if (roundrex === 2 && ataquerex === 5) {
            roundrex = 0;
            ataquerex = 6;
            vida = vida -20;
            
            if(vida < 0 ){vida = 0;}
            
            progresso.setAttribute("style",
             "width: " + vida + "%");
            document.getElementById(
              "idvida").innerHTML =
             "🧪 LP: " + vida;
            document.getElementById(
              "barralp").innerHTML =
             "🧪 LP: " + vida;
             document.getElementById("rex")
             .innerHTML =
             "Habilidade Ataque pré-histórico foi usada";
             document.getElementById("rexcontador")
              .innerHTML =
              "Rouds de derrota até o momento: " + roundrex;
              document.getElementById("rexmensagem")
              .innerHTML =
              "A cada Rounds de derrota, você leva 30 LP de prejuíso. Sempre que o Rex atacar o número de Rounds para o ataque diminui em 1";
               }

               
           if (roundrex === 1 && ataquerex === 6) {
            roundrex = 0;       
            vida = vida -20;
            
            if(vida < 0 ){vida = 0;}
            
            progresso.setAttribute("style",
             "width: " + vida + "%");
            document.getElementById(
              "idvida").innerHTML =
             "🧪 LP: " + vida;
            document.getElementById(
              "barralp").innerHTML =
             "🧪 LP: " + vida;
             document.getElementById("rex")
             .innerHTML =
             "Habilidade Ataque pré-histórico foi usada";
             document.getElementById("rexcontador")
              .innerHTML =
              "Rouds de derrota até o momento: " + roundrex;
              document.getElementById("rexmensagem")
              .innerHTML =
              "A cada Rounds de derrota, você leva 30 LP de prejuíso. Sempre que o Rex atacar o número de Rounds para o ataque diminui em 1";
               }
  }
  /* Fim Habilidade: Ataque pré-histórico*/



  document.getElementById("idlutar")
   .innerHTML = "Gerar ATK ";

 }


 /*EMPATE ATK*/
 else if (atkv === 500) {

  rodadabobo = 1;

  document.getElementById(
    "idresultado").innerHTML =
   "Seu ATK de " + atkv +
   " foi igual a DEF de 500 do Rei.";
  document.getElementById(
    "idstatus").innerHTML =
   " 🤔 EMPATE 🤔";

  document.getElementById(
    "idatk").innerHTML =
   "🗡️ATK: ?";

  document.getElementById(
    "iddef").innerHTML =
   "🛡️DEF: ?";

  rodadabobo = 1;
  atkv = 0;
  defv = 0;


   /*Habilidade: Persistência*/
  if (vidarei > 0 && vidarei < 100) {
    if (vidarei > 45){
   vidarei = vidarei + 5;
   progressorei.setAttribute("style",
    "width: " + vidarei + "%");
   document.getElementById(
     "idvidarei").innerHTML =
    "🧪 LP: " + vidarei;
   }else if (vidarei < 50){
    vidarei = vidarei + 10;
   progressorei.setAttribute("style",
    "width: " + vidarei + "%");
   document.getElementById(
     "idvidarei").innerHTML =
    "🧪 LP: " + vidarei;
   }
   document.getElementById("roubo")
    .innerHTML =
    "Habilidade Persistência foi usada";

  }

  /* Cérbero*/
  if (vidarei < 35 && chave > 0) {

   chave = chave - 1;

   document.getElementById(
     "idchave").innerHTML =
    "🔑 Chaves: " + chave;
   document.getElementById(
     "barrachaves").innerHTML =
    "🔑 Chaves: " + chave;

   document.getElementById("cerbero")
    .innerHTML =
    "Habilidade Devorador de Chaves foi usada";
  }

 }

 /*EMPATE DEF*/
 else if (defv === 500) {

  rodadabobo = 1;



  document.getElementById(
    "idresultado").innerHTML =
   "Sua DEF de " + defv +
   " foi igual ao ATK de 500 do Rei.";
  document.getElementById(
    "idstatus").innerHTML =
   " 🤔 EMPATE 🤔";

  document.getElementById(
    "idatk").innerHTML =
   "🗡️ATK: ?";

  document.getElementById(
    "iddef").innerHTML =
   "🛡️DEF: ?";

  rodadabobo = 1;
  atkv = 0;
  defv = 0;


   /*Habilidade: Persistência*/
  if (vidarei > 0 && vidarei < 100) {
    if (vidarei > 45){
   vidarei = vidarei + 5;
   progressorei.setAttribute("style",
    "width: " + vidarei + "%");
   document.getElementById(
     "idvidarei").innerHTML =
    "🧪 LP: " + vidarei;
   }else if (vidarei < 50){
    vidarei = vidarei + 10;
   progressorei.setAttribute("style",
    "width: " + vidarei + "%");
   document.getElementById(
     "idvidarei").innerHTML =
    "🧪 LP: " + vidarei;
   }
   document.getElementById("roubo")
    .innerHTML =
    "Habilidade Persistência foi usada";

  }

  /* Cérbero*/
  if (vidarei < 35 && chave > 0) {

   chave = chave - 1;

   document.getElementById(
     "idchave").innerHTML =
    "🔑 Chaves: " + chave;
   document.getElementById(
     "barrachaves").innerHTML =
    "🔑 Chaves: " + chave;

   document.getElementById("cerbero")
    .innerHTML =
    "Habilidade Devorador Chaves foi usada";
  }

 }

 /*EMPATE ZERADO*/
 else {



  document.getElementById(
    "idresultado").innerHTML =
   "Seu ATK de " + atkv +
   " foi menor que a DEF de 500 do Rei, e o ATK de 500 do Rei foi menor que sua DEF de " +
   defv;
  document.getElementById(
    "idstatus").innerHTML =
   "  🤔 EMPATE 🤔";

  document.getElementById(
    "idatk").innerHTML =
   "🗡️ATK: ?";

  document.getElementById(
    "iddef").innerHTML =
   "🛡️DEF: ?";

  rodadabobo = 1;
  atkv = 0;
  defv = 0;


   /*Habilidade: Persistência*/
   if (vidarei > 0 && vidarei < 100) {
    if (vidarei > 45){
   vidarei = vidarei + 5;
   progressorei.setAttribute("style",
    "width: " + vidarei + "%");
   document.getElementById(
     "idvidarei").innerHTML =
    "🧪 LP: " + vidarei;
   }else if (vidarei < 50){
    vidarei = vidarei + 10;
   progressorei.setAttribute("style",
    "width: " + vidarei + "%");
   document.getElementById(
     "idvidarei").innerHTML =
    "🧪 LP: " + vidarei;
   }
   document.getElementById("roubo")
    .innerHTML =
    "Habilidade Persistência foi usada";

  }

  /* Cérbero*/
  if (vidarei < 35 && chave > 0) {

   chave = chave - 1;

   document.getElementById(
     "idchave").innerHTML =
    "🔑 Chaves: " + chave;
   document.getElementById(
     "barrachaves").innerHTML =
    "🔑 Chaves: " + chave;

   document.getElementById("cerbero")
    .innerHTML =
    "Habilidade Devorador de Chaves foi usada";
  }

 }

 document.getElementById(
   "idlutar").innerHTML =
  "Gerar ATK";

 document.getElementById(
   "idaguardando").innerHTML =
  "Aguardando";

} /*fim função atacar*/


function trocarchave() {

 document.getElementById(
  "idmago").innerHTML = "";
 document.getElementById(
  "idmago2").innerHTML = "";
 document.getElementById(
  "idmago3").innerHTML = "";
 document.getElementById(
  "idmago4").innerHTML = "";
 document.getElementById("roubo")
  .innerHTML =
  "";
 document.getElementById("fenix")
  .innerHTML = "";
  document.getElementById("ryujin")
  .innerHTML =
  "";
  document.getElementById("rex")
  .innerHTML =
  "";
 document.getElementById("cerbero")
  .innerHTML = "";
 document.getElementById("invocacao")
  .innerHTML =
  "";

 if (moedas > 3 && mana > 0) {
  moedas = moedas - 4;
  chave = chave + 1;

  document.getElementById(
    "idchave").innerHTML =
   "🔑 Chaves: " + chave;
  document.getElementById(
    "barrachaves").innerHTML =
   "🔑 Chaves: " + chave;

  document.getElementById(
    "idmoedas").innerHTML =
   "🪙 Moedas: " + moedas;
  document.getElementById(
    "barramoedas").innerHTML =
   "🪙 Moedas: " + moedas;

  document.getElementById(
    "idmago").innerHTML =
   "Troca realizada com sucesso";


  if (mana > 0) {
   mana = mana - 10;
   document.getElementById(
     "idmana").innerHTML =
    "🔮 Mana: " + mana;
   document.getElementById(
     "barramana").innerHTML =
    "🔮 Mana: " + mana;
   progresso4.setAttribute("style",
    "width: " + mana + "%");
  }

  if (xp < 100) {
   xp = xp + 1;
   document.getElementById(
     "xp").innerHTML =
    "⚡XP: " + xp;
   document.getElementById(
     "barraxp").innerHTML =
    "⚡XP: " + xp;
   progresso3.setAttribute("style",
    "width: " + xp + "%");
  }

 } else {
  document.getElementById(
    "idmago").innerHTML =
   "Você não tem Moedas suficientes ou está sem Mana";
 }


}
/*FIM MAGO CHAVES*/


/*INÍCIO MAGO VIDA*/
function trocarvida() {

 document.getElementById(
  "idmago").innerHTML = "";
 document.getElementById(
  "idmago2").innerHTML = "";
 document.getElementById(
  "idmago3").innerHTML = "";
 document.getElementById(
  "idmago4").innerHTML = "";
 document.getElementById("roubo")
  .innerHTML =
  "";
 document.getElementById("fenix")
  .innerHTML = "";
  document.getElementById("ryujin")
  .innerHTML =
  "";
 document.getElementById("cerbero")
  .innerHTML = "";
  document.getElementById("rex")
  .innerHTML =
  "";
 document.getElementById("invocacao")
  .innerHTML =
  "";

 if (moedas > 3 && vida < 100 &&
  mana > 0) {
  moedas = moedas - 4;
  vida = vida + 10;

  if(vida > 100){vida = 100;}

  progresso.setAttribute("style",
   "width: " + vida + "%");
  document.getElementById(
    "idvida").innerHTML =
   "🧪 LP: " + vida;
  document.getElementById(
    "barralp").innerHTML =
   "🧪 LP: " + vida;

  document.getElementById(
    "idmoedas").innerHTML =
   "🪙 Moedas: " + moedas;
  document.getElementById(
    "barramoedas").innerHTML =
   "🪙 Moedas: " + moedas;

  document.getElementById(
    "idmago2").innerHTML =
   "Troca realizada com sucesso";

  if (mana > 0) {
   mana = mana - 10;
   document.getElementById(
     "idmana").innerHTML =
    "🔮 Mana: " + mana;
   document.getElementById(
     "barramana").innerHTML =
    "🔮 Mana: " + mana;
   progresso4.setAttribute("style",
    "width: " + mana + "%");
  }

  if (xp < 100) {
   xp = xp + 1;
   document.getElementById(
     "xp").innerHTML =
    "⚡XP: " + xp;
   document.getElementById(
     "barraxp").innerHTML =
    "⚡XP: " + xp;
   progresso3.setAttribute("style",
    "width: " + xp + "%");
  }

 } else if (moedas > 3 && vida >
  90) {
  document.getElementById(
    "idmago2").innerHTML =
   "Você já está com a vida no máximo";
 } else {
  document.getElementById(
    "idmago2").innerHTML =
   "Você não tem Moedas suficientes ou está sem Mana";
 }


}
/*FIM MAGO VIDA*/

/*INÍCIO MAGO XP*/
function trocarxp() {

 document.getElementById(
  "idmago").innerHTML = "";
 document.getElementById(
  "idmago2").innerHTML = "";
 document.getElementById(
  "idmago3").innerHTML = "";
 document.getElementById(
  "idmago4").innerHTML = "";
 document.getElementById("roubo")
  .innerHTML =
  "";
 document.getElementById("fenix")
  .innerHTML = "";
  document.getElementById("ryujin")
  .innerHTML =
  "";
 document.getElementById("cerbero")
  .innerHTML = "";
  document.getElementById("rex")
  .innerHTML =
  "";
 document.getElementById("invocacao")
  .innerHTML =
  "";

 if (xp > 9 && mana > 0) {
  xp = xp - 10;
  moedas = moedas + 6;

  document.getElementById(
    "xp").innerHTML =
   "⚡XP: " + xp;
  document.getElementById(
    "barraxp").innerHTML =
   "⚡XP: " + xp;

  progresso3.setAttribute("style",
   "width: " + xp + "%");

  document.getElementById(
    "idmoedas").innerHTML =
   "🪙 Moedas: " + moedas;
  document.getElementById(
    "barramoedas").innerHTML =
   "🪙 Moedas: " + moedas;

  document.getElementById(
    "idmago3").innerHTML =
   "Troca realizada com sucesso";

  if (mana > 0) {
   mana = mana - 10;
   document.getElementById(
     "idmana").innerHTML =
    "🔮 Mana: " + mana;
   document.getElementById(
     "barramana").innerHTML =
    "🔮 Mana: " + mana;
   progresso4.setAttribute("style",
    "width: " + mana + "%");
  }

 } else {
  document.getElementById(
    "idmago3").innerHTML =
   "Você não tem XP suficientes ou está sem Mana";
 }


}
/*FIM MAGO XP*/




/*INÍCIO MAGO MANA*/

function trocarmana() {

 document.getElementById(
  "idmago").innerHTML = "";
 document.getElementById(
  "idmago2").innerHTML = "";
 document.getElementById(
  "idmago3").innerHTML = "";
 document.getElementById(
  "idmago4").innerHTML = "";
  /*INÍCIO BAÚ
 document.getElementById(
  "idsubirnivel").innerHTML = "";
 FIM BAÚ*/
 document.getElementById("roubo")
  .innerHTML =
  "";
 document.getElementById("fenix")
  .innerHTML = "";
  document.getElementById("ryujin")
  .innerHTML =
  "";
  document.getElementById("rex")
  .innerHTML =
  "";
 document.getElementById("cerbero")
  .innerHTML = "";
 document.getElementById("invocacao")
  .innerHTML =
  "";

 if (moedas > 1 && mana < 100) {
  moedas = moedas - 2;
  mana = mana + 10;

  /*ratatosk*/
  if (turnoratatosk > 2 && turnoratatosk < 4) {
   mana = mana + 10;

   document.getElementById(
     "invocacao")
    .innerHTML =
    "Habilidade: Espíritos das florestas foi usado";

  }
  /*ratatosk*/
  if (turnoratatosk > 3 && turnoratatosk < 5) {
   mana = mana + 20;

   document.getElementById(
     "invocacao")
    .innerHTML =
    "Habilidade: Espíritos das florestas foi usado";

  }

  if (mana > 100) {
   mana = 100;
  }



  if (xp < 100) {
   xp = xp + 1;
   document.getElementById(
     "xp").innerHTML =
    "⚡XP: " + xp;
   document.getElementById(
     "barraxp").innerHTML =
    "⚡XP: " + xp;
   progresso3.setAttribute("style",
    "width: " + xp + "%");
  }



  progresso4.setAttribute("style",
   "width: " + mana + "%");
  document.getElementById(
    "idmana").innerHTML =
   "🔮 Mana: " + mana;
  document.getElementById(
    "barramana").innerHTML =
   "🔮 Mana: " + mana;

  document.getElementById(
    "idmoedas").innerHTML =
   "🪙 Moedas: " + moedas;
  document.getElementById(
    "barramoedas").innerHTML =
   "🪙 Moedas: " + moedas;

  document.getElementById(
    "idmago4").innerHTML =
   "Troca realizada com sucesso";





 } else if (moedas > 1 && mana >
  99) {
  document.getElementById(
    "idmago4").innerHTML =
   "Você está com a Mana no máximo";
 } else {
  document.getElementById(
    "idmago4").innerHTML =
   "Você não tem Moedas suficientes";
 }


}
/*FIM MANA*/


/* BOTÃO HABILIDADE ESPADA DO SACERDOTE*/
function espadadosacerdote() {

 if (espada === 1) {
  document.getElementById(
    "idresultado").innerHTML =
   "⚠️ Para usar a habilidade Espada do Sacerdote você precisa abrir o Baú, a espada está dentro dele.⚠️";
  document.getElementById("idstatus")
   .innerHTML = "BLOQUEADO";
  document.getElementById(
    "espadadosacerdote").innerHTML =
   "A espada está dentro do Baú";
  document.getElementById("roubo")
   .innerHTML =
   "A espada está dentro do Baú";
 } else if (espada === 2) {
  document.getElementById(
    "espadadosacerdote").innerHTML =
   "Você já usou a Espada do Sacerdote";
  document.getElementById(
    "idresultado").innerHTML =
   "Você derrotou o Rei do Submundo";
  document.getElementById("idstatus")
   .innerHTML = "🤩 PARABÉNS 🤩";
  alert(
   "📢 Você derrotou o Rei do Submundo 📢"
  );
  document.getElementById("roubo")
   .innerHTML =
   "Você derrotou o Rei do Submundo";
  vidarei = 0;
  progressorei.setAttribute("style",
   "width: " + vidarei + "%");
  document.getElementById(
    "idvidarei").innerHTML =
   "🧪 LP: " + vidarei;
  fimdejogo = 2;
  espada = 3;
 } else {
  document.getElementById(
    "espadadosacerdote").innerHTML =
   "Você já usou a habilidade";
  document.getElementById(
    "idresultado").innerHTML =
   "Você derrotou o Rei do Submundo com a habilidade Espada do Sacerdote";
  document.getElementById("idstatus")
   .innerHTML = "🤩 PARABÉNS 🤩";
  document.getElementById("roubo")
   .innerHTML =
   "Você já derrotou o Rei do Submundo";
 }

}


/* BOTÃO RATATOSK*/
function ratatosk() {

 if (chave > 3 && turnoratatosk > 1 &&  turnoratatosk < 3) {
  chave = chave - 4;

  document.getElementById(
    "idchave").innerHTML =
   "🔑 Chaves: " + chave;
  document.getElementById(
    "barrachaves").innerHTML =
   "🔑 Chaves: " + chave;


   diamante = diamante + 1;
   document.getElementById(
    "barradiamante").innerHTML =
   "💎 Diamantes: " + diamante;

  document.getElementById(
    "nivelratatosk").innerHTML =
   "Nível: 1 ";
  document.getElementById(
    "mensagemratatosk").innerHTML =
   "O Ratatosk pode subir de nível com 4 chaves. Ao trocar moedas por mana na Magic Store, você ganha 20 Mana de bônus. ";
  document.getElementById(
    "botaoratatosk").innerHTML =
   "Subir de nível ";

  document.getElementById("invocacao")
   .innerHTML =
   "Ratatosk foi invocado com sucesso";

  turnoratatosk = 3;
 } else if  (chave > 3 && turnoratatosk > 2 && turnoratatosk < 4){

  chave = chave - 4;

  document.getElementById(
    "idchave").innerHTML =
   "🔑 Chaves: " + chave;
  document.getElementById(
    "barrachaves").innerHTML =
   "🔑 Chaves: " + chave;


  document.getElementById(
    "nivelratatosk").innerHTML =
   "Nível: 2 ";
  document.getElementById(
    "mensagemratatosk").innerHTML =
   "O Ratatosk está no nível máximo. Ao trocar moedas por mana na Magic Store, você ganha 20 Mana de bônus. ";
  document.getElementById(
    "botaoratatosk").innerHTML =
   "Ratatosk está no máximo";

  document.getElementById("invocacao")
   .innerHTML =
   "Ratatosk subiu de nível com sucesso";

  turnoratatosk = 4;
 }

   else if  (chave > 1 && turnoratatosk > 3&& turnoratatosk < 5 ){
  document.getElementById(
    "botaoratatosk").innerHTML =
   "Ratatosk já está no máximo";
  }

}

/* BOTÃO CARPAS*/
function carpas() {

 if (chave > 5 && turnocarpas === 2) {

  chave = chave - 6;

  document.getElementById(
    "idchave").innerHTML =
   "🔑 Chaves: " + chave;
  document.getElementById(
    "barrachaves").innerHTML =
   "🔑 Chaves: " + chave;

   
   diamante = diamante + 1;
   document.getElementById(
    "barradiamante").innerHTML =
   "💎 Diamantes: " + diamante;

  document.getElementById(
    "nivelcarpas").innerHTML =
   "Nível: 1 ";
  document.getElementById(
    "mensagemcarpas").innerHTML =
   "As Carpas podem subir de nível com 6 chaves. Você ganha 4 moedas de bonûs nos Rounds de vitória. ";
  document.getElementById(
    "botaocarpas").innerHTML =
   "Subir de nível ";

  document.getElementById("invocacao")
   .innerHTML =
   "As Carpas foram invocadas com sucesso";

  turnocarpas = 3;
 }

 
 else if (chave > 5 && turnocarpas === 3) {

  chave = chave - 6;

  document.getElementById(
    "idchave").innerHTML =
   "🔑 Chaves: " + chave;
  document.getElementById(
    "barrachaves").innerHTML =
   "🔑 Chaves: " + chave;


  document.getElementById(
    "nivelcarpas").innerHTML =
   "Nível: 2 ";
  document.getElementById(
    "mensagemcarpas").innerHTML =
   "As Carpas estão no nível máximo. Você ganha 4 moedas de bonûs nos Rounds de vitória. ";
  document.getElementById(
    "botaocarpas").innerHTML =
   "As Carpas estão no máximo";

  document.getElementById("invocacao")
   .innerHTML =
   "As Carpas subiram de nível com sucesso";

  turnocarpas = 4;
 }
    else if  (chave > 1 && turnocarpas === 4 ){
  document.getElementById(
    "botaocarpas").innerHTML =
   "As Carpas já estão no máximo";
  }
}


/* BOTÃO FENIX*/
function sopro() {

 if (chave > 3 && turnosopro === 2) {

  chave = chave - 4;
  document.getElementById(
    "idchave").innerHTML =
   "🔑 Chaves: " + chave;
  document.getElementById(
    "barrachaves").innerHTML =
   "🔑 Chaves: " + chave;

   diamante = diamante + 1;
   document.getElementById(
    "barradiamante").innerHTML =
   "💎 Diamantes: " + diamante;

  document.getElementById(
    "nivelsopro").innerHTML =
   "Nível: 1 ";
  document.getElementById(
    "mensagemsopro").innerHTML =
   "A Fenix pode subir de nível com 8 chaves. Você ganha 20 LP no Round de vitória. ";
  document.getElementById(
    "botaosopro").innerHTML =
   "Subir de nível ";

  document.getElementById("invocacao")
   .innerHTML =
   "Fenix foi invocada com sucesso";

  turnosopro = 3;
 } else if  (chave > 7  && turnosopro === 3){

  chave = chave - 8;

  document.getElementById(
    "idchave").innerHTML =
   "🔑 Chaves: " + chave;
  document.getElementById(
    "barrachaves").innerHTML =
   "🔑 Chaves: " + chave;


  document.getElementById(
    "nivelsopro").innerHTML =
   "Nível: 2 ";
  document.getElementById(
    "mensagemsopro").innerHTML =
   "A Fenix está no nível máximo. Você ganha 20 LP no Round de vitória. ";
  document.getElementById(
    "botaosopro").innerHTML =
   "Fenix está no máximo";

  document.getElementById("invocacao")
   .innerHTML =
   "Fenix subiu de nível com sucesso";

  turnosopro = 4;
 }

   else if  (chave > 3 && turnosopro === 4 ){
  document.getElementById(
    "botaosopro").innerHTML =
   "Fenix já está no máximo";
  }

}


/* BOTÃO RYUJIN*/
function ryujin() {

  if (chave > 7 && turnoryujin === 2) {
 
   chave = chave - 8;
   document.getElementById(
     "idchave").innerHTML =
    "🔑 Chaves: " + chave;
   document.getElementById(
     "barrachaves").innerHTML =
    "🔑 Chaves: " + chave;
 
    diamante = diamante + 1;
    document.getElementById(
     "barradiamante").innerHTML =
    "💎 Diamantes: " + diamante;
 
   document.getElementById(
     "nivelryujin").innerHTML =
    "Nível: 1 ";
   document.getElementById(
     "mensagemryujin").innerHTML =
    "O Ryujin pode subir de nível com 10 chaves. Você inflinge 20 LP de prejuiso no Rei no Round de vitória. ";
   document.getElementById(
     "botaoryujin").innerHTML =
    "Subir de nível ";
 
   document.getElementById("invocacao")
    .innerHTML =
    "Ryujin foi invocada com sucesso";
 
   turnoryujin = 3;
  } else if  (chave > 9  && turnoryujin === 3){
 
   chave = chave - 10;
 
   document.getElementById(
     "idchave").innerHTML =
    "🔑 Chaves: " + chave;
   document.getElementById(
     "barrachaves").innerHTML =
    "🔑 Chaves: " + chave;
 
 
   document.getElementById(
     "nivelryujin").innerHTML =
    "Nível: 2 ";
   document.getElementById(
     "mensagemryujin").innerHTML =
    "O Ryujin pode subir de nível com 14 chaves. Você inflinge 30 LP de prejuiso no Rei no Round de vitória. ";
   document.getElementById(
     "botaoryujin").innerHTML =
    "Subir de nível";
 
   document.getElementById("invocacao")
    .innerHTML =
    "Ryujin subiu de nível com sucesso";
 
   turnoryujin = 4;
  }

  
  else if  (chave > 13  && turnoryujin === 4){
 
    chave = chave - 14;
  
    document.getElementById(
      "idchave").innerHTML =
     "🔑 Chaves: " + chave;
    document.getElementById(
      "barrachaves").innerHTML =
     "🔑 Chaves: " + chave;
  
  
    document.getElementById(
      "nivelryujin").innerHTML =
     "Nível: 3 ";
    document.getElementById(
      "mensagemryujin").innerHTML =
     "O Ryujin está no nível máximo. Você inflinge 30 LP de prejuiso no Rei no Round de vitória. ";
    document.getElementById(
      "botaoryujin").innerHTML =
     "Nível máximo";
  
    document.getElementById("invocacao")
     .innerHTML =
     "Ryujin subiu de nível com sucesso";
  
    turnoryujin = 5;
   }


    else if  (chave > 5 && turnoryujin === 5 ){
   document.getElementById(
     "botaoryujin").innerHTML =
    "Ryujin já está no máximo";
   }
 
 }