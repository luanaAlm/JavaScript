//Função sem retorno
function imprimirSoma(a, b){
    console.log(a+b)
}
imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(5, 2, 5, 6, 1)

//função com retorno
function soma(a, b = 0){
    return a +b
}
console.log(soma(2,3))
console.log(soma(2))
console.log(soma)
