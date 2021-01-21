//let e const
{
    var a = 2
    let b = 3
    console.log(b);
}
console.log(a);

//template String
const produto = 'iPad'
console.log(`Produto ${produto}`);

//Destructuring
const[l, e, ...tras] = 'Cod3r'
console.log(l, e, tras);

const[x, y] = [1, 2, 3]
console.log(x, y);

const{idade: i, nome} = {nome: 'Ana', idade: 29}
console.log(i, nome);