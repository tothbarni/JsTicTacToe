import Elem from "./Elem.js";

export default class JatekTer {
  #lista = ["O","","","","","","","","X"];
  constructor(szuloElem) {
    this.szuloElem = szuloElem;
    this.megjelenit();
  }

  megjelenit() {
    for (let index = 0; index < this.#lista.length; index++) {
      new Elem(this.#lista[index], index, this.szuloElem);
    }
  }

}
