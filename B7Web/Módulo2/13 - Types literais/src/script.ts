let nome: 'andré' = 'andré';  //type literal só aceita o valor definido na variável
nome = 'simba' // variável não aceita valor diferente de 'andre



//casos em que tipos literais são uteis


//parametros de função com tipos literais
function  mostrarTexto(texto: string, alinhamento: 'left' | 'right' | 'center'){
    return `<div style='text-align: ${alinhamento}">${texto}</div>`;
}

mostrarTexto('andré', 'left');
mostrarTexto('andré', 'right');
mostrarTexto('center', 'blabla'); // ocorre um erro pq "blabla" não é um tipo que foi definido para a função aceitar


//retorno de função com tipos literais
//retorna fa função só aceita dois tipos especificos "true" ou "false"
function temMome(nome: string): true | false {
    if(nome != ''){
        return true;
    }else{
        return false;
    }
}


//forma automática

type Opcoes = {
    width: number,
    height: number
}

function configurar(props: Opcoes | 'auto'){

}

configurar({width: 100, height: 100});
configurar('auto');
configurar('automatico'); // gera erro pq não é um dos dois tipos aceitos