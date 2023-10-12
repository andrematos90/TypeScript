class Pessoa{
    public nome:string; //pode ser acessado e modificado diretamente fora da classe.
    protected idade:number; // só pode ser acessada e modificada dentro da classe Pessoa e em suas subclasses (caso existam).
    private CPF:number; // só pode ser acessado e modificado dentro da própria classe Pessoa.
    
    constructor(nome:string){
        this.nome = nome;
        this.idade = 0;
        this.CPF =  0;
    }
}

const pessoa1 = new Pessoa("André");
pessoa1.nome = "Simba";


/*não sao acessiveis, nessecitam de metos getters e setters
pessoa1.idade
pessoa1.CPF*/