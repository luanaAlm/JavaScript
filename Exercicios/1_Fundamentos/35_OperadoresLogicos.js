//operador logicos
/**
 * E &&
 * v e v =  v
 * v e f = f
 * f e ? = f
 * 
 * OU ||
 * v ou ? = v
 * f ou v = v
 * f ou f  = f
 * 
 * OU EXCLUSIVO
 * v xor v = f
 * v xor f = v
 * v xor v = v
 * f xor f = f
 * 
 * NEGAÇÂO
 * !v = f
 * !f = v
 */
function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) //forma ou exclusivo
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete 

    //criação de um objeto 2015
    return {
        comprarSorvete, 
        comprarTv50, 
        comprarTv32, 
        manterSaudavel
    }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))