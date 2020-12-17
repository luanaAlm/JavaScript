//função normal
let dobro = function(a){
    return 2 * a
}

//forma 1
dobro1 = a => {
    return 2 * a
}

//forma 2
dobro2 = a => 2 * a

console.log(dobro(Math.PI));
console.log(dobro1(Math.PI));
console.log(dobro2(Math.PI));

let ola1 = function(){
    return 'ola'
}

ola2 = () => 'ola'

ola3 = _ => 'ola'

console.log(ola1());
console.log(ola2());
console.log(ola3());