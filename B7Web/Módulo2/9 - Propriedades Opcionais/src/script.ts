function resumo(usuario: {nome: string, idade?: number}){   //? torna o parametro opcional
   if(usuario.idade !== undefined){
    return `Olá ${usuario.nome} você tem ${usuario.idade} anos.`;
   }
   else{
    return `Olá ${usuario.nome} seja bem vindo!`;
   }
}

let pessoa = {
    nome: 'André',
   

};

resumo(pessoa);


