const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("enter the first number ", (numberOne) => {
    rl.question("enter the second number ", (numberTwo) => {
        rl.question("enter the third number ", (numberThree) => {
            numberOne=parseFloat(numberOne);
            numberTwo=parseFloat(numberTwo);
            numberThree=parseFloat(numberThree);
            let operationOne = (numberOne + (numberTwo * numberThree));
            let operationTwo = (numberThree+(numberOne / numberTwo));
            let operationthree = ((numberOne % numberTwo) + numberThree);
            let operationFour = ((numberOne * numberTwo) + numberThree); 
            console.log("the first operation is " + numberOne+"+"+numberTwo +"*"+ numberThree + "="+operationOne);
            console.log("the first operation is " +  numberThree +"+"+ numberOne +"/"+ numberTwo+"="+operationTwo);
            console.log("the first operation is " +  numberOne+"%"+ numberTwo +"+"+ numberThree+"="+operationthree);
            console.log("the first operation is " + numberOne+"*"+ numberTwo +"+" +numberThree+"="+operationFour);
            console.log("\ngreatest of all: ");
            
            if(operationOne > operationTwo && operationOne > operationthree && operationOne > operationFour){
                console.log( numberOne+"+"+numberTwo +"*"+ numberThree + "="+operationOne);
            } else if(operationTwo > operationFour && operationTwo > numberThree){
                console.log( numberThree +"+"+ numberOne +"/"+ numberTwo+"="+operationTwo);
            }else if(operationthree > operationFour){
                console.log( numberOne+"%"+ numberTwo +"+"+ numberThree+"="+operationthree);
            }else{
                console.log(numberOne+"*"+ numberTwo +"+" +numberThree+"="+operationFour);
            }
            rl.close();
        });
    });
});