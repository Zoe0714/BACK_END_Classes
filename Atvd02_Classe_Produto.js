class Produto {
  constructor(nome, preco, quantidade) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }
  mostrarDados() {
    console.log(
      `Produto: ${this.nome}, Preço: R$ ${this.preco}, Quantidade: ${this.quantidade}`
    );
  }
  vender(qtd) {
    if ((qtd = this.quantidade)) {
      this.quantidade -= qtd;
      console.log(
        `Venda realizada. Quantidade atual: ${this.quantidade} itens.`
      );
    } else {
      console.log("Estoque insuficiente para venda");
    }
  }
  repor(qtd) {
    this.quantidade += qtd;
    console.log(`Reposição feita. Quantidade atual: ${this.quantidade} itens.`);
  }
}
let produto = new Produto("Caneta", 2.5, 100);
//produto.mostrarDados();
//produto.vender(15);
produto.repor(20);
