const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("enter the inch ", function(inch){
    
    let feet= inch/12; 
    console.log("total feet : "+feet);  
   
    rl.close();
});