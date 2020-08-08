let pokemon1 = {
    ime: "Pikacu",
    vrsta: "elektricni",
    opis: "Za samo ime Pikachu postoje dvije teorije. Prva je da ime dolazi od kombinacije riječi 'pika' koja na japanskom predstavlja munju ili struju te 'chu', što predstavlja japansku onomatopeja za skvičanje, a druga teorija je da je samo ime došlo od 'stjenovitih zečeva' (rock rabbits), točnije od male životinjice nalik na miša i zeca imena pika",
    sposobnosti: ["brzina", "brz napad", "specijalna odbrana"],
    karakteristike: {
        napad: 55,
        odbrana: 30,
        brzina: 90
    },
    slika:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
}

let pokemon2 = {
    ime: "Blaziken",
    vrsta: "borbeni",
    opis: "Blaziken je visok Pokémon sa ljudskim i ptičjim karakteristikama. Tijekom borbe, oko njegovih ručnih zglobova, počet će žestoko gorjeti plamenovi. Njegove su noge toliko snažne da mu dopuštaju da preskoči nebodere visoke nekoliko desetaka katova. Blaziken je vješt u svim borilačkim vještinama.",
    sposobnosti: ["borilačke veštine", "brz napad", "specijalni napad"],
    karakteristike: {
        napad: 75,
        odbrana: 50,
        brzina: 60
    },
    slika: "https://i.pinimg.com/originals/fc/f2/ba/fcf2ba50109ee86aef7e582904d90db8.png"
}

let pokemon3 = {
    ime: "Entei",
    vrsta: "vatreni",
    opis: "Entei nalikuje na četveronožnu zvijer koja nosi odlike lavova i velikih pasa (poput Arcaninea). Ima gusto, mekano krzno smeđe boje, dugačku grivu, te nešto slično metalnom prstenju oko svojih zglobova. Na bokovima ima par zupčastih krila, dok mu je na leđima bijela tvorevina nalik oblaku dima ili pepela. Struktura na licu između njegovog nosa i usta nalikuje na brkove. ",
    sposobnosti: ["riga vatru", "imun na opekotine"],
    karakteristike: {
        napad: 54,
        odbrana: 37,
        brzina: 58
    },
    slika: "https://cdn.bulbagarden.net/upload/thumb/f/f9/244Entei.png/1200px-244Entei.png"
}

let pokemon4 = {
    ime: "Dewgong",
    vrsta: "ledeni",
    opis: "Dewgongova anatomija tijela nalikuje anatomiji nekoliko vrsta životinja iz stvarnog života, poput morskog lava i tuljana. Njegovo je vitko tijelo u potpunosti prekriveno gustim i glatkim slojem bijelog, mekanog krzna i završava lepezastim repom. Dewgongov vrh glave krasi malen rog, kojim se služi za bušenje rupa u ledu dok se nalazi ispod vode, kako bi mogao doći do zraka. Nekada su mornari često smatrali Dewgonga sirenom. ",
    sposobnosti: ["izdiše led", "imun na smrzavanje"],
    karakteristike: {
        napad: 40,
        odbrana: 35,
        brzina: 55
    },
    slika: "https://img.pokemondb.net/artwork/large/dewgong.jpg"
}

let pokemoni = [pokemon1, pokemon2, pokemon3, pokemon4];





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



/////////////FUNKCIJE//////////////////

//Funkcija za prikazivanje pokemona
const show = (p) => {
    let main=document.getElementById("main");

    let container = document.createElement("div");
    container.setAttribute("class","grid-container");
    main.appendChild(container);

    let title = document.createElement("div");
    title.setAttribute("class","title");
    title.innerText=p.ime;
    container.appendChild(title);

    let description = document.createElement("div");
    description.innerText = p.opis;
    description.setAttribute("class","description");
    container.appendChild(description);

    let img = document.createElement("img");
    img.src=p.slika;
    img.alt="slika pokemona"
    container.appendChild(img);
}

//Funkcija za odabir najjačeg
function maxStrength(pokArr){
    let maxNapad = Math.max(... pokArr.map(p => p.karakteristike.napad));
    return pokemoni.find(p => p.karakteristike.napad===maxNapad);
}