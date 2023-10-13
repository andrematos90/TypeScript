
class Conta {
    protected nome: string;     
    private numero: number;   

    constructor(nome: string) {     
        this.nome = nome;           
        this.numero = this.gerarNumeroConta();   
    }

    gerarNumeroConta(): number {    
        return Math.floor(Math.random() * 100000) + 1;
    }
}


class ContaPF extends Conta {
    public cpf: number;   

    constructor(cpf: number, nome: string) {  
        super(nome);     
        this.cpf = cpf;   
    }
}


class ContaPJ extends Conta {
    public cnpj: number;  

    constructor(cnpj: number, nome: string) {  nome
        super(nome);       
        this.cnpj = cnpj;  

        console.log(this.nome) //nao gera erro pq o campo é prrotected e pode ser acessado nas classes derivadas 
        console.log(this.numero) // gera ero pq o campo é private e só pode ser acessado
        // na clase base
    }

}

const cliente1 = new ContaPF(65151, "fulano"); 
const cliente2 = new ContaPJ(454352, "ciclano");  

// agora gera erro pq o campo protected
console.log(cliente1.name);  
//gera  erro pq o campo é private
console.log(cliente2.numero); 



