const readline = require("readline");
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
r1.question("Check no is prime: ",(number)=>{
    let flag;
    if (number == 1) {
        console.log(number + " is neither prime not composite");
    } else {
        for (let i = 2; i < number; i++) {
            if (parseInt(number) % parseInt(i) == 0) {
                flag = 1;
            }
        }
        if (flag == 1) {
            console.log(number + " is not a prime");
        } else {
            console.log(number + " is a prime");
        }
    }
    r1.close();
});