var frutas = ["Banana", "Maçã", "Pera", "Uva", "Morango"];
console.table(frutas);

frutas.push("Tangerina");
console.table(frutas);

frutas.unshift("Goiaba");
console.table(frutas);

console.log("A fruta contida no índice 5 é", frutas[5]);

var position = frutas.indexOf("Uva");
console.log(position);
frutas.splice(position, 1);
console.table(frutas);

var copia = frutas.slice(2, 5);
console.table(copia);

//Próximo Exercício:

var numeros = [10, 20, 30, 40, 50];
console.table(numeros);

console.log("O terceiro elemento do vetor é", numeros[3]);
var copianumeros = numeros.slice();
console.table(copianumeros);

copianumeros[0] = numeros[0] * 2;
copianumeros[1] = numeros[1] * 2;
copianumeros[2] = numeros[2] * 2;
copianumeros[3] = numeros[3] * 2;
copianumeros[4] = numeros[4] * 2;
console.table(copianumeros);
