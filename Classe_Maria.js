class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  apresentar() {
    console.log(`Olá! Meu nome é ${this.nome} e tenho ${this.idade} anos`);
  }
}
let essaPessoa = new Pessoa("Maria", 16);
essaPessoa.apresentar();
