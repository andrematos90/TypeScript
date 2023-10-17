
abstract class Conta {
    protected nome: string;     
    private readonly numero: number;   //readonly faz com que o numero só seja           "setado" uma vez no construror uma vez e depois nao pode mais ser alterado
    protected saldo:number;

    constructor(nome: string) {     
        this.nome = nome;           
        this.numero = this.gerarNumeroConta();   
        this.saldo = 0;
    }

    gerarNumeroConta(): number {    
        return Math.floor(Math.random() * 100000) + 1;
    }

    protected info(){
        console.log(`nome do titular: ${this.nome}`);
        console.log(`numero da conta: ${this.numero}`);
        console.log();
        console.log("------------------------------");
       
    }

    public mudaNuumero(nn:number){
        this.numero = this.numero; // gera erro pq a propriedade é readonly
    }

   
}


class ContaPF extends Conta {
    public cpf: number;   

    constructor(cpf: number, nome: string) {  
        super(nome);     
        this.cpf = cpf;   
    
    }
    public info(): void {
        super.info();
        console.log(`numero CPF....: ${this.cpf}`)
    }

    public set deposito(deposito:number){
        if(deposito > 0 || deposito < 1000){
             this.saldo += deposito;
             console.log("depositado com sucesso!")
        }else{
            console.log("deposito indisponivel!")
        }
        
    }

    public set saque(saque:number){
        if(saque <= this.saldo && saque <1000){
            this.saldo -= saque;
            console.log("saque realizado!");
        }else{
            console.log("saque indisponível")
        }
    }

    public get valorSaldo():void{
        return console.log(`valor de saldo na conta: ${this.saldo}`);
    }
  
    
}


class ContaPJ extends Conta {
    public cnpj: number;  

    constructor(cnpj: number, nome: string) {  nome
        super(nome);       
        this.cnpj = cnpj;  
         
    }
    protected info(): void {
        super.info();
        console.log(`numero CNPJ: ${this.cnpj}`)
    }

    public deposito(deposito:number):number{
        if(deposito > 0 || deposito < 10000){
             this.saldo += deposito;
             console.log("Depositado com sucesso!")
        }
        else{
            console.log("depoisto indisponível")
        }

        return this.saldo;
    }

    public saque(saque:number):number{
       if(saque <= this.saldo && saque <10000){
        this.saldo -= saque;
        console.log("saque realizado!")
       }else{
        console.log("saque indisponível");
       }
       return this.saldo;
    }

    public mostraSaldo():void{
        console.log(`saldo diponível: ${this.saldo}`)
    }

}

const cliente1 = new ContaPF(65151, "fulano"); 
const cliente2 = new ContaPJ(454352, "ciclano");  
//const clien= new Conta("dfd"); não se pode instanciar a classe "Conta" por ser abstract


cliente1.info() 

cliente1.deposito = 50  // método continua funcionando mas agora como uma propriedade pois é um set
cliente2.deposito(1000000);

cliente1.saque;
cliente2.saque(38000);

cliente1.valorSaldo; // método continua funcionando mas agora como uma propriedade pois é um set
cliente2.mostraSaldo();







