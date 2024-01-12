class Negociacao {
    constructor(data, quantidade, valor) {
        this._date = data
        this._quantidade = quantidade
        this._valor= valor
    }

    get volume() {return this.valor * this.quantidade}
    get date() {return this._date}
    get quantidade() {return this._quantidade}
    get valor() {return this._valor} 
}