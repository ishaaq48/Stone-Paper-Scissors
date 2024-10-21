let userScore = 0;
let compScore = 0;
let user = document.querySelector("#user-score");
let comp = document.querySelector("#comp-score");
let winner = document.querySelector("#msg");
let reset = document.querySelector("#reset-game");
let paper = document.querySelector("#paper");
let rock = document.querySelector("#rock");
let scissors = document.querySelector("#scissors");
const choices = document.querySelectorAll(".choice");
let paperFlag = true;
const genCompChoice = () => {
    const options = ["rock","paper","scissors"];

    const randomIndex = Math.floor(Math.random() * options.length);

    return options[randomIndex];
}
reset.onclick = () =>
{
    user.innerText = 0;
    comp.innerText = 0;
    userScore = 0;
    compScore = 0;
    winner.innerText = "Play your move";
    winner.style.backgroundColor = "#081b31";
}

const playGame = (userChoice) => {
    
    const compChoice = genCompChoice();
    if(userChoice === "rock" && compChoice === "paper")
    {
        comp.innerText = ++compScore;
        msg.innerText = `Winner ${compChoice}`;
        paper.style.opacity = 0.5;
        paper.style.transitionDuration = "2s";
        // setTimeout is what to do after few seconds
        setTimeout(() => {
            paper.style.opacity = 1;
            }, 1000);
    }
    else if(userChoice === "rock" && compChoice === "scissors")
        {
            user.innerText = ++userScore;
            msg.innerText = `Winner ${userChoice}`;
        }
    else if(userChoice === "rock" && compChoice === "rock")
        {
            msg.innerText = "Draw!";
        }
    else if(userChoice === "paper" && compChoice === "rock")
        {
            user.innerText = ++userScore;
            msg.innerText = `Winner ${userChoice}`;
            
        }
    else if(userChoice === "paper" && compChoice === "scissors")
        {
            comp.innerText = ++compScore;
            msg.innerText = `Winner ${compChoice}`;
            scissors.style.opacity = 0.5;
            scissors.style.transitionDuration = "2s";
        // setTimeout is what to do after few seconds
        setTimeout(() => {
            scissors.style.opacity = 1;
            }, 1000);
        }
    else if(userChoice === "paper" && compChoice === "paper")
        {                
            msg.innerText = "Draw!";
         
        }
    else if(userChoice === "scissors" && compChoice === "rock")
        {
            comp.innerText = ++compScore;
            msg.innerText = `Winner ${compChoice}`;
            rock.style.opacity = 0.5;
            // transition effect
            rock.style.transitionDuration = "2s";
        // setTimeout is what to do after few seconds
        setTimeout(() => {
            rock.style.opacity = 1;
            }, 2000);
        }
    else if(userChoice === "scissors" && compChoice === "paper")
        {
            user.innerText = ++userScore;
            msg.innerText = `Winner ${userChoice}`;
        }
    else if(userChoice === "scissors" && compChoice === "scissors")
        {                
            msg.innerText = "Draw!";         
        }
    if(msg.innerText === "Draw!")
    {
        msg.style.backgroundColor ="red";
        msg.style.transitionDuration = "2s";
    }
    else
    {
        msg.style.backgroundColor ="green";
        msg.style.transitionDuration = "2s";
    }
    
    
    
}


// looping inside each choices (R - P - S)
choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});



