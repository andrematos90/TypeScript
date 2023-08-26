let coisas = [ 'cachorro', 'carro', 1988];

coisas.forEach(function(coisas){
    if(typeof coisas === 'string'){
        console.log(coisas.toUpperCase());
    }
    else{
        console.log(coisas);
    }
});


/*

Neste código, você criou um array chamado coisas que contém três elementos: uma string 'cachorro', uma string 'carro' e um número 1988.

Em seguida, você utiliza o método forEach() para iterar sobre cada elemento do array coisas. A função de callback passada para o forEach() usa a variável coisa (que representa o elemento atual do array) para realizar verificações.

Dentro da função de callback, há uma verificação usando o operador typeof para determinar se o tipo da variável coisa é uma string. Se for uma string, a função converte essa string para letras maiúsculas usando o método toUpperCase() e imprime o resultado em maiúsculas. Caso contrário, se não for uma string (ou seja, é um número), o próprio valor é impresso.

O Contextual Typing está relacionado ao fato de que o TypeScript é capaz de inferir o tipo do parâmetro coisa dentro da função de callback passada para o método forEach(). Vamos analisar como isso funciona:

Quando você passa uma função de callback para o método forEach(), o TypeScript consegue inferir os tipos dos parâmetros com base no contexto em que essa função está sendo usada. No seu caso, como coisas é um array de elementos que incluem strings e um número, o TypeScript entende que o parâmetro coisa dentro da função de callback deve ser do tipo string | number, ou seja, pode ser tanto uma string quanto um número.

Isso permite que o TypeScript faça inferência de tipo contextual enquanto você está dentro da função de callback. Portanto, a verificação typeof coisa === 'string' é perfeitamente válida, porque o TypeScript já entende que coisa pode ser uma string, então essa verificação é compatível com o tipo inferido.

A principal vantagem do Contextual Typing é que ele ajuda a reduzir a quantidade de tipos que você precisa declarar explicitamente. Você não precisa anotar o tipo de coisa novamente dentro da função de callback, pois o TypeScript já entende isso com base no contexto do método forEach().

Isso não apenas torna o código mais limpo e legível, mas também ajuda a evitar erros, pois o TypeScript estará lá para garantir que você não esteja usando métodos ou propriedades que não são compatíveis com o tipo inferido.

Em resumo, o Contextual Typing é uma característica do TypeScript que permite que o compilador infira automaticamente os tipos de parâmetros de função com base no contexto em que eles estão sendo utilizados. Isso torna o código mais conciso e eficient
*/