"use strict";
function somar(...args) {
    let soma = 0;
    args.forEach((valorDaVez) => {
        soma += valorDaVez;
    });
    return soma;
}
console.log(`valor da soma: ${somar(1, 4, 2, 2, 1)}`);
