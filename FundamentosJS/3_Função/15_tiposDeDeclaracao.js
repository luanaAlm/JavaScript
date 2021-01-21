//Tipos de Declaração de funções

//com a function declaration pode-se chamala antes da declaração
console.log(soma(3, 4));

//function declaration
function soma(x, y){
    return x + y
}

//function expression
const sub = function(x, y){
    return x - y
}

console.log(sub(30, 4));
//named function expression
const mult = function mult(x, y){
    return x * y
}
console.log(mult(10, 5));