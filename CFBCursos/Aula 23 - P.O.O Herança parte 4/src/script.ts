
class Conta {
    protected nome: string;     
    protected numero: number;   
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

    public deposita(deposito:number):number{
        if(deposito > 0 || deposito < 1000){
             this.saldo += deposito;
             console.log("depositado com sucesso!")
        }else{
            console.log("deposito indisponivel!")
        }
        return this.saldo;
    }

    public saque(saque:number):number{
        if(saque < this.saldo){
            this.saldo -= saque;
            console.log("saque realizado!");
        }else{
            console.log("saque indisponível")
        }
        return this.saldo;
    }

    public mostraSaldo():void{
        console.log(`saldo disponível: ${this.saldo}`)
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

    public deposita(deposito:number):number{
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
       if(saque < this.saldo){
        this.saldo -= saque;
       }
       return this.saldo;
    }

    public mostraSaldo():void{
        console.log(`saldo diponível: ${this.saldo}`)
    }

}

const cliente1 = new ContaPF(65151, "fulano"); 
const cliente2 = new ContaPJ(454352, "ciclano");  


cliente1.info() //método pode ser acessado pq é public
//cliente2.info()  gera erro pq método é protected

cliente1.deposita(100);
cliente1.deposita(10);
cliente2.deposita(2000);
cliente2.deposita(45);

cliente1.saque(28);
cliente2.saque(38);

cliente1.mostraSaldo();
cliente2.mostraSaldo();







