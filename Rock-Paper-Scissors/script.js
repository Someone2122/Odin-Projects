// 1.Rock 2.Paper 3.Scissors
// 1 > 3
// 2 > 1
// 3 > 2

let humanPoints = 0; // Tracks human score
let botPoints = 0; // Tracks bot score

function computer() {
    return Math.floor(Math.random() * 3 + 1);
}

function user() {
    const choice = prompt("Enter 1 for Rock, 2 for Paper, or 3 for Scissors");
    return parseInt(choice); // Ensure input is treated as a number
}

function getWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        alert(`TIE human ${humanPoints} bot ${botPoints}`);
    } else if (
        (userChoice === 1 && computerChoice === 2) ||
        (userChoice === 2 && computerChoice === 3) ||
        (userChoice === 3 && computerChoice === 1)
    ) {
        alert(`COMPUTER WINS human ${humanPoints} bot ${botPoints}`);
        botPoints++; // Increment bot score
    } else {
        alert(`HUMAN WINS human ${humanPoints} bot ${botPoints}`);
        humanPoints++; // Increment human score
    }
}

function resetGame() {
    humanPoints = 0;
    botPoints = 0;
    alert("Game Reset! Let's play again.");
}

// Main Game Loop
while (humanPoints < 5 && botPoints < 5) {
    const human = user();
    const pc = computer();

    getWinner(human, pc);

    alert(`Human: ${humanPoints}, Bot: ${botPoints}`);
}

// Check for game over
if (humanPoints === 5) {
    alert(`HUMAN WINS THE GAME! human ${humanPoints} bot ${botPoints}`);
} else if (botPoints === 5) {
    alert("BOT WINS THE GAME!" `human ${humanPoints} bot ${botPoints}`);
}

