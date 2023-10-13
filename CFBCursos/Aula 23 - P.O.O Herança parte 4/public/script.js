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
    deposita(deposito) {
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
        if (saque < this.saldo) {
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
    deposita(deposito) {
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
        if (saque < this.saldo) {
            this.saldo -= saque;
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
cliente1.deposita(100);
cliente1.deposita(10);
cliente2.deposita(2000);
cliente2.deposita(45);
cliente1.saque(28);
cliente2.saque(38);
cliente1.mostraSaldo();
cliente2.mostraSaldo();
