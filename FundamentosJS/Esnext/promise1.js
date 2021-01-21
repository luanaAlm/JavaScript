
//console.log(typeof p);
function primeiroElemento(array){
    return array[0]
}

function primeiraLetra(string) {
    return string[0]
}

const letraMinuscula = letra => letra.toLowerCase()
//a partir do objeto o metodo then ao chamar a funcao como parametro que chama o valor do promise
//funcao como parametro
let p = new Promise(function(cumprirPromessa){
    cumprirPromessa(['Ana', 'Bia', 'Carlos', 'Daniel'])
})
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMinuscula)
    .then(console.log)
    