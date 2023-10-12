"use strict";
class Pessoa {
    nome; //pode ser acessado e modificado diretamente fora da classe.
    idade; // só pode ser acessada e modificada dentro da classe Pessoa e em suas subclasses (caso existam).
    CPF; // só pode ser acessado e modificado dentro da própria classe Pessoa.
    constructor(nome) {
        this.nome = nome;
        this.idade = 0;
        this.CPF = 0;
    }
}
const pessoa1 = new Pessoa("André");
pessoa1.nome = "Simba";
/*não sao acessiveis, nessecitam de metos getters e setters
pessoa1.idade
pessoa1.CPF*/ 
