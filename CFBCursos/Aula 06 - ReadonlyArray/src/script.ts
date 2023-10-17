//formas de declarar o array e seu tipo
// let numeros : Array<number>
// let numeros : number[]
// let numeros:(number)[]



let arrayNormal : Array<string> = ["Casa", "Avião", "Mansão"]

//esse tipo de array aceita todos os métodos de manipulação de arrays
arrayNormal.push("Navio"); //push adiciona elemento no final do array
arrayNormal.unshift("Bicicleta"); //unshift adiciona elemento no inicio do array
arrayNormal.pop(); //pop exclui o ultimo elemento do array
arrayNormal.shift(); //shift exclui elemento do inicio


arrayNormal.forEach((element : string)=> {
    console.log(element);
});


// ReadonlyArray só aceita métodos de leitura e nenhum que altera o array
let numeros : ReadonlyArray<number>=[100, 200, 300]; 

numeros.forEach((element : number) => {
    console.log(element)
});

