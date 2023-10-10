//função com parametro opcional
function soma(a:number, b:number, c?:number):number{
    if(typeof c == "undefined"){
        return a + b
    }else{
        return a + b + c
    }
}
console.log(soma(1, 8, 10));
console.log(soma(1, 9));