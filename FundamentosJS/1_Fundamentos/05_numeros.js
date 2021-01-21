//variavel númerica formas de criação
const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1 , peso2))
console.log('------')
const avaliacao1 = 9.81
const avaliacao2 = 6.871
const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)
console.log(media.toFixed(2))//toFixed: controle de casas decimais impressas
console.log(media.toString(2)) //toString: transforma numero em string (números binarios)
console.log('tipo:',typeof media)
console.log(typeof Number)