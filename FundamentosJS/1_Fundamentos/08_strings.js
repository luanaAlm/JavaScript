//Tipos de strings
const escola = "Cod3r"
//retorna a letra na posição 4
console.log(escola.charAt(4))
//retorna vazio
console.log(escola.charAt(5)) 
//charCodeAt mostra o valor na tabela ASC
console.log(escola.charCodeAt(3))
//indexOf: retorna indice associado ao '3'
console.log(escola.indexOf('3'))
//substring: imprime a partir da posição dita
console.log(escola.substring(1))
console.log(escola.substring(0, 3))
//concatenação: concat()
console.log('Escola '.concat(escola).concat("!"))
//replace 
console.log(escola.replace(3, 'e'))
//split(): dividir uma string em array a aprtir de um separadpr específico
console.log('Pedro, Maria, João'.split(','))