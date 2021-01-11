//Cadeia de prototipos (prototype chain)

//Object.prototype.attr0 = 'Z' //não faça isso
const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B'}
const filho = { __proto__:pai, attr3: 'C'}

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3);

const carro = {
    velAtual: 0,
    velMax: 200,

    aceleraMais(delta){
        if (this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    },

    status(){
        return `${this.velAtual} km/h de ${this.velMax} km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324,   
}

const volvo = {
    modelo: 'V40',
    
    status(){
        //super: chama o metodo do protótipo
        return `${this.modelo}: ${super.status()}`
    }
}
//setPrototypeOf estabelece uma relação de prototipo entre dois objetos
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari);
console.log(volvo);

volvo.aceleraMais(100)
console.log(volvo.status());

ferrari.aceleraMais(100)
console.log(ferrari.status());
