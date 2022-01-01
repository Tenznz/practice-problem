"use strict";
const readline = require("readline");
const r3 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let inWord;
r3.question("enter the first number ", (number) => {
number=parseInt(number);
    switch(number){
        case 1:
            inWord="one"; break;
        case 2:
            inWord="two"; break;
        case 3:
            inWord="three"; break;
        case 4:
            inWord="four"; break;
        case 5:
            inWord="five"; break;
        case 6:
            inWord="six"; break;
        case 7:
            inWord="seven"; break;
        case 8:
            inWord="eight"; break;
        case 9:
            inWord="nine"; break;    
        default:
            inWord="invalid";
    }
    console.log(inWord);
   r3.close(); 
});
