console.log(Math.ceil(6.1))

const obj1 = {}
//cria o atributo  
obj1.nome = 'Bola'
//obj1['nome'] = 'Bola2' //novo valor de nome
console.log(obj1.nome)

function Obj(nome){
    //this.nome ->Recebara esse atributo (nome) por parametro
    //e será atribuido a this.nome e ele sera visivel para quem criar e instanciar o objeto 
    this.nome = nome
    this.exec  = function(){
        console.log('Exec...')   
    }
}
//objeto com sua instancia
const Obj2 = new Obj('Cadeira')
//objeto com sua instancia
const Obj3 = new Obj('Mesa')

console.log(Obj2.nome)
console.log(Obj3.nome)
Obj3.exec()
