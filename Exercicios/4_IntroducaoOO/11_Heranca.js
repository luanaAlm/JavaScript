function MeuObjeto() {}
console.log(MeuObjeto.prototype);

//construtor
const obj1 = new MeuObjeto
const obj2 = new MeuObjeto 

//__proto__ aponta para prototype
console.log(obj1.__proto__ === obj2.__proto__);
console.log(MeuObjeto.prototype === obj1.__proto__);

//prototype recebe um atributo
MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia meu nome é ${this.nome}!`);
}

obj1.falar()
obj2.nome = 'Rafael'
obj2.falar()