const { lchmod } = require('fs')
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

//recrso do ES8
let obterAlunos = async () =>{
    const ta = await getTurma('A')
    const tb = await getTurma('B')
    const tc = await getTurma('C')
    return [].concat(ta, tb, tc)
}
//retornar um objeto AsyncFunction
obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))