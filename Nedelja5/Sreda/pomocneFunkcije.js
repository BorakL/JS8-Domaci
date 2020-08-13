//Funkcija za odabir najjačeg
function maxStrength(pokArr){
    let maxNapad = Math.max(... pokArr.map(p => p.karakteristike.napad));
    return pokArr.find(p => p.karakteristike.napad===maxNapad);
}

//Funkcija koja vraća sve sposobnosti svih pokemona u jednom nizu
function getSposobnosti(pokemoni){
    let sposobnosti = [];
    pokemoni.forEach(p=>{sposobnosti.push(...p.sposobnosti)});
    return sposobnosti;
}

//Sortirani pokemoni po brzini rastuće
function sortiranje(pokemoni){
    return pokemoni.sort((a,b)=>{b.karakteristike.brzina - a.karakteristike.brzina}).map(p=>`${p.ime}: ${p.karakteristike.brzina}`);
}

export { maxStrength, getSposobnosti, sortiranje };