function resumo(usuario: {nome: string, idade: number}){
    return `Olá ${usuario.nome} você tem ${usuario.idade} anos.`
}

let pessoa = {
    nome: 'André',
    idade: 33

};

resumo(pessoa);


/*
O código define uma função chamada resumo que espera um objeto como parâmetro contendo duas propriedades: nome (do tipo string) e idade (do tipo number). A função retorna uma string formatada com os valores dessas propriedades.

Depois, você cria um objeto chamado pessoa com as propriedades nome e idade.

Finalmente, você chama a função resumo passando o objeto pessoa como argumento. O TypeScript verifica se o objeto pessoa está em conformidade com a estrutura esperada pela função e, se sim, executa a função e retorna a string formatada.

Em resumo, o código realiza o seguinte:

Define uma função resumo que espera um objeto com as propriedades nome e idade.
Cria um objeto pessoa com as propriedades nome e idade.
Chama a função resumo passando o objeto pessoa como argumento.
Se o objeto pessoa não atender à estrutura esperada pela função, o TypeScript emitirá um erro durante a compilação, ajudando a garantir que o código seja escrito de maneira consistente e evitando erros em tempo de execução.*/
