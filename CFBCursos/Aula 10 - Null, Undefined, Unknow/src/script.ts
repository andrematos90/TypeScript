// Variável com valor nulo. A variável possui valor, mas o valor é nulo.
let variavel: string | null;
variavel = null;
console.log(variavel);

// Variável com valor indefinido. A variável não possui valor e, consequentemente, não possui um tipo associado.
let variavel2;
console.log(variavel2);

// Variável com valor unknown. A variável possui um valor, mas o tipo é desconhecido.
// Só pode ser atribuído a tipos `unknown` e `any`.
let variavel3: unknown;
console.log(variavel3);
