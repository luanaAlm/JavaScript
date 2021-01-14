const fs = require('fs')


const caminho = __dirname + '/Arquivo.json'

//ler arquivo de forma sincrona
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo);

//ler arquivo de forma assincrona
fs.readFile(caminho, 'utf-8', (err, conteudo) =>{
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`);
})

//ex Arquivo.Json
const config = require('./Arquivo.json')
console.log(config.db);

//leitura de um diretorio
fs.readdir(__dirname, (err, arquivos) =>{
    console.log('Conteúdo da pasta ...');
    console.log(arquivos);
})