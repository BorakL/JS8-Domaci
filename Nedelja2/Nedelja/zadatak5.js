let n=5;
let piramida="";
for(let i=0; i<=n; i++){
    for(let j=n; j>0; j--){
        if(j<=i){
            piramida+="#";
        }
        else{
            piramida+=" ";
        }
    }
    piramida+=" ";
    for(let j=i; j>0; j--){
        piramida+="#";
    }
    piramida+="\n";
}
console.log(piramida);