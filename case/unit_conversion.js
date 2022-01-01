const readline = require("readline");
const r2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log("Enter\n1.Feet to Inch\n2.Feet to Meter\n3.Inch to Feet\n4.Meter to Feet");

r2.question("enter the number ? ", (input) => {
     switch(parseInt(input)){
         case 1:
             r2.question("Enter Feet: ",(feet)=>{
                inch=feet*12;
                console.log("Inch:"+inch);
                r2.close();
             });
             break;
        case 2:
            r2.question("Enter feet: ",(feet)=>{
                meter=feet/3.2808;
                console.log("Meter:"+meter);
                r2.close();
            });
            break;
        case 3:
            r2.question("Enter Inch: ",(inch)=>{
                feet=inch/12; 
                console.log("Feet:"+feet);
                r2.close();
                });
            break;
        case 4:
            r2.question("Enter Meter: ",(meter)=>{
                feet=meter*3.2808399;
                console.log("Feet: "+feet);
                r2.close();
            });
            break;
        default:
            console.log("invalid input");
     }
});
