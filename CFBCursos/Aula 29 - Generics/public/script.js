function teste(v, r) {
    return r;
}
console.log(teste(10, "B"));
console.log(teste("b", 10));
console.log(teste(true, false));
var classeDeTeste = /** @class */ (function () {
    function classeDeTeste(valor) {
        this.valor = valor;
    }
    return classeDeTeste;
}());
var objeto1 = new classeDeTeste("hellor world!");
var objeto2 = new classeDeTeste(10);
console.log(objeto1.valor);
console.log(objeto2.valor);
