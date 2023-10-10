"use strict";
let avalor;
let bvalor;
let cvalor;
cvalor = 10;
//avalor = cvalor; /* gerá erro pq mesmo "cvalor" possuindo um valor do tipo "number" originalmente  seu tipo é "unknow" e "avalor" que é do tipo number não pode aceitar*/
avalor = cvalor; //não gerá erro o tipo de cvalor é especificado com typeAssertion
cvalor = "Hello World!";
bvalor = cvalor; //outro maneira de typeassertion
console.log(typeof (bvalor));
