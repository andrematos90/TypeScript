let elementoSelecionado = document.getElementById('idade') as HTMLInputElement;



console.log(elementoSelecionado.value);


/*
quando um elemento é selecionado no html o retorno é um objeto HTMLElement
que pode ser uma div, botao etc..
nem todos esses elementos tem um value (que é o que esta sendo requisitado no código)
dentro do HTMLElement existem vários tipos diferentes um deles é o HTMLInputElement 
o value é um item exclusivo do HTMLInputElement por isso tem que se especificar 
para poder ter acesse e não ocasionar erro
em outras palavras ele especifica que o elemento selecionado é um input e tem a propriedade "value"
o valor retornado pelo HTMLInputElement é sempre uma string


let elementoSelecionado = document.getElementById('idade') as HTMLInputElement;

Nesta linha, você está usando document.getElementById('idade') para obter um elemento do DOM com o ID "idade". No entanto, o TypeScript não sabe qual é exatamente o tipo desse elemento. Para contornar isso e dizer ao TypeScript que você está certo de que esse elemento é um HTMLInputElement, você está usando as HTMLInputElement para realizar uma Type Assertion. Isso diz ao TypeScript para tratar elementoSelecionado como um elemento de entrada (input) HTML.

console.log(elementoSelecionado.value);

Nesta linha, você está acessando a propriedade value do elemento selecionado. Como você usou Type Assertion para dizer ao TypeScript que elementoSelecionado é um HTMLInputElement, o TypeScript permite que você acesse a propriedade value, que é comum em elementos de entrada.

Assumindo que o elemento com o ID "idade" seja de fato um elemento de entrada (input) HTML, essa sequência de código funcionará corretamente e imprimirá o valor do elemento de entrada no console.

No entanto, lembre-se de que as Type Assertions devem ser usadas com cuidado e apenas quando você tem certeza sobre o tipo do valor. Caso contrário, você pode acabar com erros em tempo de execução se a asserção de tipo não corresponder à realidade do seu código.*/