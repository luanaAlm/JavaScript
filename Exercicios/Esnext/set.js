//não aceita repeticao e não indexada
const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeidas').add('Corinthians')
times.add('Flamengo')
times.add('Vasco')
console.log(times);
console.log(times.size);
console.log(times.has('Vasco'));
console.log(times.has('Vasco'));
times.delete('Flamengo')
console.log(times.has('Flamengo'));

const nomes  = ['Raquel', 'Lucas', 'Júlia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet);