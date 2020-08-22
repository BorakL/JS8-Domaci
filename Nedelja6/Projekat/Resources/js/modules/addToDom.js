import {transType,transDescription,transAmount,transSubmit,revenueContainer,expenseContainer} from './elements.js'; 
import{revenues,expenses} from './accounting.js';
import{formatNumber,statusCheck,calculateExpensesPercents} from './functions.js';

//Dodavanje
export const addToDom = (counter)=>{
        let sign = "";
        let item = document.createElement("div");
        item.className="item";
        let percent;

        //Dodavanje prihoda
        if(transType.value==="+"){
            revenueContainer.appendChild(item);
            sign="+";
            revenues.push({
                id: counter, 
                description: String(transDescription.value),
                amount: Number(transAmount.value)
            });
        }
        //Dodavanje rashoda
        else{
            expenseContainer.appendChild(item);
            sign="-";
            expenses.push({
                id: counter, 
                description: String(transDescription.value),
                amount: Number(transAmount.value)
            }); 
            percent = document.createElement("span");
            percent.className = "expense-percent";
        }

        //Ispis stavki
        let description = document.createElement("span");
        description.className="item-description"; 
        description.innerText = transDescription.value;
        let trash = document.createElement("span");
        trash.className = "delete"; 
        trash.innerHTML = "<i class='fa fa-trash' aria-hidden='true'></i>";
        let itemAmount = document.createElement("span");
        itemAmount.className="item-amount";
        itemAmount.textContent = `${sign} ${formatNumber(transAmount.value)}`;
        item.append(description,trash);
        if(transType.value==="-"){item.append(percent)};
        item.append(itemAmount);
    
        
        
        //Brisanje kad se klikne
        trash.addEventListener("click",function(){                            
            //Brišemo stavku u listi
            this.parentNode.style.opacity = 0;
            setTimeout(()=>{this.parentElement.remove()
                //Brišemo objekat u nizu
                if(sign==="+"){
                    let i = revenues.map(r=>r.id).indexOf(counter);
                    revenues.splice(i,1);
                }
                else{
                    let i = expenses.map(e=>e.id).indexOf(counter);
                    expenses.splice(i,1);
                }
                //Provera i ispis stanja i procenata rashoda  
                statusCheck();
                calculateExpensesPercents();
            }, 400)                                                        
            
            
        })
        //Resetujemo inpute
            transType.value = "+";
            transDescription.value = "";
            transAmount.value = "";
 }