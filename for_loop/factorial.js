const readline = require("readline");
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
r1.question("Enter a number: ",(number)=>{
    let result=1;
    while(parseInt(number)>0){
        result=number*result;
        number--;
    }
    console.log("factorial: "+result);
    r1.close();
})