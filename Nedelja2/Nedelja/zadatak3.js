let n=5;

let piramida="";
for(let i=1; i<=n; i++){
    for(let j=i; j>0; j--){
        piramida+="#";
    }
    piramida+="\n";
}

console.log(piramida);