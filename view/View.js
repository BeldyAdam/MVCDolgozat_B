import Kartya from "./Kartya.js";

export default class View{
    #szuloElem;
    #lista = [];

    constructor(lista){
        this.#lista = lista
        this.#szuloElem = $(".galeria");
        this.galeriaLetrehoz();
    }

    galeriaLetrehoz(){
        this.#lista.forEach(element => {
            new Kartya(element, this.#szuloElem);
        });
    }
}