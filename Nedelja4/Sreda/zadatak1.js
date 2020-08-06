let pokemon1 = {
    ime: "Pikacu",
    vrsta: "elektricni",
    sposobnosti: ["brzina", "brz napad", "specijalna odbrana"],
    karakteristike: {
        napad: 55,
        odbrana: 30,
        brzina: 90
    }
}

let pokemon2 = {
    ime: "Blaziken",
    vrsta: "borbeni",
    sposobnosti: ["borilačke veštine", "brz napad", "specijalni napad"],
    karakteristike: {
        napad: 75,
        odbrana: 50,
        brzina: 60
    }
}

let pokemon3 = {
    ime: "Entei",
    vrsta: "vatreni",
    sposobnosti: ["riga vatru", "imun na opekotine"],
    karakteristike: {
        napad: 54,
        odbrana: 37,
        brzina: 58
    }
}

let pokemon4 = {
    ime: "Dewgong",
    vrsta: "ledeni",
    sposobnosti: ["izdiše led", "imun na smrzavanje"],
    karakteristike: {
        napad: 40,
        odbrana: 35,
        brzina: 55
    }
}

let pokemoni = [pokemon1, pokemon2, pokemon3, pokemon4];


//Funkcija koja vraća sve sposobnosti svih pokemona u jednom nizu
function getSposobnosti(pokemoni){
    let sposobnosti = [];
    pokemoni.forEach(p=>{sposobnosti.push(...p.sposobnosti)});
    return sposobnosti;
}
console.log(getSposobnosti(pokemoni));


//Sortirani pokemoni po brzini rastuće
console.log(pokemoni.sort((a,b)=>{b.karakteristike.brzina - a.karakteristike.brzina}).map(p=>`${p.ime}: ${p.karakteristike.brzina}`));
