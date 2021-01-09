/**
Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. 
Isósceles: Dois lados iguais. 
Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo).
 */

function validaForma(lado1, lado2, lado3){
    this.lado1 = lado1
    this.lado2 = lado2
    this.lado3 = lado3

    this.teste = function(){
        if (lado1 == lado2 != lado3 || lado2 == lado3 != lado1){
            console.log('Isósceles: Dois lados iguais.');
        }else if (lado1 != lado2 != lado3) {
            console.log('Escaleno: Todos os lados são diferentes.');
        }else if (lado1 == lado2 == lado3){
            console.log('Equilátero: Os três lados são iguais.');
        }
    }
}
const teste1 = new validaForma(0, 9, 9)
teste1.teste()