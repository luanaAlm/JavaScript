/**
 Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado e o resto da divisão destes dois valores
*/

function divisao(dividendo, divisor){
    this.dividendo = dividendo
    this.divisor = divisor

    this.calculo  = function(){
        calc = dividendo / divisor
        rest = dividendo % divisor
        console.log(`O resultado da divisão é: ${calc} \nO resto da divsão é: ${rest}`);
    }
}

const teste = new divisao(1000,5)
teste.calculo()