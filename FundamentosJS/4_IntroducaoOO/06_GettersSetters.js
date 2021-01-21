//Getters/Setters


const sequencia = {
    //_valor não é uma variável privada 
    //por convensa essa variavel sera acessada internamente dentro do objeto
    _valor: 1 , 
    //função get
    get valor(){
        return this._valor++ //pega o valor, retorna e acrescenta o seguinte
    },
    set valor(valor){ 
        //atribui a _valor o valor recebido dentro do parametro
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}
console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor);
