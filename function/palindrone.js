const readline = require('readline');
const r3 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function checkPalindrome(num1, num2) {
    let temp = 0, remainder;
    let a = num1;
    while (a > 0) {
        remainder = a % 10;
        a = parseInt(a / 10);
        temp = temp * 10 + remainder;
    }
    if (temp == num2) {
        console.log( "is palindrome");
    } else {
        console.log("not palindrome");
    }
}
r3.question("enter 1st number ", function (number1) {
    r3.question("enter 2nd number ",function (number2){
        let num1 = parseInt(number1);
        let num2 = parseInt(number2);
        checkPalindrome(num1,num2);
   r3.close();
    });
  });