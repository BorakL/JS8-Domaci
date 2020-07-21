let n=5;

let piramida="";
for(let i=1; i<=n; i++){
    for(let j=n; j>0; j--){
        if(j<=i){
            piramida+="#";
        }
        else{
            piramida+=" ";
        }
    }
    piramida+="\n";
}

console.log(piramida);