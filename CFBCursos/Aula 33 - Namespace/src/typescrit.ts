namespace Veiculos{
   export abstract class Carro{
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
       private pressao:number
        constructor(pressao:number){
            this.pressao = pressao;
        }

        public getPressao():number{
            return this.pressao;
        }
    }
    export class Motor{
        private ligado:boolean;
        private qtcilindros:number;
        private potencia:number
        constructor(potencia:number, turbo?:Turbo){
            this.potencia = potencia + (turbo?turbo.getPressao():0);
            this.ligado = false;
            this.qtcilindros = 0;
        }

        public getLigado(){
            return this.ligado;
        }

        public setLigado(ligado:boolean){
            this.ligado = ligado;
        }

        public getQtcilindros(){
            return this.qtcilindros;
        }

        public setQtcilindros(qtcilindroscilindros:number){
            this.qtcilindros = qtcilindroscilindros;
        }

        public getPotencia(){
            return this.potencia;
        }

        public setPotencia(potencia:number){
            this.potencia = potencia;
        }
    }
}