import Model from "../model/Model.js";
import View from "../view/View.js";
import { adatLista } from "../adatok/adatok.js";
export default class Controller{
    constructor(){
        this.model = new Model(adatLista);
        this.view = new View(this.model.getList());
        this.#esemenykezelo();
    }

    #esemenykezelo(){
        $(window).on("kattintas", (event)=>{
/*             console.log("Test", event);
            this.torolEsemeny(event.target); */
        })
    }

/*     torolEsemeny(event){
        let szuloElem = $(".kartya");
        adatLista.splice(event.target)
    } */
}