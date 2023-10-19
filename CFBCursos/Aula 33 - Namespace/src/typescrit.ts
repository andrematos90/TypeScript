namespace Veiculos{
   export class Carro{
        modelo:string;
        montadora:string;
        motor:Motores.Motor
        constructor(modelo:string){
            this.modelo = modelo;
            this.montadora = "indefinida";
            this.motor = new Motores.Motor(100);
        }

    }
}

namespace Motores{
    class Turbo{
        pressao:number
        constructor(pressao:number){
            this.pressao = pressao;
        }
    }
    export class Motor{
        potencia:number
        constructor(potencia:number){
            this.potencia = potencia;
        }
    }
}