var numero1 = document.getElementById('number1');
var numero2 = document.getElementById('number2');
var botao = document.getElementById('botao');
var resultado = document.getElementById('resultado');
function Somar(v1, v2) {
    return v1 + v2;
}
botao.addEventListener('click', function () {
    resultado.innerHTML = Somar(+numero1.value, +numero2.value).toString();
});
