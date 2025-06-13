console.log("=== EXERCÍCIO 01: HIERARQUIA DE FUNCIONÁRIOS ===");
console.log("Conceito: HERANÇA\n");
// Classe pai
class Funcionario {
  contructor(nome, salarioBase) {
    this.nome = nome;
    this.salarioBase = salarioBase;
  }
  calcularSalario() {
    return this.salarioBase;
  }
  apresentar() {
    console.log(`${this.nome} - Funcionário`);
  }
}
//Classe filha - Vendedor
class Vendedor extends Funcionario {
  constructor(nome, salarioBase, vendas) {
    super(nome, salarioBase); // Chama constructor da classe pai
    this.vendas = vendas;
  }
  //Sobrescreve o método da classe pai
  calcularSalario() {
    return this.salarioBase + this.vendas * 50;
  }
  //Sobrescreve o método apresentar
  apresentar() {
    console.log(`${this.nome} - vendedor com ${this.vendas} vendas este mês`);
  }
}
//Classe filha - Gerente
class Gerente extends Funcionario {
  constructor(nome, salarioBase, bonus) {
    super(nome, salarioBase);
    this.bonus = bonus;
  }
  //Sobrescreve o método da classe pái
  calcularSalario() {
    return this.salarioBase + this.bonus;
  }
  //Sobrescreve o método apresentar
  apresenar() {
    console.log(`${this.nome} - Gerente com bônus de R$${this.bônus}`);
  }
}
//Teste do Exercício 01
const funcionario1 = new Funcionario("João", 3000);
const vendedor1 = new Vendedor("Ana", 2000, 10);
const gerente1 = new Gerente("Carlos", 5000, 1500);

console.log("=== Apresentações ===");
funcionario1.apresentar(); // João - FUncionário
vendedor1.apresentar(); //Ana - Vendedor com 10 vendas este mês
gerente1.apresenar(); // Carlos - Gerente com bônus de R$1500

console.log("\n=== Salários ===");
console.log(`${funcionario1.nome}: R$${funcionario1.calcularSalario()}`); // 3000
console.log(`${vendedor1.nome}: R$${vendedor1.calcularSalario()}`); // 2500 (2000)
console.log(`${gerente1.nome}: R$${gerente1.calcularSalario()}`); // 6500 (5000)
