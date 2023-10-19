"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cachorro = exports.Pessoa = void 0;
class Pessoa {
    nome;
    idade;
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}
exports.Pessoa = Pessoa;
class Cachorro {
    raca;
    peso;
    constructor(raca, peso) {
        this.raca = raca;
        this.peso = peso;
    }
}
exports.Cachorro = Cachorro;
