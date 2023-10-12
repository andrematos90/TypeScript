// Definição da classe base "Conta"
class Conta {
    public nome: string;     // Propriedade para armazenar o nome da conta
    public numero: number;   // Propriedade para armazenar o número da conta

    constructor(nome: string) {     // Construtor da classe, aceita um argumento "nome"
        this.nome = nome;           // Define a propriedade "nome" com o valor passado
        this.numero = this.gerarNumeroConta();   // Gera um número de conta aleatório
    }

    gerarNumeroConta(): number {    // Método para gerar um número de conta aleatório
        return Math.floor(Math.random() * 100000) + 1;
    }
}

// Classe que herda de "Conta" e representa uma conta de Pessoa Física
class ContaPF extends Conta {
    public cpf: number;   // Propriedade específica para armazenar o CPF

    constructor(cpf: number, nome: string) {  // Construtor da classe, aceita CPF e nome
        super(nome);       // Chama o construtor da classe base para definir o nome e gerar um número de conta
        this.cpf = cpf;    // Define a propriedade "cpf" com o valor passado
    }
}

// Classe que herda de "Conta" e representa uma conta de Pessoa Jurídica
class ContaPJ extends Conta {
    public cnpj: number;  // Propriedade específica para armazenar o CNPJ

    constructor(cnpj: number, nome: string) {  // Construtor da classe, aceita CNPJ e nome
        super(nome);       // Chama o construtor da classe base para definir o nome e gerar um número de conta
        this.cnpj = cnpj;  // Define a propriedade "cnpj" com o valor passado
    }
}

// Criação de instâncias de objetos
const cliente1 = new ContaPF(65151, "fulano");  // Cria uma conta de Pessoa Física
const cliente2 = new ContaPJ(454352, "ciclano");  // Cria uma conta de Pessoa Jurídica

// Impressão dos números de conta no console
console.log(cliente1.numero);  // Imprime o número de conta da Pessoa Física
console.log(cliente2.numero);  // Imprime o número de conta da Pessoa Jurídica



/*

O código que você forneceu é um exemplo de herança em TypeScript, envolvendo uma classe base chamada Conta e duas classes derivadas, ContaPF e ContaPJ. Aqui está uma explicação do que o código faz:

A classe Conta é a classe base. Ela possui duas propriedades públicas: nome e numero. A propriedade nome armazena o nome do titular da conta, e a propriedade numero é gerada aleatoriamente no construtor da classe usando o método gerarNumeroConta.

O método gerarNumeroConta gera um número de conta aleatório entre 1 e 1000.

As classes ContaPF e ContaPJ são classes derivadas que herdam de Conta. Ambas têm propriedades adicionais: cpf para ContaPF e cnpj para ContaPJ. Ambas as classes chamam o construtor da classe base (super(nome)) para inicializar a propriedade nome e herdam a propriedade numero.

No final do código, duas instâncias de clientes são criadas: uma ContaPF chamada cliente1 com um CPF específico e um nome, e uma ContaPJ chamada cliente2 com um CNPJ e um nome.

Por fim, o código imprime os números de conta gerados para ambos os clientes usando console.log(cliente1.numero) e console.log(cliente2.numero).

A principal ideia aqui é mostrar a herança e como as classes derivadas podem herdar propriedades e métodos da classe base. No entanto, uma observação importante é que a geração aleatória de números de conta pode não ser a abordagem mais segura ou prática em uma aplicação real, já que a chance de colisão (dois clientes recebendo o mesmo número de conta) é possível. Em sistemas de gerenciamento de contas financeiras reais, normalmente, os números de conta são gerados e atribuídos de uma maneira mais controlada.*/