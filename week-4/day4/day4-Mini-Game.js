// Instructions:
// Create the “Hangman” game. Your game will run in the console.
// You need to guess a hidden word. Each letter you guess will appear in the console. You have 10 chances before you lose the game.

// Check it out here

// Prompt player 1 for a word. The word must have a minimum of 8 letters. Present the word in the console with stars (********).
// At this point continuously prompt player 2 for a letter.
// If the letter is in the word chosen by player 1, display the word in stars again but with the correct letter (*****t**).
// If the letter appears in the word multiple times, make sure it is seen in all the correct places when showing the stars with the correct guesses (***t**t*).
// If player 2 guesses incorrectly 10 times display a message in the console saying YOU LOSE.
// Show a list of all the guesses after each turn. In your code prevent player 2 from guessing the same letter twice.
// If player 1 wins, display a message that says CONGRATS YOU WIN.


function Hangman() {
    let playerWord = Array.from(prompt('Enter the word with minimum 8 letters').toLowerCase());

    while (playerWord.length < 8 || playerWord.includes(" ")) {
        playerWord = Array.from(prompt('Your word must be without spaces and at least 8 letters :').toLowerCase())
    }

    let starWord = Array.from('*'.repeat(playerWord.length))
    let guesses = 10;
    let guessWord;
    let textLose = () => console.log("YOU LOSE");
    let textWin = () =>console.log("YOU WIN !")

    while (guesses > 0 && starWord.toString() !== playerWord.toString()) {
        guessWord = prompt('Guess the letter').toLowerCase();

        if (playerWord.includes(guessWord)) {
            playerWord.forEach((word, index) => {
                word === guessWord ? starWord[index] = guessWord : starWord; 
            })

        } else {
            guesses--;
            console.log(guesses)
        }
        console.log(starWord.toString())
    }
    
    !starWord.includes('*')? textWin() : textLose() ;
}

Hangman()