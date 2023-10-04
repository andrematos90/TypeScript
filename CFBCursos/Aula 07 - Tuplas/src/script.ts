let coisas :[string, number, boolean] = ["Cachorro", 10, true]
coisas.push(true, "carro", 5)
coisas[2] = false;
console.log(coisas)

//console.log(coisas[4]) gera erro pq nao é possivel acessar o elemento pq a tupla foi originalmente definida com 3 posições