/*
На страници постоје 2 дугмета за наручивање (као на страници пицерије, ORDER) И постоје 2 дугмета за наручивање одмах
    Дугмићи за 'наручивање' повећавају бројач
    Дугмићи за 'наручивање одмах' ресетују бројач на нула и исписују додатну поруку (Порука у облику: Наручили сте [X] пица, [ danasnji datum i vreme ]) 
    Напомена: X је бројач, проверити да ли је бројач 0, и ако јесте кликом на наручивање одмах избацује одговарајућу поруку за грешку
*/

const dugmeNaruci1 = document.getElementsByClassName("naruci")[0];
const dugmeNaruci2 = document.getElementsByClassName("naruci")[1];
const dugmeNaruciOdma1 = document.getElementsByClassName("naruci-odma")[0];
const dugmeNaruciOdma2 = document.getElementsByClassName("naruci-odma")[1];

dugmeNaruci1.addEventListener("click",add);
dugmeNaruci2.addEventListener("click",add);
dugmeNaruciOdma1.addEventListener("click",reset);
dugmeNaruciOdma2.addEventListener("click",reset);

let counter = 0;

function add() {counter++;}

function reset(){
    let msg="";
    if(counter==0){
        msg="Niste ništa naručili";
    }
    else{
        let d = new Date();
        let pica = "pica";
        for(let i=1; i<5; i++){
            if(counter>=5 && counter<=20) break;
            if(i==1 && (counter-i%10)==0) {pica ="picu"; break;}
            if((counter-i) % 10 === 0) pica="pice";
        }
        msg = `Naručili ste ${counter} ${pica}. \n Datum: ${d.getDate()}. ${d.getMonth()+1}. ${d.getFullYear()}. \n Vreme: ${d.getHours()}:${d.getMinutes()} `;
        counter=0;
    } 
    document.getElementById("msg").innerText = msg;
}
