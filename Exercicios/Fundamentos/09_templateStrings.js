//Template String 
/**
 * Aceita 
 * quebra de linha no meio da string
 * espaços em brancos 
 * espaçamentos 
 * aceita empressões matematicas
 */
const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + ' !'
const template = `
    olá 
    ${nome}!`
console.log(concatenacao, template)
console.log(`1 + 1 = ${1 + 1}`)

//Função
const up = texto  => texto.toUpperCase()
console.log(`Ei ... ${up('cuidado')}!`)