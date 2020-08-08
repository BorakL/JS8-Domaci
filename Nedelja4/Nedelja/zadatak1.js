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



// Направити функцију која прима низ покемона, пореди покемоне по јачини и враћа као победника оног који има највећу јачину напада.

function maxStrength(pokArr){
    let maxNapad = Math.max(... pokArr.map(p => p.karakteristike.napad));
    return pokemoni.find(p => p.karakteristike.napad===maxNapad);
}

console.log(maxStrength(pokemoni));