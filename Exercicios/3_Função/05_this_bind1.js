const pessoa = {
    saudacao: 'Bom Dia!',
    falar(){
        console.log(this.saudacao);
    }
}
pessoa.falar()

const falar = pessoa.falar
falar() // conflito

//bind serve para passar umm objeto para se resolver o this
const  falarDePessoas = pessoa.falar.bind(pessoa)
falarDePessoas()
