var firstNumber = parseInt(prompt('First number:'));
var secondNumber = parseInt(prompt('Second number:'));

function evenNumbers(start,end){
    for(step=start; step<end+1;++step){
        if(step%2==0){
            console.log(`even: ${step}`);
        }
        if(step%2!=0){
            console.log(`odd: ${step}`);
        }
        if(step%7==0){
            console.log(`mult of 7: ${step}`);
        }
    }
}

if(firstNumber>secondNumber){
    evenNumbers(secondNumber,firstNumber);
}
else if(firstNumber<secondNumber){
    evenNumbers(firstNumber,secondNumber);
}
else{
    console.error('range was not set');
}