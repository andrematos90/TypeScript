var Exemplo = /** @class */ (function () {
    function Exemplo(animal, nome) {
        this.animal = null;
        this.nome = null;
        this.animal = animal;
        this.nome = nome;
    }
    return Exemplo;
}());
var bicho = new Exemplo("Collie", "Simba");
console.log("Esp\u00E9cie: ".concat(bicho.animal));
console.log("Nome: ".concat(bicho.nome));


//versao javascript com ecma script mais antido, para alterar a versao e ter um código mais atual
// "tsc aula03.ts --target "ES2019""