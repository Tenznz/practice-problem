const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("enter the year ", function(day) {
       if(`${day}` % 4 == 0) {
            console.log("it is leap year");
        }
        else{
            console.log("it is not a leap year");
        }
        rl.close();
});