let userScore=0;
let compScore=0;


const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara =document.querySelector("#user-score");
const compScorePara =document.querySelector("#comp-score");

const genComputerChoice =() =>{
    const options=["rock","paper", "scissors"];
    //rock,paper,scissors
    const randomIndex=Math.floor(Math.random() *3);
    return options[randomIndex];

}

const drawGame=() =>
{
    msg.innerText ="Game was Draw. Try again!"
    msg.style.backgroundColor ="#081b31"

}

const showWinner =(userWin , UserChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText =`You win , Your ${UserChoice} beats ${compChoice}`;
        msg.style.backgroundColor ="green"
    }else{
        compScore++;
        compScorePara.innerText=compScore
        msg.innerText=`You lost, ${compChoice} beats your ${UserChoice}`;
        msg.style.backgroundColor ="red"
    }
}
const playGame =(UserChoice) =>{
//generatecomputer choice
const compChoice=genComputerChoice();

if(UserChoice === compChoice){
//Draw game
drawGame();
}else{
    let userWin =true;
    if(UserChoice === "rock"){
        userWin =compChoice === "paper" ? false: true;
    }else if(UserChoice ==="paper"){
        userWin=compChoice === "scissors" ? false:true
    }else{
        userWin=compChoice === "rock" ? false :true;
    }
    showWinner(userWin ,UserChoice,compChoice);
}

}


choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const UserChoice=choice.getAttribute("id")
        playGame(UserChoice);
    })
});