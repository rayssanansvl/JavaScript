//Criando um objeto do tipo "data" Date()
var data1 = new Date();
console.log(data1)

//Criando objeto do tipo "data" com data específica Date()
var data2 = new Date("2006=05-12");
console.log(data2);

//Extraindo partes de uma data
var data3 =  new Date("2007=12-19")
console.log(`Data: ${data3}`);
console.log(`Ano:${data3.getFullYear()}`);
console.log(`Mês:${data3.getMonth()+1}`);
console.log(`Dia:${data3.getDate()}`);

const mes = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
];
console.log(`Retornando o mês por escrito!`);
console.log(`Mês: ${mes[data3.getMonth()]}`);

const diaDaSemana = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
];
console.log(`Dia da semana: ${diaDaSemana[data3.getDay()]}`);
console.log("");
console.log("--------------------------------------------------")
const diferencaAnos = data1.getFullYear() - data3.getFullYear();
console.log(`Diferença em anos: ${diferencaAnos}`);

if(data1.getMonth() < data3.getMonth() || (data1.getMonth() === data3.getMonth() && data1.getDate() < data3.getDate())){
    console.log(`Ainda não fiz aniversário!`);
    console.log(`A Rayssa tem ${diferencaAnos - 1} anos`);
}
