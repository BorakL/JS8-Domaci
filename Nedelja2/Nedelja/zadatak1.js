// Сачувати у променљиве цену и пречник пице
// Израчунати која је цена пице по цм² (пазити на то да се површина рачуна са полупречником)
// Исписати тај резултат у конзолу

let cena = 80;
let precnik = 40;
let rezultat = cena/(Math.pow(precnik/2,2)*Math.PI)
console.log("Cena pice po cm^2 je: ", rezultat);