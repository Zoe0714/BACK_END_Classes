class Carro{
    
constructor (marca, modelo, ano){
this.marca = marca;
this.modelo = modelo;
this.ano = ano;

}
ligar(){
    console.log(`${this.marca} ${this.modelo} Está ligado!`);
}
}
let meuCarro= new Carro("Honda", "Civic", 2025);
meuCarro.ligar();