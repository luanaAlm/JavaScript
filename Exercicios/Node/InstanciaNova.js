//retornar uma nova instancia com factory
module.exports = () => {
    return {
        valor: 1,
        inc(){
            this.valor++
        }
    }
}