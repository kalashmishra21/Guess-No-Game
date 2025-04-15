let numberToGuess = localStorage.getItem('numberToGuess') ? parseInt(localStorage.getItem('numberToGuess')) : Math.floor(Math.random() * 100) + 1;
let attempts = localStorage.getItem('attempts') ? parseInt(localStorage.getItem('attempts')) : 0;

updateAttempts();

function updateAttempts() {
  document.getElementById('attempts').textContent = attempts;
  localStorage.setItem('attempts', attempts);
}

function checkGuess() {
  const userGuess = parseInt(document.getElementById('guess').value);
  if (isNaN(userGuess)) {
    document.getElementById('result').textContent = 'Please enter a number!';
    document.getElementById('guess').value = '';
    return;
  }

  if (userGuess < 1 || userGuess > 100) {
    document.getElementById('result').textContent = 'Enter a number between 1 and 100!';
    document.getElementById('guess').value = '';
    return;
  }

  attempts++;
  updateAttempts();

  if (userGuess === numberToGuess) {
    document.getElementById('result').textContent = `Congratulations! You guessed it in ${attempts} attempts!`;
    document.getElementById('hint').textContent = '';
    document.getElementById('guess').disabled = true;
    document.getElementById('submit').disabled = true;
  } else {
    document.getElementById('result').textContent = '';
    document.getElementById('hint').textContent = userGuess < numberToGuess ? 'Too low!' : 'Too high!';
  }

  document.getElementById('guess').value = '';
  localStorage.setItem('numberToGuess', numberToGuess);
}

document.getElementById('submit').addEventListener('click', checkGuess);

document.getElementById('restart').addEventListener('click', () => {
  numberToGuess = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  localStorage.clear();
  updateAttempts();
  document.getElementById('result').textContent = '';
  document.getElementById('hint').textContent = '';
  document.getElementById('guess').disabled = false;
  document.getElementById('submit').disabled = false;
});
