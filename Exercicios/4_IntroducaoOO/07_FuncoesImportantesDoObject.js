const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)); //chaves do objeto
console.log(Object.values(pessoa)); //somene os valores do objeto
console.log(Object.entries(pessoa)); //arrays e subarrays e suas informações

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`);
});

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2021'
})

pessoa.dataNascimento = '01/01/2222' //nao mudara para essa data
console.log(pessoa.dataNascimento );
console.log(Object.keys(pessoa)); 

//adicionando objetos dentro de um atributo
const dest = {a: 1}
const o1 = {b: 3}
const o2 = {c: 3, a: 4}
//é a concatenação de todos os objetos
const obj = Object.assign(dest, o1, o2)
console.log(obj);

Object.freeze(obj)
obj.c = 1234
console.log(obj);