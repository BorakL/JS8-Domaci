import {pokemoni} from './pokemoni.js';
import {maxStrength, getSposobnosti, sortiranje} from './pomocneFunkcije.js';
import {show} from './prikaz.js';

///////////// DUGMIĆI ////////////////

let prikazSvih = document.getElementById("prikaz");
let prikazNajjaceg = document.getElementById("pobednik");

//PRIKAZIVANJE POKEMONA
prikazSvih.addEventListener("click",function(){
    document.getElementById("main").innerHTML="";
    pokemoni.forEach(p=>show(p));
});

//PRIKAZIVANJE NAJJAČEG POKEMONA
prikazNajjaceg.addEventListener("click",function(){
    document.getElementById("main").innerHTML="";
    show(maxStrength(pokemoni));
});

console.log("Sposobnosti svih pokemona: ",getSposobnosti(pokemoni));
console.log("Sortiranje pokemona: ", sortiranje(pokemoni));