/**
 Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda retornará o valor da aplicação sob o regime de juros compostos.
 */

function jSimples(capInicial, txJuros, tempAplic) {
    this.capInicial = capInicial
    this.txJuros = txJuros
    this.tempAplic = tempAplic
    

    this.calcjSimples = cM => {
        console.log(`Calculo do Juros simples: ${capInicial * txJuros * tempAplic.toFixed(2)}`);
    }
}

function jComposto(capInicial, txJuros, nPeriodos) {
    this.capInicial = capInicial
    this.txJuros = txJuros
    this.nPeriodos = nPeriodos

    this.calcMontante = cM =>{
        console.log(`Calculo do montante: ${capInicial * Math.pow((1 + txJuros), nPeriodos).toFixed(2)}`);
    }
}
const teste = new jSimples(2000, 0.10, 2)
teste.calcjSimples()
const teste2 = new jComposto(2000, 0.10, 2)
teste2.calcMontante()