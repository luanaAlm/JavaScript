//operador Ternários
/**
 * 1 expressao: nota >= 7 retorna verdadeiro ou falso
 * 2: ? interrogação 
 * 3: 'Reprovado' o que retornara se nao for verdadeiro  
 */
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'
console.log(resultado(7.7))
console.log(resultado(6.1))