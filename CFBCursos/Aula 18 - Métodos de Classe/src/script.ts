class Ventilador{
    marca:string;
    velocidades:number;
    cor:string;

    constructor(marca:string, velocidades:number, cor:string){
        this.marca = marca;
        this.velocidades = velocidades;
        this.cor = cor;
    }

    info():void{
        console.log("Informações do ventilador:")
        console.log(`Marca: ${this.marca}`);
        console.log(`Velocidades: ${this.velocidades}`);
        console.log(`Cor: ${this.cor}`)
        console.log("-------------------------" )
    }
}

const eletrodomestico = new Ventilador("Malori", 3, "branco");

eletrodomestico.info();