function getComputerChoice ()
{
    let randomChoiceNO = Math.floor(Math.random()*3);
    if (randomChoiceNO <=0)
    {
        return "rock";
        
    }
    if (randomChoiceNO >0 && randomChoiceNO<=1)
    {
        return "paper";
        

    }
    if(randomChoiceNO >1 && randomChoiceNO <=2)
    {
        return "scissor";
        
    }
    
}

function getUserChoice(userInput)
{
    
    userInput= prompt("enter your choice")
    if (userInput === "rock" || userInput ==="paper" || userInput ==="scissor")
    {
        return userInput;
    }


}



function playRound(PlayerSelection,computerSelection)
{
    if(PlayerSelection === "rock" && computerSelection === "scissor" )
    {
        return(' rock beat scissor');
    }
    if(playerSelection ==="scissor" && computerSelection==="rock")
    {
        return ('computer won!')
    }
    if (PlayerSelection ==="paper" && computerSelection ==="rock")
    {
        return("paper beat rock");
    }
    if ( playerSelection ==="rock" && computerSelection ==="paper")
    {
        return ("computer won!!");
    }
    if (PlayerSelection ==="scissor" && computerSelection === "paper")
    {
        return("scissor beat paper");
    }
    if (playerSelection ==="paper" && computerSelection ===" scissor")
    {
        return("computer won !!!");
    }
    else if (playerSelection === computerSelection)
    {
        return(" match draw");
    }

    
}


    
const playerSelection = getUserChoice();
const computerSelection= getComputerChoice();
console.log(playRound(playerSelection,computerSelection));



  
  
  
  
  