export default class Model{
    #lista = [];
    constructor(lista){
        this.#lista = lista;
        this.getList();
        /* this.setList(); */
    }

    getList(){
        return this.#lista;
    }

    setList(event){
        this.#lista.splice(event);
    }
}