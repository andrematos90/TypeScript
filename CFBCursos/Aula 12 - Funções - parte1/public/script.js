"use strict";
function saudacao(nome, msg = "Seja Bem vindo!") {
    console.log(`Olá ${nome}, ${msg}`);
}
saudacao("André");
saudacao("Simba", "Voce é um cachorro");
function somar(x, y) {
    let resultado = x + y;
    return resultado;
}
console.log(somar(2, 6));
