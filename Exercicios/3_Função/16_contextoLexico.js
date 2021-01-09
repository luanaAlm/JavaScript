//Contexto Léxico
const valor = 'Global'

function minhaFuncao(){
    console.log(valor);
}

function exec(){
    const valor = 'Local'
    minhaFuncao() //local onde foi definida
}
//valor global
exec()