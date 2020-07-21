//Pošto nisam siguran šta se tačno traži u zadatku

//ovaj primer na najprostiji način ispisuje brojeve deljive sa 5 do broja 1000
for(let i=5; i<=1000; i+=5){
    console.log(i); 
}

console.log("--------------------------------");

//a ovaj ispisuje 1000 brojeva deljivih sa 5
let brojac=0;
for(let i=5; ; i+=5){
	if(brojac==1000) break;
	console.log(i);
    brojac++;
}


