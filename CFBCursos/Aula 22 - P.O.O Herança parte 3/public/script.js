"use strict";
class Conta {
    nome;
    numero;
    constructor(nome) {
        this.nome = nome;
        this.numero = this.gerarNumeroConta();
    }
    gerarNumeroConta() {
        return Math.floor(Math.random() * 100000) + 1;
    }
}
class ContaPF extends Conta {
    cpf;
    constructor(cpf, nome) {
        super(nome);
        this.cpf = cpf;
    }
}
class ContaPJ extends Conta {
    cnpj;
    constructor(cnpj, nome) {
        super(nome);
        this.cnpj = cnpj;
    }
}
const cliente1 = new ContaPF(65151, "fulano");
const cliente2 = new ContaPJ(454352, "ciclano");
console.log(cliente1.numero);
console.log(cliente2.numero);
