//Arrow Function

//forma 1
const soma1 = (a, b) => a + b

//forma 2 com return
const soma2 = (a, b) => {
    return a + b
}

//forma3 com this
const lexico1 = () => console.log(this === exports);

console.log(soma1(1, 2));
console.log(soma2(1, 2));
lexico1()

//Parametro defaut
function log(texto = 'Node'){
    console.log(texto);
}
//log(texto);
log(null);
log('Sou mais forte!');

//operador rest
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
       return total 
}
console.log(total(2, 3, 4, 5));
