/**
 * Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.

 */
function div3(num){
    if(num % 3 == 0){
        console.log('True');
    }else{
        return 'False'
    }
}

console.log(div3(9));
console.log(div3(10));