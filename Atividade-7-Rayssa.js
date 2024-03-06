//Supondo que a população de um país A seja de a habitantes com uma taxa anual de crescimento
//de 3% e que a população de um país B seja de b habitantes, com uma taxa anual de crescimento
//de 1,5%, fazer um algoritmo que calcule e escreva o número de anos necessários para que a
//população do país A ultrapasse ou iguale a população do país B, mantidas essas taxas de
//crescimento.

const percentualA = 3 / 100;
const percentualB = 1.5 / 100;
var populacaoA = 100003;
var populacaoB = 300004;
var ano = 0;

while (populacaoA < populacaoB) {
  ano++;
  populacaoA += populacaoA * percentualA;
  populacaoB += populacaoB * percentualB;
}
console.log(
  `A população A com aproximadamente (${Math.round(
    populacaoA
  )}) habitantes irá ultrapassar a população B com aproximadamente (${Math.round(
    populacaoB
  )}) habitantes, em ${ano} anos!`
);

//Criar um "jogo da velha" que mostra as informações dentro da imagem abaixo. Inserir as informações de forma randomica. Informar ao final quem ganhou X ou O.

// console.log(`___|___|___`);
// console.log(`___|___|___`);
// console.log(`   |   |   `);

var jogador = Math.random() < 0.5 ? "X" : "O";

const tabuleiro = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "],
];

function mostraTabuleiro() {
  console.log(`${tabuleiro[0][0]}|${tabuleiro[0][1]}|${tabuleiro[0][2]}`);
  console.log(`${tabuleiro[1][0]}|${tabuleiro[1][1]}|${tabuleiro[1][2]}`);
  console.log(`${tabuleiro[2][0]}|${tabuleiro[2][1]}|${tabuleiro[2][2]}`);
}

function jogar(jogador) {
  do {
    linha = Math.floor(Math.random() * 3);
    coluna = Math.floor(Math.random() * 3);
  } while (tabuleiro[linha][coluna] !== " ");

  tabuleiro[linha][coluna] = jogador;
}


let vencedor = "";
while (!vencedor) {
  if (jogador == "X") {
    jogar(jogador);
    console.table(tabuleiro);
    vencedor = verificaVencedor();
    jogador = "O";
  } else {
    jogar(jogador);
    console.table(tabuleiro);
    vencedor = verificaVencedor();
    jogador = "X";
  }
}

function verificaVencedor() {
  switch (true) {
    case tabuleiro[0][0] === tabuleiro[0][1] &&
      tabuleiro[0][1] === tabuleiro[0][2] &&
      tabuleiro[0][1] !== " ": {
      console.log(`O jogador ${jogador} ganhou!`);
      return tabuleiro[0][0];
    }

    case tabuleiro[1][0] === tabuleiro[1][1] &&
      tabuleiro[1][1] === tabuleiro[1][2] &&
      tabuleiro[1][1] !== " ": {
      console.log(`O jogador ${jogador} ganhou!`);
      return tabuleiro[0][0];
    }

    case tabuleiro[2][0] === tabuleiro[2][1] &&
      tabuleiro[2][1] === tabuleiro[2][2] &&
      tabuleiro[2][1] !== " ": {
      console.log(`O jogador ${jogador} ganhou!`);
      return tabuleiro[0][0];
    }

    case tabuleiro[0][0] === tabuleiro[1][0] &&
      tabuleiro[1][0] === tabuleiro[2][0] &&
      tabuleiro[1][0] !== " ": {
      console.log(`O jogador ${jogador} ganhou!`);
      return tabuleiro[0][0];
    }

    case tabuleiro[1][0] === tabuleiro[1][1] &&
      tabuleiro[1][1] === tabuleiro[1][2] &&
      tabuleiro[1][1] !== " ": {
      console.log(`O jogador ${jogador} ganhou!`);
      return tabuleiro[0][0];
    }

    case tabuleiro[2][0] === tabuleiro[2][1] &&
      tabuleiro[2][1] === tabuleiro[2][2] &&
      tabuleiro[2][1] !== " ": {
      console.log(`O jogador ${jogador} ganhou!`);
      return tabuleiro[0][0];
    }

    case tabuleiro[0][0] === tabuleiro[1][1] &&
      tabuleiro[1][1] === tabuleiro[2][2] &&
      tabuleiro[1][1] !== " ": {
      console.log(`O jogador ${jogador} ganhou!`);
      return tabuleiro[0][0];
    }

    case tabuleiro[0][2] === tabuleiro[1][1] &&
      tabuleiro[1][1] === tabuleiro[2][0] &&
      tabuleiro[1][1] !== " ": {
      console.log(`O jogador ${jogador} ganhou!`);
      return tabuleiro[0][0];
    }
    case !tabuleiro.some((e) => e.includes(" ")):
      console.log(`Deu velha`);
      return "Deu velha";
  }
}
