"use strict";
// Definindo um enum chamado "dias" com dias da semana.
var dias;
(function (dias) {
    dias[dias["domingo"] = 0] = "domingo";
    dias[dias["segunda"] = 1] = "segunda";
    dias[dias["terca"] = 2] = "terca";
    dias[dias["quarta"] = 3] = "quarta";
    dias[dias["quinta"] = 4] = "quinta";
    dias[dias["sexta"] = 5] = "sexta";
    dias[dias["sabado"] = 6] = "sabado";
})(dias || (dias = {}));
// Imprimindo o enum "dias" inteiro, que exibirá os valores associados aos dias da semana.
console.log(dias);
// Acessando o elemento do enum "dias" com índice 3, que é "quarta" (pois a enumeração começa em 0).
console.log(dias[3]);
// Criando um objeto Date para representar a data atual.
const dia = new Date();
// Imprimindo o dia do mês atual usando a função getDate() do objeto Date.
console.log(dia.getDate());
// Imprimindo o dia da semana atual usando a função getDay() do objeto Date.
console.log(dia.getDay());
// Acessando o enum "dias" com o índice obtido a partir de getDay() para obter o dia da semana atual.
console.log(dias[dia.getDay()]);
// Declarando uma variável "tipo" do tipo "dias" e atribuindo o valor "quinta" a ela.
let tipo = dias.quinta;
console.log(tipo);
