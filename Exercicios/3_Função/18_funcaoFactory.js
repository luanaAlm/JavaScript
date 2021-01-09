//Função Factory é uma função que sempre retorna um objeto

/**
const prod1 = {
    nome: '...',
    preco: 45
}

const prod2 = {
    nome: '...',
    preco: 2332
}
*/

function criarProd(){
    return {
        nome: 'Ana',
        preco: 45
    }
}

console.log(criarProd());