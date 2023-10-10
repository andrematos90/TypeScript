
const soma = (array:number[]):number =>{
    let s:number = 0;
    array.forEach((element) => {
        s+=element;
     });
     return s;
}
    
let numero : number[] = [11, 9, 30]
console.log(soma(numero));