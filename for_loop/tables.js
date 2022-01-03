const readline = require("readline");
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
r1.question("Table you want to show",(number)=>{
     for(let i=1;i<=10;i++){
         table=number*i;
         console.log(number+" * "+i+" = "+table);
     }
     r1.close();
});