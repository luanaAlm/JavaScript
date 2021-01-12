/**
 Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece quando faz o seguinte comando no console: console.log(0.1 + 0.2); 
 O resultado será: 0.30000000000000004. 
 Outra coisa importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa. Com isso, vamos fazer um exercício simples para mostrar dinheiro sempre da forma correta. 
 Desenvolva uma função JavaScript para que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).
 */
function retornValor(num1, num2) {
    this.num1 = num1
    this.num2 = num2

    this.calculo = c => {
        calc = num1 + num2
        return console.log(calc.toFixed(2));
    }
}

const teste = new retornValor(0.65, 0.2)
teste.calculo()