class NegociacaoController {

    constructor(){

        let $ = document.querySelector.bind(document)

        this._valor = $("#valor");
        this._data = $("#data");
        this._quantidade = $("#quantidade")
    }
   
    adicionar(event){

        event.preventDefault();
        
        let negociacaoController = new NegociacaoController(

            this._data,
            this._quantidade, 
            this._valor
        )
        
    }
}