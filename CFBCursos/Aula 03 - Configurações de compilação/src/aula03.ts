class Exemplo{
    animal = null;
    nome=null;

    constructor(animal:any, nome:any){
        this.animal = animal;
        this.nome = nome;
    }
}

let bicho = new Exemplo("Collie", "Simba");

console.log(`Espécie: ${bicho.animal}`);
console.log(`Nome: ${bicho.nome}`);