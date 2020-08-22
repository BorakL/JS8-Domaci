import {transDescription,transAmount,transSubmit,month} from './modules/elements.js';
import {statusCheck,calculateExpensesPercents} from './modules/functions.js';
 
 const months=["Januaru","Februaru","Martu","Aprilu","Maju","Junu","Julu","Avgustu","Septembru","Oktobru","Novembru","Decembru"];
const d = new Date(); 
month.innerText = months[d.getMonth()]+" "+d.getFullYear()+".";



//Counter
let counter = 0;

const formValidation = ()=>{
    return (transDescription.value.trim() !== "" &&
            !Number.isNaN(Number(transAmount.value.trim())) &&
            transAmount.value>0
            )
}


import {addToDom} from './modules/addToDom.js';



 transSubmit.addEventListener("click",(e)=>{
     e.preventDefault();
     if(!formValidation()) {
         alert("pogrešan Unos");
         return;
     }
     
     addToDom(counter);

     //Provera i ispis stanja
     statusCheck(); 
     calculateExpensesPercents();

    counter++;
 })

 