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
    
}