console.log(module.exports === this);
console.log(module.exports === exports);

//serão visiveis 
this.a = 1
exports.b = 2
module.exports.c = 3


exports = null
//todos apontam para o mesma referencia de memória
console.log(module.exports);

exports = {
    nome: 'Teste'
}
//sera o mesmo objeto mesmo mudado a referencia de endereco 
console.log(module.exports);

//somente retorna o que esta dentro de module.exports
module.exports = {publico: true}

