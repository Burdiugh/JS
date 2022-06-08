//First task


let array1 = [1,-2,3,-4,-5];
let array2 = [5,7,-38,0,10];
let array3 = array1.concat(array2);
array3.sort();
array3.reverse();
console.log(array3);



// Second task


let markArr=[];
 for (let i = 0; i < 10; i++) {
     let mark = parseInt(prompt(`Enter mark #${i+1}: `))
    markArr.push(mark);
 }
 
 let menuSelector=0;
 do {
     menuSelector = parseInt(prompt("Select option:\n1. Show marks\n2. Retake mark\n3. Is scholarship existing?\n 0. exit"))

     switch (menuSelector) {
         case 1:
            console.log(markArr);
             break;
             case 2:
            console.log(markArr);
             let index = parseInt(prompt("Enter number of mark to retake: "));
             let newMark = parseInt(prompt("Enter new mark: "));
              if (index!=-1) {
                  markArr[index-1]=newMark;
              }
             break;
             case 3:
                 var sum=0;
             for (let index = 0; index < markArr.length; index++) {
                 sum+=markArr[index];
             }
             var avg = sum/markArr.length;
             if (avg>=10.7) {
                 console.log(`You have a scholarship\nYour avg mark equals: ${avg}`);
             }
             else{
                console.log(`You don't have a scholarship\nYour avg mark equals: ${avg} but you need more than 10.6`);
             }
             break;
             case 0:
             menuSelector=0;
             break;
     
         default:
             break;
     }

 } while (menuSelector!=0);


// 3th



function getRandominArray(min, max) {
    return Math.random() * (max - min) + min;
  }

  function whoIsWinner(number1,number2){
    if(number1>number2){
        console.log('You won');
    }
    else if(number2>number1){
      console.log('Computer won');
    }
    else{
      console.log('Draw');
    }
  }
  
var playerScore=0; 
var computerScore=0; 

var playerRoundValue=0; 
var computerRoundValue=0; 

    prompt("Press any button to throw cube.");

  for (let index = 0; index < 3; index++) {
      playerScore += playerRoundValue = parseInt(getRandominArray(1,6));
      computerScore += computerRoundValue = parseInt(getRandominArray(1,6));
      console.log(`Round #${index+1}\nyou: ${playerRoundValue} / computer ${computerRoundValue}`);
      playerRoundValue = 0;
      computerRoundValue = 0;
      if(index<2){
        prompt("Press any key to start next round");
      }
  }

  whoIsWinner(playerScore,computerScore);
 
  console.log(`Your score: ${playerScore}\nComputer score: ${computerScore}`);
  
 






