/**
 O forEach executa o callback fornecido uma vez para cada elemento da ordem com um valor atribuido. Ele não é invocado para propriedades de índices que foram deletados ou que não foram inicializados (por ex. em arrays esparsos).

callback é invocado com três argumentos:

o valor do elemento
o índice do elemento
o array que está sendo percorrido
*/
const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

//percorrer a lista
aprovados.forEach(function (nome, indice, array) {
    console.log(`${indice + 1}) ${nome}`);
    console.log(array);
})

//inline
aprovados.forEach(nome => console.log(nome))

//constante
const exibirAprovados = aprovados => console.log(aprovados);
aprovados.forEach(exibirAprovados)