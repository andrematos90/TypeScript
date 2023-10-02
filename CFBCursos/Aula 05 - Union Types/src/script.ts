let numeroOuPalavra : number | string;

numeroOuPalavra = "ola mundo!"
numeroOuPalavra = 10;

let arrayDeCoisas: (number | string )[] = [1, "carro", 1000, "aviao"];

arrayDeCoisas.forEach((item: number | string) => {
    console.log(item)
});