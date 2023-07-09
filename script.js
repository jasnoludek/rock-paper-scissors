// Function to get a random choice for the computer from the available options
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to play a round of the game and determine the result
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'Tie!';
    }  else if (
       (playerSelection === 'rock' && computerSelection === 'scissors') ||
       (playerSelection === 'paper' && computerSelection === 'rock') ||
       (playerSelection === 'scissors' && computerSelection === 'paper')
    )  {
       return 'You win! ' + playerSelection + ' beats ' + computerSelection + '.';
    }  else if (
       (playerSelection === 'rock' && computerSelection === 'paper') ||
       (playerSelection === 'paper' && computerSelection === 'scissors') ||
       (playerSelection === 'scissors' && computerSelection === 'rock')
    )  {
       return 'You lose! ' + computerSelection + ' beats ' + playerSelection + '.';
    }  else {
       return 'Invalid entry. Please choose rock, paper or scissors.';
    }   
}

let playerScore = 0;
let computerScore = 0;

// Function to start and play the game
function game() {   
    while (playerScore < 5 && computerScore < 5) {
        const playerSelection = prompt('Choose paper, rock or scissors:').toLowerCase();
        const computerSelection = getComputerChoice();

        console.log(playerSelection);
        console.log(computerSelection);
    
        const roundResult = playRound(playerSelection, computerSelection);
        console.log(roundResult);

        if (roundResult.includes('win')) {
            playerScore++;
        }  else if (roundResult.includes('lose')) {
            computerScore++;
        }  

        console.log('Player:', playerScore);
        console.log('Computer:', computerScore);
    }  

    endGame();
}

// Function to end the game and provide the result
function endGame() {
    if (playerScore === 5) {
        console.log('Congratulations! You won!');
    }  else if (computerScore === 5) {
        console.log('Sorry, you lost.');
    }

    // Function to restart the game and reset scores
    const restartGame = () => {
        playerScore = 0;
        computerScore = 0;
        game();
    }

    const restart = confirm('Do you want to restart the game?');
    if (restart) {
        restartGame();
    } else {
        console.log('Game over.');
    }
}

// Start the game
game();






