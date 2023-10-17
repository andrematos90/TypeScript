interface cachorro{
    raça:string;
    pelagem:string;
    idade?:number; // ? torna a propriedades como opcional nos objetos
}


const simba:cachorro ={
    raça: "RoughCollie",
    pelagem: "comprida",
    idade: 2
}

const milu:cachorro ={
    raça: "RoughCollie",
    pelagem: "comprida",
    
}


console.log(simba.idade);