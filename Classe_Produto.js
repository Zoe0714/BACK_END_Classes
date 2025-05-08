class Produto{

    constructor (dados,vender, repor){
    this.dados = dados;
    this.vender = vender;
    this.repor = repor;

    }
    dadosProdutos(){
        console.log(`O produto possui os seguintes dados: ${this.dados} `)
    }
    }
    let produto= new Produto("Caneta", 2.5, 100);
    produto.dadosProdutos(10);
    produto.dadosProdutos(20);