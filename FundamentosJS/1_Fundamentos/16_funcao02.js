//armazenando uma função em uma variavel
const imprimirSoma = function (a, b){
    console.log(a + b)
}
imprimirSoma(2, 3)

//Armzenando uma função Arrow em uma variavel
// => substitui a palavra function
const soma = (a, b) => {
    return a + b
}
console.log(soma(4, 55))

//retorno implicito 
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))