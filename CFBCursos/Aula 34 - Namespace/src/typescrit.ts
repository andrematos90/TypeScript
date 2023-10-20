namespace Veiculos{
    enum Cores{"preto", "branco", "vermelho"};
   export abstract class Carro{
        private modelo:string;
        private montadora:string;
        private motor:Motores.Motor
        cor:Cores;
        constructor(modelo:string, motor:Motores.Motor, cor:Cores){
            this.modelo = modelo;
            this.montadora = "indefinida";
            this.motor = new Motores.Motor(100);
            this.cor = Cores[cor];
        }

        public ligar(){
            this.motor.getLigado;
        }

        public desligar(){
            this.motor.setLigado(false);
        }

        get minhaCor(){
            return this.cor;
        }

        get meuModelo(){
            return this.modelo;
        }

        get taLigado(){
            return(this.motor.getLigado()?"sim":"não");
        }

        get minhaPotencia(){
            return this.motor.getPotencia
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