//Chamar de volta
const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`);
}

//callback: passa uma função e o evento acontece quando for chamado
//forEach
fabricantes.forEach(imprimir)
fabricantes.forEach(a => console.log(a))