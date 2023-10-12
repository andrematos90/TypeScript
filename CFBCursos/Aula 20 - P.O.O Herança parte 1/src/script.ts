class Conta{
    public nome:string;
    public numero:number;

    constructor(nome:string, numero:number){
        this.nome = nome;
        this.numero = numero;
    }
}

class ContaPF extends Conta{

}

class ContaPJ extends Conta{

}

const cliente1 = new ContaPF("Jubileu", 1516115);
const cliente2 = new ContaPJ("Fulano", 453545);

console.log(cliente1.nome) // mesmo sem nada na classe "ContaPF" a propriedade nome é acessivel pq é herdada da classe "Conta"

console.log(cliente2.numero)
