let userScore = 0;
let computerScore = 0;
let userScore_span = document.getElementById("user-score");
let computerScore_span = document.getElementById("computer-score");
let result_p = document.querySelector(".result > p");

const scoreBoard_div = document.querySelector(".score-board");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function getComputerChoice() {
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if( letter === "r") {
        return "Rock";
    } else if ( letter === "s"){
        return "Scissors";
    } else {
        return "Paper";
    }
}

function win(user, computer) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;

    const smallUserWord = "user".fontsize(3);
    const smallCompWord = "comp".fontsize(3);
    result_p.innerHTML = `${convertToWord(user)}${smallUserWord} beats ${convertToWord(computer)}${smallCompWord}. You Win!"`;
    document.getElementById(user).classList.add("green-glow");
    setTimeout(() => document.getElementById(user).classList.remove("green-glow"), 300);
}

function lose(user, computer) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;

    const smallUserWord = "user".fontsize(3);
    const smallCompWord = "comp".fontsize(3);
    result_p.innerHTML = `${convertToWord(user)}${smallUserWord} loses to ${convertToWord(computer)}${smallCompWord}. You Lost!"`;
    document.getElementById(user).classList.add("red-glow");
    setTimeout(() => document.getElementById(user).classList.remove("red-glow"), 300);
}

function draw(user, computer) {
    const smallUserWord = "user".fontsize(3);
    const smallCompWord = "comp".fontsize(3);
    result_p.innerHTML = `${convertToWord(user)}${smallUserWord} equals ${convertToWord(computer)}${smallCompWord}. It's a Draw!"`;
    document.getElementById(user).classList.add("gray-glow");
    setTimeout(() => document.getElementById(user).classList.remove("gray-glow"), 300);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', () => game("r"));

    paper_div.addEventListener('click', () => game("p"));

    scissors_div.addEventListener('click', () => game("s"));
}

main();