/**
 * ARRAY
 * heterogenio = pode-se colocar qualquer coisa
 * cresce e diminiui, não tem tamanho fixo
 */
const valores = [7.7, 8.9, 6.3, 9.2] 
console.log(valores[0], valores[3])
console.log(valores[4])
valores [4] = 10
console.log(valores[4])
//valores[10] = 50
//console.log(valores)
console.log(valores.length) //quantidade de elementos 

//Passando varios tipos de objetos no array
valores.push({id: 3}, false, null, 'teste')

//retira o ultimo valor do arrau
console.log(valores.pop())
console.log(valores)
//retira o valor pelo indice
delete valores[0]
console.log(valores)
//tipo do array
console.log(typeof valores)

