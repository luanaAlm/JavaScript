//par nome/valor
const saudacao = 'Opa' //contexto léxico 1 definida de forma global

function exe(){
    const saudacao = 'Falaaaa' //contexto léxico 2 definida dentro da função 
    return saudacao
}

//objetos sao grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco:{
        logradouro:'Rua Muito legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exe())
console.log(cliente)