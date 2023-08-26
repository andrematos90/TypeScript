// Definição do tipo personalizado para uma função de cálculo
type MathFunction =(n1: number, n2: number) => number;

const Somar: MathFunction = (n1, n2) => {
    return n1 + n2
}

const Subtrair: MathFunction = (n1, n2) => {
    return n1 - n2
}

const Multiplicar: MathFunction = (n1, n2) => {
    return n1 * n2
}

const Dividir: MathFunction = (n1, n2) => {
    return n1 / n2;
}

/*
Você definiu um tipo chamado MathFunction, que representa uma função que aceita dois parâmetros do tipo number e retorna um valor do tipo number. Em seguida, você criou funções individuais para realizar operações de soma, subtração, multiplicação e divisão, todas obedecendo à assinatura do tipo MathFunction,
ou seja os tipos que a função irá aceitar como parametro e retornar foram definidos em 
type MathFunction =(n1: number, n2: number) => number;

Isso é ótimo porque:

O TypeScript verificará automaticamente se as suas funções Somar, Subtrair, Multiplicar e Dividir estão em conformidade com a assinatura MathFunction.
Se você tentar usar essas funções de forma errada, o TypeScript emitirá erros de tipo em tempo de compilação, ajudando a evitar erros sutis e erros de lógica.
Esse é um excelente exemplo de como utilizar tipos para funções para tornar o código mais seguro, legível e confiável!

Essa estrutura do código facilita a manutenção, pois todas as funções de cálculo compartilham a mesma assinatura de tipo MathFunction. Se você precisar adicionar mais funções de cálculo, basta criar uma nova função e atribuí-la ao tipo MathFunction, mantendo a consistência na interface das funções.


*/