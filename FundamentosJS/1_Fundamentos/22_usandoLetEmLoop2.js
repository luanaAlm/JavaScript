const funcs = []
for(var i = 0; i < 10; i ++){
    //push adiciona elementos no array
    funcs.push(function(){
        console.log(i)
    })
}
//por nao ter escopo de bloco a variavel será 10
funcs[2]()
funcs[8]()
