// Prodavnica
// Направити променљиву која представља цену производа коју купац жели да купи
// Направити променљиву која представља количину новца коју купац има
// Ако купац нема довољно новца, исписати поруку: "Немате довољно новца", а затим написати тренутно стање (остаје исто)
// Ако има довољно новца, исписати: "Успешно сте купили производ", а затим исписати тренутно стање (сада измењено)

function kupovina(cena,novcanik){
    if(cena>novcanik){
        console.log("Nemate dovoljno novca", novcanik);
    }
    else{
        console.log("Uspešno ste kupili proizvod",novcanik-cena);
    }
}

kupovina(130,120);