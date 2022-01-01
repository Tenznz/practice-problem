const readline = require("readline");
const r2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
r2.question("enter the number ? ", (number) => {
    number=parseInt(number);
    let inword;
    switch(number){
        case 1:
            inword="monday";   
             break;
        case 2:
            inword="tuesday";   
            break;
        case 3:
            inword="wednesday"; 
            break;
        case 4:
            inword="thrusday";  
            break;
        case 5:
            inword="friday";  
            break;
        case 6:
            inword="saturday";  
            break;
        case 7: 
            inword="sunday";    
            break;
        default:
            inword="invalid input";
    }
    console.log(inword);
    r2.close();
});
