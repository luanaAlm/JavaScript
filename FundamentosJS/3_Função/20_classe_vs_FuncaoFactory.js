//Classe vs Função Factory

//Classe
class Pessoa1{
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`);
    }
}

const p1 = new Pessoa1('João')
p1. falar()

//Factory
const Pessoa2 = nome => {
    return{
        //escorpo mais abrangente sem o this
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = Pessoa2('Maria')
p2.falar()

