let numero1 = document.getElementById('number1') as HTMLInputElement;
let numero2 = document.getElementById('number2') as HTMLInputElement;
let botao = document.getElementById('botao');
let resultado = document.getElementById('resultado');

function Somar(v1: number, v2: number){
    return v1 + v2;
    
}

botao.addEventListener('click', function(){
    resultado.innerHTML = Somar(+numero1.value, +numero2.value).toString();
});


/*
let numero1 = document.getElementById('number1') as HTMLInputElement;

Aqui, você está obtendo um elemento HTML pelo seu ID usando document.getElementById('number1').
O as HTMLInputElement é uma asserção de tipo, que diz ao TypeScript para tratar esse elemento como um HTMLInputElement, que é o tipo de elemento de entrada em HTML.
Você está atribuindo esse elemento à variável numero1.
let numero2 = document.getElementById('number2') as HTMLInputElement;

Este é semelhante ao primeiro passo, mas para o elemento com o ID 'number2'.
Você está atribuindo esse elemento à variável numero2.
let botao = document.getElementById('botao');

Aqui você está obtendo um elemento com o ID 'botao' (provavelmente um botão) usando document.getElementById.
Você está atribuindo esse elemento à variável botao.
let resultado = document.getElementById('resultado');

Aqui você está obtendo um elemento com o ID 'resultado' (provavelmente um elemento onde o resultado da soma será exibido) usando document.getElementById.
Você está atribuindo esse elemento à variável resultado.
function Somar(v1: number, v2: number){ return v1 + v2; }

Esta é uma função chamada Somar que aceita dois parâmetros numéricos v1 e v2.
A função retorna a soma dos dois valores.
botao.addEventListener('click', function(){ resultado.innerHTML = Somar(+numero1.value, +numero2.value).toString(); });

Aqui, você está adicionando um ouvinte de evento ao botão (elemento atribuído à variável botao).
Quando o botão é clicado, a função anônima (uma função sem nome) é executada.
No corpo da função anônima:
Você chama a função Somar passando os valores numéricos dos campos de entrada (numero1 e numero2) usando +numero1.value e +numero2.value (+) converte os valores que são uma srting em float para realizar a soma
poderia ser usado também Parsefloat
Você chama .toString() no resultado da soma para converter o resultado em uma string.
Atribui essa string ao innerHTML do elemento atribuído à variável resultado, que provavelmente exibirá o resultado da soma.
Em resumo, esse código está lidando com campos de entrada numéricos, um botão e um elemento de exibição de resultado em uma página HTML. Quando o botão é clicado, os valores dos campos de entrada são somados usando a função Somar, e o resultado é exibido no elemento designado para mostrar o resultado.*/