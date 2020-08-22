import{revenues,expenses} from './accounting.js';
import {totalRevenue,totalExpense,balance} from './elements.js'; 


//Formatiranje brojeva
export const formatNumber=(num)=> {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}


 //Funkcija za proveru i ispis stanja
 export const statusCheck = ()=>{
    let eSum = 0;
    let rSum = 0;
    if(revenues !== []){
       rSum = revenues.reduce((total,r)=> {return(total+r.amount)},0);
       totalRevenue.innerText = formatNumber(rSum); 
    }
    if(expenses !== []){
       eSum = expenses.reduce((total,e)=> {return(total+e.amount)},0);
       let percent = (eSum == 0 || rSum == 0) ? "" : `(${Math.round(eSum/rSum*100)}%)`;
       totalExpense.innerText = `${formatNumber(eSum)} ${percent}`;  
    }
    if(expenses!==[] && revenues!==[]){
        let x = rSum-eSum;
        x = x.toString().replace(/^-(?=\d+)/,'- ');
       balance.innerHTML = formatNumber(x) ;
    }
}
 

//Računanje procenata rashoda 
export const calculateExpensesPercents = ()=>{
    let percentsElements = document.getElementsByClassName("expense-percent");
    percentsElements=[...percentsElements];
    let expenseAmounts = expenses.map(e=>e.amount); 
    let expenseSum = expenseAmounts.reduce((e,t)=>{return e+t},0);
    let percents = expenseAmounts.map((e)=>{return Math.round(e/expenseSum*100) +"%"});
    percentsElements.forEach((e,i)=>{e.innerText=percents[i]})
};