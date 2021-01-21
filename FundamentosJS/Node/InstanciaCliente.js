//exportação de um objeto
const contadorA = require('./InstanciaUnica')
const contadorB = require('./InstanciaUnica')

//instncias criadas a partir da funcao factory 
const contadorC = require('./InstanciaNova')()
const contadorD = require('./InstanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor);

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor);