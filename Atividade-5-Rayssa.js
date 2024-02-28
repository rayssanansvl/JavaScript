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
console.log(`O carro poderá viajar cerca de: ${media(50)} kms`);
