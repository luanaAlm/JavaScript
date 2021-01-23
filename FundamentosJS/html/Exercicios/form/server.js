const express = require('express') //importando express
const app = express() //instanciar o express
const bodyParser = require('body-parser') //importando bodyParser

app.use(bodyParser.urlencoded({extended: true})) 

//atendendo as urls
app.post('/usuarios', (req, resp) => {
    console.log(req.body);
    resp.send('<h1>Parabéns, Usuário incluido!</h1>') //resposta ao usuario ao submeter o formulário
})

app.post('/usuarios/:id', (req, resp) => {
    console.log(req.params.id);
    console.log(req.body);
    resp.send('<h1>Parabéns, Usuário alterado!</h1>') //resposta ao usuario ao submeter o formulário
})

app.listen(3003) //porta