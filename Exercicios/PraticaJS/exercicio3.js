/**
 *Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.
 */

function elevacao(base, expoente){
    this.base = base
    this.expoente = expoente

    this.calculo  = function(){
        calc = Math.pow(base, expoente)
        console.log(`O valor é ${calc}`);
    }
}

const teste = new elevacao(2,2)
teste.calculo()