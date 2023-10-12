"use strict";
class Ventilador {
    marca;
    velocidades;
    cor;
    constructor(marca, velocidades, cor) {
        this.marca = marca;
        this.velocidades = velocidades;
        this.cor = cor;
    }
    info() {
        console.log("Informações do ventilador:");
        console.log(`Marca: ${this.marca}`);
        console.log(`Velocidades: ${this.velocidades}`);
        console.log(`Cor: ${this.cor}`);
        console.log("-------------------------");
    }
}
const eletrodomestico = new Ventilador("Malori", 3, "branco");
eletrodomestico.info();
