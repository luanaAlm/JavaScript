//Objeto é uma coleção dinâmica de pares chave/valor

//Objeto1: produto

//new Object é uma função construtora
const produto = new Object 
//atributos
produto.nome = 'Cadeira'
produto['Marca do Produto'] = 'Generica'
produto.preco = 220

console.log(produto);
delete produto.preco
console.log(produto);
delete produto['Marca do Produto']
console.log(produto);

//Objeto 2: carro
const carro = {
    modelo: 'Carro',
    valor: 89000,
    //chave valor
    proprietario:{
        nome: 'João',
        idade: 53,
        endereco:{
            logradouro: 'Rua das Tulipas',
            numero: 123,
        }
    },
    //array de objetos 
    condutores:[{
        nome: 'Júnior',
        idade: 19,
    },{
        nome: 'Ana',
        idade: 42,
    }],

    //funções
    calcularValorSeguro: function(){
        //...
    }
}
//acessar
carro.proprietario.endereco.nome = 1000
console.log(carro);

delete carro.condutores
console.log(carro);

delete carro.proprietario.condutores
console.log(carro);

delete carro.calcularValorSeguro
console.log(carro);

