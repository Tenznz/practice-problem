const readline = require("readline");
const r2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
r2.question("enter the number ? ", (number) => {
    console.log(number)
    if (number == 1) {
        console.log("monday");
    } else if (number == 2) {
        console.log("tuesday");
    } else if (number == 3) {
        console.log("wednesday");
    } else if (number == 4) {
        console.log("thursday");
    } else if (number == 5) {
        console.log("friday");
    } else if (number == 6) {
        console.log("saturday");
    } else if (number == 7) {
        console.log("sunday");
    }
    else {
        console.log("invalid number");
    }
    r2.close();
});
