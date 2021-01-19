const sequense = {
    _id: 1,
    get id(){ return this._id++}
}

const produtos = {}

function salvarProduto(produto){
    //se produto nao esticr setado será adicionado um novo elemento dentro de atributo
    if (!produto.id) produto.id = sequense.id
    produtos[produto.id] = produto
    return produto //retornara com o id
}

//funcao para pegar o produto com o id
function getProduto(id){
    return produtos[id] || {}
}

//retornat todos so produtos
function getProdutos(){
    return Object.values(produtos)
}

//Excluir
function excluirProduto(id){
    const produto = produtos[id]
    delete produtos[id]
    return produto 
}
//tornar visivel
module.exports = {salvarProduto, getProduto, getProdutos, excluirProduto}