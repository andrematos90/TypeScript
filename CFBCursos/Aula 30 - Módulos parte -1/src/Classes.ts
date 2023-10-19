export class Pessoa{
    nome:string;
    idade:number;
    
    constructor(nome:string, idade:number){
        this.nome = nome;
        this.idade = idade;
    }
}

export class Cachorro{
    raca:string;
    peso:number;

    constructor(raca:string, peso:number){
        this.raca = raca;
        this.peso = peso;
    }
}