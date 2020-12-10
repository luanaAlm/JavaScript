function teste1(num){
    if (num > 7) {
        console.log(num) //pertence ao if

    console.log('Final') //pertence a função
    }
}
teste1(6)
teste1(8)

function teste2(num){
    if (num > 7);//; cuidado! não usar nas estruturas de controle
    {
        console.log(num);
    }
}
teste2(6)
teste2(8)