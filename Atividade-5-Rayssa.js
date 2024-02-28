//Crie uma função que receba como parâmetro o ano de nascimento de uma pessoa a retorne sua idade.

function idade(anoNascimento) {
    return 2024 - anoNascimento;
}
console.log(`A minha idade nesse ano de 2024 é de ${idade (2007)} anos`);

//Crie uma função que receba a quantidade de combustível de um carro e retorne quantos Kms ele pode viajar com esse combustível.
//Considere que o veículo faz uma média de 12 Kms/L

function media(combustivel) {
    return 12 * combustivel;
}

console.log(`Um carro de 50 litros poderá viajar cerca de ${media(50)} kms`);

//Crie uma função que receba a idade de uma pessoa e retorne uma frase dizendo se ela pode votar ou não.
console.log("");
console.log("-------------------------------------------------------");
var idade = 16;
function votacao (idade){
    if (idade < 16)
        console.log("Você não pode votar!");
    else if (idade >= 16 && idade <18){
        console.log("Você pode votar, mas não é obrigatório");
}
    else{
        console.log("Você pode votar");
    }
}
votacao(16);

console.log("------------------------------------------------------");

function votacao2(idade){
    switch (true) {
        case idade < 16:
            console.log(`Você não pode votar!`);
            break;
        case idade >= 16 && idade < 18:
            console.log(`Você pode votar, mas não é obrigatório!`);
             break;
        default:
            console.log(`Você pode votar!`);
            break;
    }
}

votacao2(10);



