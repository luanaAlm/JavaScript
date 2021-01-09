//Objetos Constantes
//variavel pessoa tem um endereço de memória
//dentro do endereço de memória tem o objeto criado 
//que pode ser mudado, o que nao é constante pessoa  
const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa);

//novo objeto com novo endereco de memoria
//pessoa = {nome: 'Ana'}

//congelando o objeto pessoa e ignora atribuição 
Object.freeze(pessoa)
pessoa.nome = 'Maria'
console.log(pessoa.nome); 