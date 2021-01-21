/**
 * Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de classificação: 
 Todo aluno recebe uma nota de 0 a 100. 
 Alunos com nota abaixo de 40 são reprovados. 
 As notas possuem a seguinte regra de arredondamento: 
 Se a diferença entre a nota e o próximo múltiplo de 5 for menor que 3, arredondar a nota para esse próximo múltiplo de 5. 
 Se a nota for abaixo de 38, não é feito nenhum arredondamento pois esta nota resulta na reprovação do aluno. 
Por exemplo, a nota 84 será arredondada para 85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ouseja, que evite a reprovação do aluno. 
No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
e o aluno será aprovado
 */
function sisNotas(nota){
    som3 = nota + 3
    som2 = nota + 2
    som1 = nota + 1
    if(nota < 38){
        console.log(`Reprovado: ${nota}`);
    }else if ((som3) % 5 == 0) {
        console.log(`A nota foi arredondada para : ${som3}`);
    }else if((som2) % 5 == 0){
        console.log(`A nota foi arredondada para : ${som2}`);
    }else if((som1) % 5 == 0){
        console.log(`A nota foi arredondada para : ${som1}`);
    }else{
        return `A nota é : ${nota}`
    }
}

console.log(sisNotas(96));
console.log(sisNotas(97));
console.log(sisNotas(98));
console.log(sisNotas(99));
console.log(sisNotas(100));