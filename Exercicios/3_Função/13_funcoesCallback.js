//Exemplo de callback no browser
//a resposta da função é um array
document.getElementsByTagName('body')[0].onclick = function(e){
    console.log('O evento ocorreu!');
}