const funcs = []
for(let i = 0; i < 10; i ++){
    //push adiciona elementos no array
    funcs.push(function(){
        console.log(i)
    })
}
//Let tem escopo de bloco e mostrará os valores das variavel
funcs[2]()
funcs[8]()
