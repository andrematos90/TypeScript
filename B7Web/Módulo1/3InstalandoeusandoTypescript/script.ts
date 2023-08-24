let numero1 = document.getElementById('number1') as HTMLInputElement;
let numero2 = document.getElementById('number2') as HTMLInputElement;
let botao = document.getElementById('botao');
let resultado = document.getElementById('resultado');

function Somar(v1, v2){
    return v1 + v2;
    
}

botao.addEventListener('click', function(){
    resultado.innerHTML = Somar(numero1.value, numero2.value);
});
