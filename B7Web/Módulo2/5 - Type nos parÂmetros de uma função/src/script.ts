function firstLetterUpperCase(name: string){
    let firstLetter = name.charAt(0).toUpperCase();
    return firstLetter + name.substring(1);
}


let nome: string = firstLetterUpperCase("andré");
console.log(nome);


/*
 O código que você forneceu é uma função chamada firstLetterUpperCase que pega uma string name como entrada, converte a primeira letra dessa string para maiúscula e, em seguida, concatena o restante da string não alterada. Vou explicar o código linha por linha:

 function firstLetterUpperCase(name: string) {
    let firstLetter = name.charAt(0).toUpperCase();
    return firstLetter + name.substring(1);
}


function firstLetterUpperCase(name: string): Isso declara uma função chamada firstLetterUpperCase que recebe um parâmetro name do tipo string. Isso significa que a função espera um argumento do tipo string quando for chamada.

let firstLetter = name.charAt(0).toUpperCase();: Aqui, a função charAt(0) é usada para pegar o primeiro caractere da string name. O método toUpperCase() é chamado nesse caractere para convertê-lo em maiúscula. O resultado é armazenado na variável firstLetter.

return firstLetter + name.substring(1);: Nesta linha, a função retorna a concatenação da firstLetter maiúscula com o restante da string name, começando a partir do segundo caractere (índice 1). Isso é feito usando o método substring(1), que retorna uma parte da string a partir do índice 1 até o final.

Agora, vamos à parte em que a função é chamada:

let nome: string = firstLetterUpperCase("andré");
console.log(nome);


let nome: string = firstLetterUpperCase("andré");: Aqui, a função firstLetterUpperCase é chamada com o argumento "andré". O valor retornado pela função é atribuído à variável nome, que é do tipo string.

console.log(nome);: Finalmente, a string resultante após a conversão da primeira letra em maiúscula é impressa no console.

Assim, se você executar esse código, o resultado será a impressão da string "André", com a primeira letra em maiúscula, porque a função firstLetterUpperCase realiza essa transformação.