function firstLetterUpperCase(name: string): string{
    let firstLetter = name.charAt(0).toUpperCase();
    return firstLetter + name.substring(1);
}


let nome  = firstLetterUpperCase("andré");
console.log(nome);


function somar(v1: number, v2: number): number{
    return v1 + v2
}

let soma = somar(90, 10);