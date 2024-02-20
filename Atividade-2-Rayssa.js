console.log("Exercício 1");
var nome = "Rayssa";
var nascimento = 2007;

console.log("Nome:", nome, "Ano de nascimento:", nascimento);

var anoAtual = 2024;

var idade = anoAtual - nascimento;
console.log(nome, "tem", idade, "anos");
console.log("----------------------------------------------");
console.log("Exercício 2");
var retanguloC = 12;
var retanguloL = 6;
var area = retanguloC * retanguloL;
console.log(
  "Comprimento:",
  retanguloC,
  " | Largura:",
  retanguloL,
  " | Área:",
  area
);
console.log("-----------------------------------------------");
console.log("Exercício 3");
var altura = 5;
var volume = altura * retanguloC * retanguloL;
console.log("Altura", altura, "| Volume", volume);

console.log("------------------------------------------------");
console.log("Exercício 4");

var A = 2;
var B = 3;
var C = -1;
var Delta = B ** 2 - 4 * A * C;

console.log("O delta da equação é", Delta);

console.log("-------------------------------------------------");
console.log("Exercício 5");

var valorTotal = 450.0;
var desconto = 0.03;
var calculododesconto = valorTotal * desconto;
var calculodovalorfinal = valorTotal - calculododesconto;
console.log("Valor do final da compra é de:", calculodovalorfinal);
console.log("E o valor do desconto é de:", calculododesconto);

console.log("------------------------------------------");
console.log("Exercício 6");

var horas = 3.5;
var velocidade = 95;
var distância = horas * velocidade;
console.log("O valor da distância é de:", horas * velocidade);
