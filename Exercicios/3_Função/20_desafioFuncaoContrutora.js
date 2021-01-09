//função construtora
function Pessoa3 (nome){
    this.nome = nome

    this.falar = function(){
        return console.log(`Meu nome é ${this.nome}`);
    }
}

const p1 = new Pessoa3('Marcos')
p1.falar
