//Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, multiplicação e divisão desses valores


function Calculo(num1, num2){
    this.num1 = num1
    this.num2 = num2
    
    subtracao = function(){
        calc =  num1 - num2
        return console.log(`Subtração: ${calc}`);
    }

    this.multiplicacao = function(){
        calc = num1 * num2
        return console.log(`Multiplicacao: ${calc}`);
    }

    this.divisao = function(){
        calc = num1 * num2
        return console.log(`Divisao: ${calc}`);
    }
}

const c = new Calculo(110, 11)
c.subtracao()
c.multiplicacao()
c.divisao()

