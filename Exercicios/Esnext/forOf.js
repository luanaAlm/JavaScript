for (let letra of 'Cod3r') {
    console.log(letra);
}

const assuntosEcma = ['Map', 'Set', 'Promisse']
for(let i in assuntosEcma){
    console.log(i);
}

for(let assunto of assuntosEcma){
    console.log(assunto);
}

const assuntoMap = new Map([
    ['Map', {operador: true}],
    ['Set', {operador: true}],
    ['Promisse', {operador: false}]
])

for (let assunto of assuntoMap){
    console.log(assunto);
}

for (let chave of assuntoMap.keys()){
    console.log(chave);
}

for (let valores of assuntoMap.values()){
    console.log(valores);
}

//desestruturar
for(let [ch, vl] of assuntosMap.entries()) {
    console.log(ch, vl);
}