const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var valid=false;
rl.question("enter the DAY ? ", function(day) {
    rl.question("enter the MONTH ? ", function(month) {
         if( (`${day}` > 1 && `${day}` <=20 ) && ( `${month}` > 2 && `${month}` <= 6 ) ){
            valid=true;
         }else{
             valid=false;
         }
         console.log(`the day is " ${day}, the month is ${month}`);
         console.log(valid);
         rl.close();
     });
 });
