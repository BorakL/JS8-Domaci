//Написати функцију која израчунава цену пице по квадратном центиметру (параметри функције су полупречник у цм, и цена пице)
function cenaPice(r,p){
    if(r<=0 || p<=0) return "Neispravan unos";
    return (p / (r**2 * Math.PI)).toFixed(2);
}

console.log(cenaPice(21,400));