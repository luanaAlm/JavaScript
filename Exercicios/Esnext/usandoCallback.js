//sem promisse
const http = require('http')

const getTurma = (letra, callback) =>{ //pegar a letra
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json` 
    http.get(url, res =>{ //função que tras a reposta
        
    })
}

let nomes = []
getTurma('A', alunos =>{
    nomes = nomes.concat(alunos.map(a => `A ${a.nome}`))
    console.log(nomes);
    getTurma('B', alunos =>{
        nomes = nomes.concat(alunos.map(a => `B ${a.nome}`))
        console.log(nomes);
        getTurma('C', alunos =>{
            nomes = nomes.concat(alunos.map(a => `C ${a.nome}`))
            console.log(nomes);
        })
    })
})