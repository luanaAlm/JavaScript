//Array é um objeto
console.log(typeof Array, typeof new Array, typeof []);

//Ex
aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);

aprovados[3] = 'Paulo'
//push() é o metodo usado para se adicionar um novo elemento
aprovados.push('Abner')
console.log(aprovados.length);

aprovados[9] = 'Rafael'
console.log(aprovados.length);

console.log(aprovados[8] === undefined);

console.log(aprovados);

//sort: ordena os elementos 
aprovados.sort()
console.log(aprovados);
delete aprovados[1]
console.log(aprovados[1]);
//exclui e adiciona
aprovados.splice(1,2, 'Elemento1', 'Elemento2')
console.log(aprovados);
