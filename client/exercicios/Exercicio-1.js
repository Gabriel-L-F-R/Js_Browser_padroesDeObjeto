class Exercicio1{

    constructor(nome, idade, data,){
        this._nome = nome
        this._idade = new Date(idade.getTime())      
        this._data = data
        this._saldo = 0 

        object.freeze(this)             
    }
    
    get saldo(){
        return this._saldo
    }
    get idade(){
        return this._idade
    }
    get nome (){
        return this._nome
    }
    get data(){
        return new Date(this._data.getTime())
    }
    
    depositar(valor){
        this._saldo += valor
        console.log("valor atual = " + this._saldo)
    }

}