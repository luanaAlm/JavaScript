const obj = {
    a: 1, 
    b: 2, 
    c:3,
    //JSON excluiu a função
    soma (){
        return a + b + c
    }
}

//gerou um texto 
//Objeto para Json
console.log(JSON.stringify(obj));

//Json para objeto
//console.log(JSON.parse("{a: 1, b: 2, c: 3}"));
//console.log(JSON.parse("{'a': 1,'b': 2,'c': 3}"));

//textos e taaributos dever ser somente com aspas duplas ("")
console.log(JSON.parse('{"a":1,"b":2,"c":3}'));
//suportados
console.log(JSON.parse('{"a": 1.7 , "b": "String", "c": true, "d": {}, "e": []}'));