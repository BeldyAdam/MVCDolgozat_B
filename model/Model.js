export default class Model{
    #lista = [];
    constructor(lista){
        this.#lista = lista;
        this.getList();
    }

    getList(){
        return this.#lista;
    }
}