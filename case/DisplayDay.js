const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var valid=false;
rl.question("ENTER NUMBER BETWEEN (0 to 6) : ", function(day) {

    switch (parseInt(day)) {
        case 0:
          Day = "Sunday";
          break;
        case 1:
          Day = "Monday";
          break;
        case 2:
          Day = "Tuesday";
          break;
        case 3:
          Day = "Wednesday";
          break;
        case 4:
          Day = "Thursday";
          break;
        case 5:
          Day = "Friday";
          break;
        case 6:
          Day = "Saturday";
      }
console.log(Day);
    rl.close();
});