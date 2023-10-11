"use strict";
class Aeronave {
    tipo;
    autonomia;
    fabricante;
    constructor(tipo, autonomia, fabricante) {
        this.tipo = tipo;
        this.autonomia = autonomia;
        this.fabricante = fabricante;
    }
}
const aeronave1 = new Aeronave("Avião", 2000, "Embraer");
const aeronave2 = new Aeronave("Helicoptero", 500, "LockHeed Martin");
console.log(`A primeira aeronave é um ${aeronave1.tipo}, com autonomia de 
 ${aeronave1.autonomia} km e fabricante é a ${aeronave1.fabricante}`);
console.log(`A segunda aeronave é um ${aeronave2.tipo}, com autonomia de 
 ${aeronave2.autonomia} km e fabricante é a ${aeronave2.fabricante}`);
