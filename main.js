import JatekTer from "./JatekTer.js"
// játéktér példányosítás

let jatekTerElem = document.getElementsByClassName("jatekter")[0];
let asideElem = document.getElementsByClassName("info")[0];

new JatekTer(jatekTerElem, asideElem)