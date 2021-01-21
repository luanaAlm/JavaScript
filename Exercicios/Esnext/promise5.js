function funcionarOuNao(valor, chanceDeErro){
    return new Promise((resolve, reject) => {
        if (Math.random() < chanceDeErro){
            reject ('Ocorreu um erro')
        }else{
            resolve(valor)
        }
    })
}
funcionarOuNao('testando...', 0.9)
    .then(v => console.log(`Valor: ${v}`))
    .catch(err => console.log(`Erro: ${err}`))//tratando o erro
    .then(() => console.log('Fim'))//nao chega mais informacao