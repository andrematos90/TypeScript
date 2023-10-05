

let dados = {
    nome: "Jarisvaldo",
    iadde: 75,
    status: "B",
    ola:()=>{console.log("Hello Word!")},
    info:(p:string)=>{console.log(p)}
}

dados.nome = "Matheus"; 
console.log(dados.nome);

dados.ola();
dados.info(dados.nome);