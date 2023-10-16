"use strict";
class Conta {
    nome;
    numero;
    saldo;
    constructor(nome) {
        this.nome = nome;
        this.numero = this.gerarNumeroConta();
        this.saldo = 0;
    }
    gerarNumeroConta() {
        return Math.floor(Math.random() * 100000) + 1;
    }
    info() {
        console.log(`nome do titular: ${this.nome}`);
        console.log(`numero da conta: ${this.numero}`);
        console.log();
        console.log("------------------------------");
    }
}
class ContaPF extends Conta {
    cpf;
    constructor(cpf, nome) {
        super(nome);
        this.cpf = cpf;
    }
    info() {
        super.info();
        console.log(`numero CPF....: ${this.cpf}`);
    }
    deposito(deposito) {
        if (deposito > 0 || deposito < 1000) {
            this.saldo += deposito;
            console.log("depositado com sucesso!");
        }
        else {
            console.log("deposito indisponivel!");
        }
        return this.saldo;
    }
    saque(saque) {
        if (saque <= this.saldo && saque < 1000) {
            this.saldo -= saque;
            console.log("saque realizado!");
        }
        else {
            console.log("saque indisponível");
        }
        return this.saldo;
    }
    mostraSaldo() {
        console.log(`saldo disponível: ${this.saldo}`);
    }
}
class ContaPJ extends Conta {
    cnpj;
    constructor(cnpj, nome) {
        nome;
        super(nome);
        this.cnpj = cnpj;
    }
    info() {
        super.info();
        console.log(`numero CNPJ: ${this.cnpj}`);
    }
    deposito(deposito) {
        if (deposito > 0 || deposito < 10000) {
            this.saldo += deposito;
            console.log("Depositado com sucesso!");
        }
        else {
            console.log("depoisto indisponível");
        }
        return this.saldo;
    }
    saque(saque) {
        if (saque <= this.saldo && saque < 10000) {
            this.saldo -= saque;
            console.log("saque realizado!");
        }
        else {
            console.log("saque indisponível");
        }
        return this.saldo;
    }
    mostraSaldo() {
        console.log(`saldo diponível: ${this.saldo}`);
    }
}
const cliente1 = new ContaPF(65151, "fulano");
const cliente2 = new ContaPJ(454352, "ciclano");
cliente1.info();
cliente1.deposito(10000);
cliente2.deposito(1000000);
cliente1.saque(500);
cliente2.saque(38000);
cliente1.mostraSaldo();
cliente2.mostraSaldo();
