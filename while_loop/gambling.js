var gambler = 100;
let counterOfBet = 0;
let win = 0;
while (gambler > 0 && gambler < 200) {
    let bet = Math.floor((Math.random() * 10) % 2);
    counterOfBet++;
    switch (bet) {
        case 0:
            if (gambler < 0) {
                break;
            }
            gambler = gambler - 1;
            break;
        case 1:
            gambler = gambler + 1;
            win++;
            break;
      
    }
    console.log(gambler)
}
console.log("number of won :"+win);
console.log("number of bet " + counterOfBet + " gambler has " + gambler);
if(gambler==0){
    console.log("gambler lost");
}
else if(gambler==200){
    console.log("gambler won");
}