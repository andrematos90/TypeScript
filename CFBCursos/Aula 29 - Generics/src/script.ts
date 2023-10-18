function teste<T,U>(v:T, r:U):U{
    return r;
}

console.log(teste<number,string>(10, "B"));
console.log(teste<string,number>("b",10));
console.log(teste<boolean,boolean>(true,false));

class classeDeTeste<T>{
    public valor:T;
    constructor(valor:T){
        this.valor = valor;
    }
}

const objeto1 = new classeDeTeste<string>("hellor world!");
const objeto2 = new classeDeTeste<number>(10);

console.log(objeto1.valor);
console.log(objeto2.valor);