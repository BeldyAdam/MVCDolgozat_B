export default class Kartya{
    #objektum;
    szuloElem;

    constructor(obj, szuloElem){
        this.#objektum = obj;
        this.szuloElem = szuloElem;
        this.kepOsszeallit();
        this.kattintottElem = $("button:last");
        this.esemenykezelo();
    }

    kepOsszeallit(){
        this.szuloElem.append(`<div class="kartya"><ul><img src="${this.#objektum.kep}" alt="${this.#objektum.nev}"><li>Autó neve: ${this.#objektum.nev}</li><li>Autó motorja: ${this.#objektum.motor}</li><ul><button id="torlesGombb">Törlés</button></div>`)
    }

    esemenykezelo(){
        this.kattintottElem.on("click", ()=>{
            const e = new CustomEvent("kattintas", {detail:this.#objektum});
            window.dispatchEvent(e);
        })
    }
}