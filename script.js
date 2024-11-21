let numberToGuess = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.getElementById('submit').addEventListener('click', checkGuess);

function checkGuess() {
    let userGuess = parseInt(document.getElementById('guess').value);
    attempts++;

    document.getElementById('attempts').innerHTML = attempts;

    if (isNaN(userGuess)) {
        document.getElementById('result').innerHTML = 'Please enter a number!';
        document.getElementById('guess').value = '';
    } else if (userGuess < 1 || userGuess > 100) {
        document.getElementById('result').innerHTML = 'Please enter a number between 1 and 100!';
        document.getElementById('guess').value = '';
    } else if (userGuess === numberToGuess) {
        document.getElementById('result').innerHTML = `Congratulations! You guessed the number in ${attempts} attempts!`;
        document.getElementById('hint').innerHTML = '';
        document.getElementById('guess').disabled = true;
        document.getElementById('submit').disabled = true;
    } else {
        let hint = userGuess < numberToGuess ? 'Too low!' : 'Too high!';
        document.getElementById('result').innerHTML = '';
        document.getElementById('hint').innerHTML = hint;
        document.getElementById('guess').value = '';
    }
}
