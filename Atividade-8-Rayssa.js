// Criar uma classe Aluno em JavaScript que represente um aluno em uma instituição de ensino.
//A classe deve receber informações do aluno, calcular sua idade e apresentar-se como métodos.

// Requisitos:
// A classe Aluno deve ter os seguintes atributos:
// ra: Número de Registro do Aluno (string)
// nome: Nome completo do aluno (string)
// dataNascimento: Data de nascimento do aluno (data)
// curso: Curso do aluno (string)

// A classe Aluno deve ter os seguintes métodos:
// calcularIdade(): Calcula e retorna a idade do aluno em anos.
// apresentar(): Exibe as informações do aluno no formato:

class Aluno {
  constructor(ra, nome, anoNascimento, curso) {
    this.ra = ra;
    this.nome = nome;
    this.anoNascimento = anoNascimento;
    this.curso = curso;
  }
  calcularIdade() {
    return 2024 - this.anoNascimento;
  }
  apresentar() {
    console.log(
      `Olá, meu nome é ${
        this.nome
      } e eu tenho ${this.calcularIdade()} anos, meu ra é ${
        this.ra
      }, e estou cursando ${this.curso}.`
    );
  }
}

const rayssaAluna = new Aluno(
  12345678,
  "Rayssa",
  2007,
  "Desenvolvimento de Sistemas"
);
rayssaAluna.apresentar();

// Crie e utilize uma classe "Sorvete" contendo as propriedades : sabor, preço e tamanho (P | M | G)
// Crie um sorvete de morango grande
// Crie um sorvete de chocolate pequeno
// Crie um sorvete de melancia medio
// Altere o preço do sorvete de morango grande para  R$ 10,51
console.log("");
console.log(`------------------------------------------------------------`)
class Sorvete {
  constructor(sabor, preco, tamanho) {
    this.sabor = sabor;
    this.preco = preco;
    this.tamanho = tamanho;
  }
  getPreco() {
    return this.preco;
  }
  alterarPreco(novoPreco) {
    this.preco = novoPreco;
  }
}
console.log(`Olá, somos a Sorveteria Sweet Ice Cream confira os nossos sabores,preços e tamanhos à seguir:`);
const morango = new Sorvete("Morango", 12, "G");
console.table(morango);

const chocolate = new Sorvete("Chocolate",13, "P");
console.table(chocolate);

const melancia = new Sorvete("Melância",9, "M");
console.table(melancia);

console.log(`Atenção clientes promoção! Houve alteração no preço do sorvete de Morango!`);
morango.alterarPreco(10.51);
console.table(morango);
