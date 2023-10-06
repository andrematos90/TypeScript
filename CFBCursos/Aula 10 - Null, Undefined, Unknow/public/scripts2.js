"use strict";
// O tipo `null` representa explicitamente a ausência de um valor ou a intenção de que uma variável não tenha um valor válido.
let valorNulo = null;
// O tipo `undefined` representa um valor que está indefinido, o que significa que a variável não foi inicializada com um valor ou uma propriedade de objeto não foi definida.
let valorIndefinido = undefined;
let variavelNaoInicializada; // A variável é implicitamente undefined
// O tipo `unknown` representa um valor cujo tipo é desconhecido em tempo de compilação. Isso é mais restritivo do que `any`, que permite qualquer tipo, pois `unknown` exige uma verificação explícita de tipo antes de qualquer operação significativa.
let valorDesconhecido = 42;
let valorNumero;
// Erro: Você precisa verificar o tipo antes de atribuir
// o valor desconhecido a uma variável com um tipo específico
//valorNumero = valorDesconhecido; // Erro
// Verificação de tipo
if (typeof valorDesconhecido === 'number') {
    valorNumero = valorDesconhecido; // Agora é permitido
}
