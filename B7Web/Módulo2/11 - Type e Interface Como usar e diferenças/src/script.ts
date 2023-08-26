
//primeira forma de criar o próprio type

type NomeCompleto = string; // nome do type em PascalCase

let nome: NomeCompleto = 'André'


/*se usa um type próprio quando se quer simplificar e organizar o código ou quando se tem 
um type que é replicado em vários lugares do código.
Por exempplo se tem uma váriavel que aceita string ou number 
pode se criar um type que aceita esses dois tipos para poder aplicar as variáveis 
*/

type Idade = string | number;

let idade: Idade = 90;

function mostrarIdade(i: Idade){  // a função aceita como parâmetro string ou numbeer
    console.log(idade)
}

/* outra situação que se usa type proprio
para simplificar quando o objeto tem várias propriedades que deveriam ser passadas na função
um type pode ser criado para o código ficar mais organizado
*/

type User = {
    nome: string,
    idade: number,
};

function resumo(usuario: User) {
    return `Olá ${usuario.nome} você tem ${usuario.idade} anos`;
}

resumo({
    nome: 'André',
    idade: 33
});


/* segunda forma de criar types é com interface


interface User  {
    nome: string,
    idade: number,
};

function resumo(usuario: User) {
    return `Olá ${usuario.nome} você tem ${usuario.idade} anos`;
}

resumo({
    nome: 'André',
    idade: 33
});




A diferença é que com o type não se pode alterar, por exemplo adicionar novas propriedades 
com inteface se consegue

interface User  {
    nome: string,
    idade: number
    
};

interface User  {
    nome: string,
    idade: number,
    altura: number
    
};


function resumo(usuario: User) {
    return `Olá ${usuario.nome} você tem ${usuario.idade} anos`;
}

resumo({
    nome: 'André',
    idade: 33
});


*/