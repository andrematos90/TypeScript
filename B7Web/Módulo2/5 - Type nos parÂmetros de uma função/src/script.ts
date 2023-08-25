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


                                         charAT()

A função charAt() é um método usado em strings em várias linguagens de programação, incluindo JavaScript e TypeScript, para acessar o caractere em uma posição específica dentro da string. Essa função permite que você recupere o caractere localizado em um índice específico na sequência de caracteres.

Em JavaScript/TypeScript, as strings são tratadas como arrays de caracteres, onde cada caractere é acessível através de um índice numérico. A função charAt() segue essa ideia e permite que você acesse um caractere específico da string pelo seu índice.

Aqui está a sintaxe geral da função charAt() em TypeScript/JavaScript:

const char = minhaString.charAt(indice);



Onde:

minhaString é a string da qual você deseja extrair o caractere.
indice é o índice numérico que representa a posição do caractere na string. O índice começa em 0 para o primeiro caractere e aumenta a partir daí.
Exemplo de uso:

const texto = "Olá, mundo!";
const primeiroCaractere = texto.charAt(0); // Retorna 'O'
const quartoCaractere = texto.charAt(3);   // Retorna 'á'


É importante notar que se você fornecer um índice fora dos limites da string (ou seja, um índice menor que 0 ou maior ou igual ao comprimento da string), o método charAt() retornará uma string vazia ("").


const texto = "Exemplo";
const caractereForaDosLimites = texto.charAt(20); // Retorna ""


No entanto, em JavaScript/TypeScript modernos, o uso do operador de indexação [ ] também é comum para acessar caracteres individuais em uma string. Isso pode tornar o código mais legível e sucinto:



const texto = "Olá, mundo!";
const primeiroCaractere = texto[0]; // Retorna 'O'
const quartoCaractere = texto[3];   // Retorna 'á'



Em resumo, a função charAt() é uma maneira de acessar um caractere específico em uma string por meio de seu índice, mas o uso do operador de indexação [ ] é uma alternativa mais concisa e amplamente adotada.



                                          substring()


O método substring() é usado em strings em várias linguagens de programação, incluindo JavaScript e TypeScript, para extrair uma parte específica de uma string com base em índices de início e fim. Esse método permite que você crie uma nova string que contém os caracteres da string original dentro do intervalo especificado.

Em TypeScript/JavaScript, a sintaxe geral do método substring() é a seguinte:

const novaString = minhaString.substring(indiceInicio, indiceFim);


Onde:

minhaString é a string da qual você deseja extrair uma parte.
indiceInicio é o índice numérico que indica onde a extração deve começar. Esse índice é incluído na substring resultante.
indiceFim é o índice numérico que indica onde a extração deve terminar. Este índice não é incluído na substring resultante.
O substring() cria uma nova string que contém os caracteres da string original a partir do índice de início até o índice de fim, mas sem incluir o caractere no índice de fim.

Exemplo de uso:

const texto = "Exemplo de substring";
const extracao = texto.substring(8, 15); // Retorna "substring"


É importante notar que o método substring() tem algumas características especiais:

Se o indiceInicio for maior que o indiceFim, o método trocará automaticamente esses valores, garantindo que a extração seja feita da maneira correta.

Se você fornecer apenas um argumento ao método, ele considerará esse argumento como o índice de início e extrairá a string a partir desse índice até o final da string.

const texto = "Exemplo de substring";
const extracao1 = texto.substring(8); // Retorna "substring"
const extracao2 = texto.substring(0); // Retorna "Exemplo de substring"


Lembre-se de que o índice de início e o índice de fim são baseados em zero. Além disso, o método substring() não modifica a string original; ele retorna uma nova string contendo a parte extraída da string original.

Embora o substring() seja um método útil para extrair partes de uma string, em JavaScript/TypeScript modernos, o uso de slicing (usando a notação de intervalo [ ]) também é comum e pode ser mais legível:

const texto = "Exemplo de substring";
const extracao = texto.slice(8, 15); // Retorna "substring"

Isso ocorre porque o uso de slicing é mais semelhante a outras estruturas de dados, como arrays.
*/