//O método reduce() executa uma função reducer (fornecida por você) para cada elemento do array, resultando num único valor de retorno.
const alunos  = [
    {nome: 'João', nota: 7.3, bolsista: false },
    {nome: 'Maria', nota: 9.2, bolsista: true },
    {nome: 'Pedro', nota: 9.8, bolsista: false },
    {nome: 'Maria', nota: 8.7, bolsista: true },
]

const resultando = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual);
    return acumulador + atual
})

console.log(resultando);