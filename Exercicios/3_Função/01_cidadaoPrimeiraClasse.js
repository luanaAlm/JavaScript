//formaa literal 
function fun1(){
}
//Armazenar em uma variavel
const fun2 = function() {}

//Armazenar em um array
const array = [function(a, b){ return a + b }, fun1, fun2]
console.log(array[0] (2, 3 ));

//Armazenar em um aatributo de objeto
const obj = {}
obj.falar = function(){
    return 'olá'
}
console.log(obj.falar());

//Passas função com parametro
function run(fun){
    fun()
}
run(function(){console.log('Execultando...');})
