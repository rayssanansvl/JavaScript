// let contador = 0;

// while (contador < 5) {
//     contador++;
//     console.log(contador);
// }

// var x = 20;

// while ( x > 10 ) {
//     console.log(`Entrei no laço While...`);
//     x = 0;
// }
// console.log(`Terminei!`);

// let countdown = 5;

// while (countdown > 0) {
//     console.log(countdown);
//     countdown--;
// }

// console.log("Lançamento!");

// //Estourando o limite do cartão - versão while

// var limite = 500;
// var fatura = 0;

// while (fatura <= limite) {
//     let gasto = Math.random() * 100; //Math.random() cria valor aleatório entre 0 e 1
//     fatura += gasto;
//     console.log(`Gastei R$ ${gasto.toFixed(2)} ------ Fatura: R$ ${fatura.toFixed(2)}`); // toFixed(2) alterar o valor mostrado par ao usuário em duas casas depois da virgula
//     fatura > limite && console.log(`Estourou o limite do cartão`); //&& faz somente um IF, sem else.
// }

// console.log("---------------------------------------------------")
// var limite = 500;
// var fatura = 0;

// do {let gasto = Math.random() * 100;
// fatura += gasto;
// console.log(`Gastei R$ ${gasto.toFixed(2)} ------ Fatura: R$ ${fatura.toFixed(2)}`);
// fatura > limite && console.log(`Estourou o limite do cartão`);
// } while (fatura <= limite);

// //Jogo de cara e coroa - melhor de três tentativas
// repetição - 3
// variável cara ou coroa -> aleatória - 50%
// placar - vitórias e derrotas

var rodada = 1;
var moeda = "";
var escolhaJogador = "";
var vitoria = 0;
var derrota = 0;

while (rodada <= 3) {
  moeda = Math.random() >= 0.5 ? "Cara" : "Coroa";
  escolhaJogador = Math.random() >= 0.5 ? "Cara" : "Coroa";

  if (escolhaJogador == moeda) {
    console.log(
      `Parabéns você escolheu ${escolhaJogador} e caiu ${moeda}, ganhou!`
    );
    vitoria++;
  } else {
    console.log(
      `Que pena, você escolheu ${escolhaJogador} e caiu ${moeda}, perdeu!`
    );
    derrota++;
  }

  rodada++;
}
console.log(`--------------------------------------------`);
console.log(`                   Placar                   `);
console.log(`--------------------------------------------`);
console.log(`${vitoria > derrota ? "Você ganhou!" : "Você perdeu!"}`);
console.log(`--------------------------------------------`);
