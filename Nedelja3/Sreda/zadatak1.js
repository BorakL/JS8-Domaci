//Написати функцију која враћа максимум од 3 броја (Параметри функције су 3 броја)

function max3Num(n1,n2,n3){
    let max = n1>n2 ? n1 : n2;
    return max<n3 ? n3 : max;
}

console.log(max3Num(1,2,-3));