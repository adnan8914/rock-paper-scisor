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


function playRound(PlayerSelection,computerSelection)
{
    if(PlayerSelection === "rock" && computerSelection === "paper")
    {
        return(' paper beat rock');
    }
    else if(PlayerSelection ==="paper" && computerSelection ===" scissor")
    {
        return("scissor beat paper");
    }
    else(PlayerSelection ==="scissor" && computerSelection === " rock")
    {
        return("rock beat scissor");
    }

}
  
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection))
  
  
  
  
  
  