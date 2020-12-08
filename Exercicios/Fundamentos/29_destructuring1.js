//recurso do ES2015
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco:{
        logradouro: 'Rua ABC',
        numero: 1000   
    }
}
//operador de Destructuring
const{nome , idade} = pessoa //tirar de dentro do objeto pessoa o nome e a idade
console.log(nome,idade)

const{nome: n, idade: i} = pessoa //tirar e criando uma nova variavel 
console.log(n ,i)

const{endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)