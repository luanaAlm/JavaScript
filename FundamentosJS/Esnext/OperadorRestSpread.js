//Operador Rest(juntar) /Spread (espalhar)
//usar rest como parametro de funcao

//Spread como objeto
const funcionario = {nome: 'Maria', salario:12348.99}
//...funcionario espalhando os objetos de funcionario em clone
const clone = {ativo: true, ...funcionario}
console.log(funcionario);
console.log(clone);

//Spread com array
const grupoA = ['João', 'Pedro', 'Glória']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoA);
console.log(grupoFinal);

