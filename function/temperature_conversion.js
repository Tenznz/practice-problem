const prompt = require('prompt-sync')();

function ferenhietToCelsius(degF) {
    return (degF - 32) * (5 / 9);
}
function celsiusToFerenhiet(degC) {
    return (degC * 9 / 5) + 32;
}

let opt = prompt("Enter 1.Celsius to ferenheit 2.ferenheit to celsius ");
let temperature = prompt("Enter a Temperature: ");
let conversionTemp;
switch (parseInt(opt)) {
    case 1:
        if (temperature >= 0 && temperature <= 100) {
            conversionTemp = celsiusToFerenhiet(temperature);
        } else {
            console.log("temprature should be 0c-100c");
        }
        break;
    case 2:
        if (temperature >= 32 && temperature <= 212) {
            conversionTemp = ferenhietToCelsius(temperature);
        } else {
            console.log("temprature should be 32f-212f");
        }

        break;
    default:
        console.log("invalid input");
}
console.log("conversion Temperature " + conversionTemp);
