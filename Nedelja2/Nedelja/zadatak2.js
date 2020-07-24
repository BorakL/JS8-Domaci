// За првих 100 бројева исписати:

//  FizzBuzz ако је број дељив и са 3 и са 5
//  Fizz ако је број дељив само са 3
//  Buzz ако је број дељив само са 5
//  Број ако није дељив ни са 3 ни са 5


for(let i=1; i<=100; i++){
    let result="";
    if(i%3==0) result += "Fizz";
    if(i%5==0) result += "Buzz";
    if(result === ""){
        console.log(i);
    }
    else {
        console.log(result);
    }
}
