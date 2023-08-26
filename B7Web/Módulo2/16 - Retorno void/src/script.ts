// Declaração da função 'removerElemento' que recebe um parâmetro do tipo 'HTMLElement' e não retorna nada (void)
function removerElemento(el: HTMLElement): void {
    el.remove(); // Utiliza o método 'remove()' para remover o elemento do DOM
}

// Chamada da função 'removerElemento' passando como argumento o elemento com o ID 'teste'
removerElemento(document.getElementById('teste'));


//---------------------------------------------------------------------------------------------

type Qualquerfunção = () => void;

const algo: Qualquerfunção = () => {
    return  "bla bla "                     // esta retornando uma string o que não deveria acontecer
}

/* isso acontece pq quando o type é criado no caso "Qualquerfunção" não esta se determinando que qualquer função que usar vai ter como retorno o que esta sendo determinado que  no caso como void.
O que esta sendo determinado é que automaticamente não vai esperar nada, não significa que não tera um tipo de retorno até pq void significa "vazio". Ao contrário de uma função com retorno explicitamente definido como void
ex:

const funcaoexemplo = (): void => {
    return 'bla bla'
}

nesse caso gera erro
*/