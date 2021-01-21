const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
//remove o ultimo
pilotos.pop()
console.log(pilotos);

//adiciona no final
pilotos.push('Verstappen')
console.log(pilotos);

//remove o primeiro
pilotos.shift()
console.log(pilotos);

//adiciona no inicio
pilotos.unshift('Hamilton')
console.log(pilotos);

//adiciona e remove elementos
//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos);
//remover
pilotos.splice(3,1)
console.log(pilotos);

//retorna novo array a partir do indice informado
const algunsPilotos = pilotos.splice(2)
console.log(algunsPilotos);

const algunsPilotos2 = pilotos.splice(1, 4)
console.log(algunsPilotos2);