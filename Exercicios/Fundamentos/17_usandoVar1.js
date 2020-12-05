//blocos de código
{
    {
        {
            {
                //a variavel é visivel dentro do código independente dos blocos (escopo)
                var sera = 'Será???'
            }
        }
    }
}
console.log(sera)
function teste(){
    //variavel dentro de um função 
    //O escopo da variavel é somnte dentro da função e nao estará visivel debto da função
    var local = 123  
 
}
teste()
console.log(local)