//processar uma template string dentro de uma funcao
function tag(partes, ...valores) {
    console.log(partes);
    console.log(valores);
    return 'outra String'
}

const aluno = 'Gui'
const situacao = 'Aprovado' 
console.log(`${aluno} está ${situacao}`);
console.log(tag `${aluno} está ${situacao}`);