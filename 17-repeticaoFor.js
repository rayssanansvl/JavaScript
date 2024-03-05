//Laço de repetição FOR
//Escrever para o usuário 1000x "Prestar mais atenção nas aulas!"

//mostrando números pares
for (let i = 0; i <= 1000; i += 2) {
  console.log(i);
}

//mostrando números ímpares
for (let i = 1; i <= 1000; i += 2) {
  console.log(i);
}

//mostrando números impares com if
for (let i = 1; i <= 1000; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}

//Escreva todos os números de 1 a 20
for (let i = 1; i <= 20; i++) {
  console.log(i);
}

//Escreva todos os números PARES entre 1 e 20 com FOR das duas formas
for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}

for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) console.log(i); 
}

//Dado um vetor com números 5,6,8,14,0,9,7,2.
//Calcule e exiba a somatoria de seus elementos utilizando FOR
//var= cria variável global
//const= cria constante, não muda
//let= cria variável funcional dentro de um grupo de código
//Tudo que está dentro de chaves é um grupo de código

const numeros = [5,6,8,14,0,9,7,2]
var somar = 0

for (let i = 0; i < numeros.length; i++) {
    somar += numeros [i]
}
console.log(`A soma dos elementos do array é de: ${somar}`);

//Dado um vetor com números 5,6,8,14,0,9,7,2.
//Multiplique todos os seus elementos por 3 utilizando o loop FOR
//Em seguida, mostre o novo vetor

let num = [5,6,8,14,0,9,7,2]
console.table(num);
for (let i = 0; i < num.length; i++) {
num[i] *3;
}

console.table(num);

//Dada a matriz 2x3, escrever para o usuário todos os seus elementos
//com as respectivas posições da matriz
//[8,4,1]
//[3,7,8]

var matriz = [
    [8,4,1],
    [3,7,8],
]

console.table(matriz);

for (let linha = 0; linha < matriz.length; linha++) {
    for (let coluna = 0; coluna < matriz[0].length ; coluna++) {
        console.log(`Matriz [${linha},${coluna}] = ${matriz[linha][coluna]}`);
    }
}

