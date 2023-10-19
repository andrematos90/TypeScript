"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Classes_1 = require("./Classes");
const pessoa = new Classes_1.Pessoa("André", 33);
const cachorro = new Classes_1.Cachorro("Rough Collie", 35);
console.log(pessoa.nome);
console.log(cachorro.raca);
