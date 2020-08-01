//Написати функцију која исписује све елементе низа који су дељиви са 5
function deljiviSa5(arr){
    console.log(arr.filter(n=>n%5==0));
}

let niz=[2,3,443,125,554,32,11,21,45,5];
deljiviSa5(niz);