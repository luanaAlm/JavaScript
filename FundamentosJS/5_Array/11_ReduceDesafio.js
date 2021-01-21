const alunos  = [
    {nome: 'João', nota: 7.3, bolsista: false },
    {nome: 'Maria', nota: 9.2, bolsista: true },
    {nome: 'Pedro', nota: 9.8, bolsista: false },
    {nome: 'Maria', nota: 8.7, bolsista: true },
]

//desafio 1: todos sao bolsistas?
const todosBolsistas = (resultando, bolsista) => resultando && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas));

//desafio 2: algum aluno é bolsista?
const algumBolsista = (resultando, bolsista) => resultando || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista));