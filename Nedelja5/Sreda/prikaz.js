//Funkcija za prikazivanje pokemona
export function show(p){
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