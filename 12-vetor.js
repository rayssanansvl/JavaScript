const numeros = [1, 2, 3, 4, 5];
console.log(numeros);
console.log(numeros[2]);

numeros[2] = 6;
console.log(numeros);
console.log(numeros[2]);

numeros[2] = 28;
console.log(numeros);
console.log(numeros[2]);

//Criando variáveis do tipo array (vetores)

var dinos = ["Tiranossauro Rex", "Estegossauro", "Anquilossauro"];
console.log(dinos); //retorna todos os itens do array
console.log(dinos[0]); //retorna o primeiro índice do array
console.log(""); //pular uma linha
console.table(dinos); //Cria tabela com os itens do array
console.log("O vetor tem", dinos.length, "elementos!"); //mostrando quantidade de itens

//Adicionando elementos ao vetor existente
dinos.push("Brontossauro"); //array.push adiciona um item no final do vetor
console.table(dinos);

dinos.unshift("Tricerátops"); //Adiciona itens no inicio do array
console.log(dinos);

//Alterando elementos com base no indice (posição)
dinos[3] = "Titanossauro";
console.log(dinos);

//Obtendo um elemento com base em seu indice
console.log("Primeira posição:", dinos[0]);
console.log("Segunda posição:", dinos[1]);
console.log("Item da posição 20:", dinos[19]); //retorna indefinido

//Removendo elementos do vetor
dinos.pop() //remove o último elementos do vetor
console.table(dinos);

dinos.shift(); //remove o primeiro elemento do vetor
console.table(dinos);

dinos.splice(1,1); //remove o elemento a partir do indice 1, contando 1.
console.table(dinos);

console.log("");
console.log("---------------Continuação da Aula----------------");
var dinos = [
    "Triceratops",
    "Tiranossauro Rex",
    "Estegossauro",
    "Anquilossauro",
    "Brontossauro",
    "Inctiossauro",
    "Pterodáctilo",
    "Espinossauro",
];
console.table(dinos);

var elementoProcurado = "Brontossauro";
var posicao = dinos.indexOf(elementoProcurado); //retorna o valor do indice da tabela
console.log("O " + elementoProcurado + " está no índice " + posicao);

var elementoProcurado = "Pterodáctilo";
var posicao = dinos.indexOf(elementoProcurado);
console.log("O " + elementoProcurado + " está no índice " + posicao);

var elementoProcurado = "Triceratops";
var posicao = dinos.indexOf(elementoProcurado);
console.log("O " + elementoProcurado + " está no índice " + posicao);

//Criando copia de array (vetor)
var copia1 = dinos.slice(); //.slice() faz uma copia real do item do vetor
console.log("Vetor copia 1");
console.table(copia1);

var copia2 = dinos.slice(1,3); //.slice (1,3) determino onde começa e onde termina a copia
console.log("Vetor copia 2");
console.table(copia2);


