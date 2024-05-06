 
alert("Boas vinda ao jogo do número secreto");
let numeroMaximo = 200;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute 
let tentativas = 1;


while(chute != numeroSecreto){
    chute = prompt(`escolha um número entre 1 e ${numeroMaximo}`);
  
    if (chute == numeroSecreto){
        break;
    }else{
        if(chute > numeroSecreto) {
            alert (`o núrmero secreto é menor que ${chute} `);
        }else{
            alert (`o número secreto é maior que ${chute} `);
        }
        //tentativas = tentativas +1;
        tentativas++;
    }
  }
  if(tentativas > 1){
  alert(`parabéns!você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
  }else{
    alert(`parabéns!você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
  }