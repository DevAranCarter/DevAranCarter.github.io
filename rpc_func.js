const rpc = ['rock', 'paper', 'scissors'];

//picks a random string from the rpc array
function computerPlay() {
    let randomNum = Math.floor(Math.random() * 3);

    return rpc[randomNum];


}

//Plays a single round and returns a winner
function singleRound(usr) {

    usr = usr.charAt(0).toUpperCase() + usr.slice(1);

    let compChoice = computerPlay()

    compChoice = compChoice.charAt(0).toUpperCase() + compChoice.slice(1);

    if (usr.toLowerCase() === compChoice.toLowerCase()) {
        return "Its a tie!";
    } else if (usr.toLowerCase() === 'rock' &&
        compChoice.toLowerCase() === 'paper' ||
        usr.toLowerCase() === 'paper' &&
        compChoice.toLowerCase() === 'scissors' ||
        usr.toLowerCase() === 'scissors' &&
        compChoice.toLowerCase() === 'rock'
    ) {
        return `You Lose! ${compChoice} beats ${usr}`;
    } else {
        return `You Win! ${usr} beats ${compChoice}`;
    }
}

//Game is designed to run for 5 rounds and declare a winner at the end
/** function game() {
    usrScore = 0;
    compScore = 0;
    //for loop goes over each round and adds 1 to the winner
    for (let i = 0; i < 5; i++) {
        let round = singleRound();
        if (round.includes("You Win!")) {
            usrScore += 1;
            console.log(round);
        } else if (round.includes("You lose!")) {
            compScore += 1
            console.log(round);
        } else {
            console.log(round);
            continue;
        }
    }
    //Checks who won overall
    if (usrScore === compScore) {
        return "Its a tie!";
    } else if (usrScore > compScore) {
        return "You win!";
    } else {
        return "You loose!";
    }
}
**/

const userscore = document.querySelector('#usr_score');

const compscore = document.querySelector('#robot_score');

const winner = document.querySelector('#winner');

const usrquest = document.querySelector('#usrquest');

const header = document.querySelector("h4");

const rock = document.querySelector('#rock');

const paper = document.querySelector('#paper');

const scissors = document.querySelector('#scissors');

rock.addEventListener('click', function() {
    if (singleRound('rock').includes("You Win!")) {
        if (userscore.value < 5 && compscore.value < 5) {
            userscore.value++;
            winner.textContent = 'You won that round!';
        }
    } else if (singleRound('rock').includes("You Lose!")) {
        if (userscore.value < 5 && compscore.value < 5) {
            compscore.value++;
            winner.textContent = 'Dang! You lost that round';
        }
    } else {
        if (userscore.value < 5 && compscore.value < 5) {
            winner.textContent = 'This round was a tie!';
        }
    }
    winnerfunc();
});


paper.addEventListener('click', function() {
    if (singleRound('paper').includes("You Win!")) {
        if (userscore.value < 5 && compscore.value < 5) {
            userscore.value++;
            winner.textContent = 'You won that round!';
        }
    } else if (singleRound('paper').includes("You Lose!")) {
        if (userscore.value < 5 && compscore.value < 5) {
            compscore.value++;
            winner.textContent = 'Dang! You lost that round';
        }
    } else {
        if (userscore.value < 5 && compscore.value < 5) {
            winner.textContent = 'This round was a tie!';
        }
    }
    winnerfunc();
});



scissors.addEventListener('click', function() {
    if (singleRound('scissors').includes("You Win!")) {
        if (userscore.value < 5 && compscore.value < 5) {
            userscore.value++;
            winner.textContent = 'You won that round!';
        }
    } else if (singleRound('scissors').includes("You Lose!")) {
        if (userscore.value < 5 && compscore.value < 5) {
            compscore.value++;
            winner.textContent = 'Dang! You lost that round';
        }
    } else {
        if (userscore.value < 5 && compscore.value < 5) {
            winner.textContent = 'This round was a tie!';
        }
    }
    winnerfunc();
});

function winnerfunc() {
    if (userscore.value == 5) {
        winner.textContent = "You win!";
        usrquest.textContent = "Play again?"
    } else if (compscore.value == 5) {
        winner.textContent = "Oh no! The computer won!";
        usrquest.textContent = 'Play again?'

    }
}

const playagain = document.querySelector('#playagain');
playagain.addEventListener('click', function() {
    reset();
});

function reset() {
    compscore.value = 0;
    userscore.value = 0;
    winner.textContent = " ";
    usrquest.textContent = " ";
}