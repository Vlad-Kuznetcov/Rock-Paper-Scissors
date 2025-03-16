const stats = {
  Wins: 0,
  Losses: 0,
  Ties: 0,
};

function resetStats() {
  stats.Losses = 0;
  stats.Ties = 0;
  stats.Wins = 0;
  updateStats("Wins: 0, Losses: 0, Ties: 0");
  renderChoices("No move", "No move", "");
}

function updateStats() {
  const gameStats = document.getElementById("game-stats");
  gameStats.textContent = `Wins: ${stats.Wins}, Losses: ${stats.Losses}, Ties: ${stats.Ties}`;
}

function renderChoices(playerChoice, computerChoice, result) {
  const choices = document.getElementById("choices");
  choices.textContent = `You chose: ${playerChoice}. Computer's choice: ${computerChoice}. ${result}`;
}

function compWay(playerChoice) {
  const choice = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * choice.length);
  const computerChoice = choice[randomIndex];

  renderChoices(playerChoice, computerChoice);

  let result = "";
  if (playerChoice === computerChoice) {
    stats.Ties += 1;
    result = "It's a tie!";
  } else if (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Scissors" && computerChoice === "Paper") ||
    (playerChoice === "Paper" && computerChoice === "Rock")
  ) {
    stats.Wins += 1;
    result = "You win!";
  } else {
    stats.Losses += 1;
    result = "You lose!";
  }
  renderChoices(playerChoice, computerChoice, result);
  updateStats();
}
