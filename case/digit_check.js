const readline= require("readline");
const r1= readline.createInterface({
   input: process.stdin,
   output: process.stdout 
});
let inword;
r1.question("Enter from 1,10,100 and 1000 to check digit: ",(number)=>{
number=parseInt(number);
switch(number){
    case 1:
        inword="unit digit";
        break;
    case 10:
        inword="ten's digit";
        break;
    case 100:
        inword="hundred's digit";
        break;
    case 1000:
        inword="thousand's digit";
        break;
    default:
        inword="invalid input";
    }
    console.log(inword);
r1.close();
});