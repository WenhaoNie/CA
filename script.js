let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random()*10)

const compareGuesses = (hum,com,tar) =>{
    if(Math.abs(tar-hum)>Math.abs(tar-com)){return false}//computer wins
    else{return true}//human wins
}

const updateScore = (winner) =>{
    if(winner==='human'){humanScore+=1}
    else if(winner==='computer'){computerScore+=1}
}

const advanceRound = () => {currentRoundNumber+=1}
//console.log(compareGuesses(3,4,5))
//updateScore('computer')