var min,max;
let rand1=Math.floor(Math.random()*999)+1;
let rand2=Math.floor(Math.random()*999)+1;
let rand3=Math.floor(Math.random()*999)+1;
let rand4=Math.floor(Math.random()*999)+1;
let rand5=Math.floor(Math.random()*999)+1;
console.log("random numbers is : "+rand1+" "+rand2+" "+rand3+" "+rand4+" "+rand5);
if(rand1>rand2&&rand1>rand3&&rand1>rand4&&rand1>rand5){
    max=rand1;
}else{
    if(rand2>rand3&&rand2>rand4&&rand2>rand5){
        max=rand2;
    }else{
        if(rand3>rand4&&rand3>rand5){
            max=rand3;
        }else{
            if(rand4>rand5){
                max=rand4;
            }else{
                max=rand5;
            }
        }
    }
}
if(rand1<rand2&&rand1<rand3&&rand1<rand4&&rand1<rand5){
    min=rand1;
}else{
    if(rand2<rand3&&rand2<rand4&&rand2<rand5){
        min=rand2;
    }else{
        if(rand3<rand4&&rand3<rand5){
            min=rand3;
        }else{
            if(rand4<rand5){
                min=rand4;
            }else{
                min=rand5;
            }
        }
    }
}
console.log("max: "+max);
console.log("min: "+min);
