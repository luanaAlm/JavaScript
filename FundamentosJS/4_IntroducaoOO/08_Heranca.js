const ferrari = {
    modelo: 'F40',
    velMax: 324
}
const volvo = {
    modelo: 'V40',
    velMax: 200
}
//__proto__: acessa o objeto pai
console.log(ferrari.__proto__);
console.log(ferrari.__proto__ === Object.prototype); 
console.log(Object.prototype.__proto__);

function meuObjeto() {
    
}
console.log(typeof Object, typeof meuObjeto);
console.log(Object.prototype, meuObjeto.prototype);