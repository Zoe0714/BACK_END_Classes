console.log("====ENCAPSULAMENTO====");
class ContaBancaria{
    #saldo = 0;
    constructor(titular){
        this.titular = titular;
    }
    //Método público para depositar
    depositar(valor){
        if(valor >0){
            this.#saldo += valor;
            console.log(`Depósito de R$${valor} realizado`)
        }else{
            console.log("Valor inválido para depósito");
        }  
    }
    sacar(valor){
        if(valor >0 && valor >= this.#saldo){
            this.#saldo -=valor;
            console.log(`Saque de R$${valor} realizado`);
        }
    else{console.log("saldo insuficiente ou valor inválido");}
    }
    consultarSaldo() {return this.#saldo}
}
const minhaconta = new ContaBancaria("João");
minhaconta.depositar(100)
minhaconta.sacar(30)
console.log(`Saldo: R$${minhaconta.consultarSaldo()}`);

//console.log(minhaConta#saldo; //Erro! Propriedade privada.)