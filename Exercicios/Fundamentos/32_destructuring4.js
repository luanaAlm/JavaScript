//sera passado um objeto para essa função e o rand ja acessará o min=0, max=1000
function rand([min=0, max=1000]){
    //condição gerando um array 
    //inversao de variaveis 
    if (min > max) [min, max] = [max, min]
    //random -> retorna um número aleatório entre 0 (inclusivo) e 1 (exclusivo)
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
console.log(rand([50, 40]))