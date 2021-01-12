//Evitando Modificações

//previne que o objeto seja extendido, não consegue adicionar novos atributos mas pode excluir  
//Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'Promocao' 
})

//.isExtensible avalia se o o objeto é extensivel ou nao 
console.log('Extensível', Object.isExtensible(produto));

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag

console.log(produto);

//Object.seal podese modificar mais não adicionar
const pessoa = {
    nome: 'Juliana',
    idade: 35
}

Object.seal(pessoa)
//isSealed mostra se o obj esta selado ou nao 
console.log('Selado', Object.isSealed(pessoa));

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa);
