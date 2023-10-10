//função com valor padrão/pré-definido
function saudacao(nome: string, msg : string = "Seja Bem vindo!"):void{
    console.log(`Olá ${nome}, ${msg}`)
}

saudacao("André");
saudacao("Simba", "Voce é um cachorro");

function somar(x : number, y : number):number{
    let resultado:number  = x + y;
    return resultado;
}

console.log(somar(2, 6));