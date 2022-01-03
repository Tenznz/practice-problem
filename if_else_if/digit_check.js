const readline = require("readline");
const r2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
r2.question("enter 1,10,100,1000 to check digit? ", (number) => {
    console.log(number)
    if (number == 1) {
        console.log("unit digit");
    } else if (number == 10) {
        console.log("ten's digit");
    } else if (number == 100) {
        console.log("hundred's digit");
    } else if (number == 1000) {
        console.log("thousand's digit");
    } else {
        console.log("invalid number");
    }
    r2.close();
});