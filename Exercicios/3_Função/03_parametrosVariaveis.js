function soma(){
    let soma = 0
    for (i in arguments){
        soma += arguments[i]
    }
    return soma
} 

console.log(soma());
console.log(soma(1));
console.log(soma(2.2, 5.5, 4.1, 3.7));
console.log(soma(2.2, 5.5, 4.1, 'Teste'));
console.log(soma('a', 'b', 'c', 'd'));
