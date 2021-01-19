const porta = 3003

//importando o express
const express = require('express') 
const app = express() //intanciando
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

//qualquer requisição feita no servidor express ele passara por esse middle
app.use(bodyParser.urlencoded({extended: true}))

//requisicao que ostra todos os produtos
app.get('/produtos', (req, res, next) =>{
    res.send(bancoDeDados.getProdutos()) //send convert para JSON
})

//produto especifico pelo id
app.get('/produtos/:id',(req, res, next) =>{
    res.send(bancoDeDados.getProdutos(req.params.id))
})
//submeter e salvar um novo produto
app.post('/produtos', (req, res, next)=> {
    //salvar um produto em um pseudo bd
    const produto = bancoDeDados.salvarProduto({
        //objetos
        nome: req.body.nome,
        preco: req.body.preco,
    }) 
    //retornando a reposta
    res.send(produto) //JSON
}) 

//alterar
app.put('/produtos/:id', (req, res, next)=> {
    //salvar um produto em um pseudo bd
    const produto = bancoDeDados.salvarProduto({
        //objetos
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco,
    }) 
    //retornando a reposta
    res.send(produto) //JSON
}) 

app.delete('/produtos/:id', (req, res, next)=> {
    //salvar um produto em um pseudo bd
    const produto = bancoDeDados.excluirProduto(req.params.id) 
    //retornando a reposta
    res.send(produto) //JSON
}) 

app.listen(porta, () =>{
    console.log(`Servidor está execultando na porta ${porta}.`);
})