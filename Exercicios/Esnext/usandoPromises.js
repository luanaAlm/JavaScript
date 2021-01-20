//Com promises
const http = require('http')

const getTurma = letra =>{ //pegar a letra
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json` 
    return new Promise((resolve, reject) =>{
        http.get(url, res =>{ //função que tras a reposta
            let resultado = ''
            res.on('data', dados =>{ //setar o evento
                resultado += dados
            })
            res.on('end',()=>{ 
                try{
                    resolve(JSON.parse(resultado))
                }catch(e){
                    reject(e)
                }
            })
        })
    })
}
    
        


let nomes = []
getTurma('A').then(alunos =>{
    nomes = nomes.concat(alunos.map(a => `A ${a.nome}`))
    console.log(nomes);
    getTurma('B').then(alunos =>{
        nomes = nomes.concat(alunos.map(a => `B ${a.nome}`))
        console.log(nomes);
        getTurma('C').then(alunos =>{
            nomes = nomes.concat(alunos.map(a => `C ${a.nome}`))
            console.log(nomes);
        })
    })
})

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    //.then(x => console.log(x))
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(alunos => aluno.nome))
    .then(nomes => console.log(nomes))