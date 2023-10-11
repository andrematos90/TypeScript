class Animal{
    especie:string = '';
    familia:string = '';
    patas:number = 0;
    extinto:boolean = false;
}

const animal1 = new Animal();
const animal2 = new Animal();

animal1.especie = "cachorro";
animal1.familia = "canideos";

animal2.especie = "t-rex";
animal2.patas = 2;
animal2.extinto = true;

console.log(`O ${animal1.especie}, é da família dos ${animal1.familia}.`)
console.log();
console.log(`O ${animal2.especie} esta esta extinto?${animal2.extinto? "sim" : "não"}`)

