function fazerRequisicao(url: string, method: 'GET' | "POST"){
    //.......
}

let url = "https://google.com.br";
let method = 'GET';

fazerRequisicao(url, method);

 /*ocorre o erro pq no momento a variável esta com "GET" mas ela pode mudar de valor
uma das formas de resolver e dizer literalmente o que a variável vai receber

type Methods = 'GET' | 'POST';

let url = "https://google.com.br";
let method: Methods = 'GET';

fazerRequisicao(url, method);
*/

