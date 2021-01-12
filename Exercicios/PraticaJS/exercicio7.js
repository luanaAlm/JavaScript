/** 
 Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto, elabore uma função cujo objetivo é resolver a fórmula de Bhaskara.Para isso, sua função deve receber três parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. 
Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”. 
*/

function baskara(ax2, bx, c) {
    this.ax2 = ax2
    this.bx = bx
    this.c = c

    this.calcBaskara = cB => {
        delta = (bx * bx) - 4 * ax2 * c
        if (delta > 0) {
            console.log(`Delta: ${delta}`);
            console.log(`Raiz 1: ${(- bx + Math.sqrt(delta)) / (2 * ax2)}`);
            console.log(`Raiz 2: ${(- bx - Math.sqrt(delta)) / (2 * ax2)}`);
        } else{
            console.log('Delta é negativo por tanto não existe raizes');
        }
    }
}

const teste1 = new baskara(1, 12, -13)
teste1.calcBaskara()
const teste2 = new baskara(0, 0, -13)
teste2.calcBaskara()
