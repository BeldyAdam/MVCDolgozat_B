export default class Kartya {
    #objektum;
    szuloElem;
    kartyaElem;

    constructor(obj, szuloElem) {
        this.#objektum = obj;
        this.szuloElem = szuloElem;
        this.kepOsszeallit();
        this.kattintottElem = $("button:last");
        this.esemenykezelo();
    }

    kepOsszeallit() {
        this.kartyaElem = $(`
            <div class="kartya">
                <ul>
                    <img src="${this.#objektum.kep}" alt="${this.#objektum.nev}">
                    <li>Autó neve: ${this.#objektum.nev}</li>
                    <li>Autó motorja: ${this.#objektum.motor}</li>
                </ul>
                <button id="torlesGombb">Törlés</button>
            </div>
        `);
        this.szuloElem.append(this.kartyaElem);
    }

    esemenykezelo() {
        this.kattintottElem.on("click", () => {
            const e = new CustomEvent("kattintas", { detail: this.#objektum });
            this.kartyaElem.remove();
            window.dispatchEvent(e);
        });
    }
}