"use strict";
const soma = (array) => {
    let s = 0;
    array.forEach((element) => {
        s += element;
    });
    return s;
};
let numero = [11, 9, 30];
console.log(soma(numero));
