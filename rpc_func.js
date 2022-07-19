const rpc = ['rock', 'paper', 'scissors'];

//picks a random string from the rpc array
function computerPlay() {
    let randomNum = Math.floor(Math.random() * 3);

    return rpc[randomNum];


}

//Plays a single round and returns a winner
function singleRound() {
    let usr = prompt("Choose from rock, paper or scissors");

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
        return `You lose! ${compChoice} beats ${usr}`;
    } else {
        return `You Win! ${usr} beats ${compChoice}`;
    }
}

//Game is designed to run for 5 rounds and declare a winner at the end
function game() {
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