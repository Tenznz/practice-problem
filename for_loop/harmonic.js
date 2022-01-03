const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("enter the limit of harmonic ", function(totalNumber){
    sumOfHarmonics = 1;
    harmonics=1;
    for(let i=2; i <=totalNumber; i++ ){
        harmonics=harmonics+"+"+1+"/"+i;
        sumOfHarmonics += 1/i; 
    }
    console.log("Harmonics is : "+harmonics);
    console.log("Sum of harmonic is "+sumOfHarmonics);
    rl.close();  
});