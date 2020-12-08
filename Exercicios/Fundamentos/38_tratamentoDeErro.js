function tratarErroELancar(e){
    //throw new Error('Ops! Um erro inesperado')
    //throw 10
    //throw true
    //throw 'mensagem'
    //objeto
    throw{
        nome: erro.name,
        msg: erro.mensagem,
        data: new Date,
    }
}
function imprimeNomeGritado(obj){
    //tratamento de erro
    try{
        console.log(obj.name.toUpperCase() + '!!!!')
    }catch (e){
        //tratar o erropor parametro
        tratarErroELancar(e)
    }finally{//mesmo se ocorrer ou nao erro ele será chamado
        console.log('Final')
    }
}
const obj = {nome: 'Roberto'}
imprimeNomeGritado(obj)
console.log()