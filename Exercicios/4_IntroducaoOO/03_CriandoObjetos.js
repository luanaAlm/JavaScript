//forma 1: usando notação literal
const obj1 = {
}
console.log(obj1);

//forma 2: object em JS
//new Object: funcao construtora
console.log(typeof Object, typeof new Object);
const obj2 = new Object
console.log(obj2);

//forma 3: funções contrutoras
function Produto(nome, preco, desconto){
    this.nome = nome
    //metodo publico
    this.getPrecoComDesconto = () => {
        return preco * (1 - desconto)   
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto());

//forma 4: função farctory
function criarFuncionario(nome, salarioBase, faltas) {
    return{
        nome, 
        salarioBase,
        faltas,
        getSalario(){
            return(salarioBase/ 30 ) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario( ));