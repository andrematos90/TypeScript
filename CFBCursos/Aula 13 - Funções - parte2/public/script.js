"use strict";
//função com parametro opcional
function soma(a, b, c) {
    if (typeof c == "undefined") {
        return a + b;
    }
    else {
        return a + b + c;
    }
}
console.log(soma(1, 8, 10));
console.log(soma(1, 9));
