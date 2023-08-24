let numero1 = document.getElementById('number1');
let numero2 = document.getElementById('number2');
let botao = document.getElementById('botao');
let resultado = document.getElementById('resultado');

function Somar(v1, v2){
    return v1 + v2;
    
}

botao.addEventListener('click', function(){
    resultado.innerHTML = Somar(numero1.value, numero2.value);
});

/* como javascript não é uma linguagem tipada  esse tipo de erro pode acontecer
a intenção da função criada é somar, mas como  <input type="number" id="number1">
mesmo  definindo como tipo "number" retorna uma sring, um dos motivos da criação do 
typescript foi evitar esse tipo de erro */