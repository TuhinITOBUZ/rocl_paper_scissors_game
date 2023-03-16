let player = "";
let computer = "";
let playerScore = 0;
let computerScore = 0;
let rounds = 0;
let roundsPlayed = 0;
let options = ["rock", "paper", "scissors"];

function gameLogic(player, computer) {
  if (
    (player === "rock" && computer === "paper") ||
    (player === "paper" && computer === "scissors") ||
    (player === "scissors" && computer === "rock")
  ) {
    computerScore += 1;
  } else if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    playerScore += 1;
  }
  roundsPlayed += 1;
}

function setValues(computer) {
  document.getElementById("computer").src = `./images/${computer}.svg`;
  document.getElementById("player-score").textContent = playerScore;
  document.getElementById("computer-score").textContent = computerScore;
  if (roundsPlayed == rounds) {
    if (playerScore > computerScore) {
      document.getElementById("result").innerHTML = "Player Won";
    } else if (playerScore < computerScore) {
      document.getElementById("result").innerHTML = "Computer Won";
    } else {
      document.getElementById("result").innerHTML = "It's a Draw";
    }
  }
}

// on enter key
document.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    rounds = document.getElementById("rounds").value;
    document.getElementById("rounds").value = null;
  }
});

document.querySelector("#paper").addEventListener("click", () => {
  if (rounds > 0) {
    if (roundsPlayed < rounds) {
      player = "paper";
      computer = options[Math.floor(Math.random() * options.length)];
      gameLogic(player, computer);
      document.getElementById("player").src = `./images/paper.svg`;
      setValues(computer);
    } else {
      alert("Game over. Please reset!");
    }
  }
});

document.querySelector("#rock").addEventListener("click", () => {
  if (rounds > 0) {
    if (roundsPlayed < rounds) {
      player = "rock";
      computer = options[Math.floor(Math.random() * options.length)];
      gameLogic(player, computer);
      document.getElementById("player").src = `./images/rock.svg`;
      setValues(computer);
    } else {
      alert("Game over. Please reset!");
    }
  }
});

document.querySelector("#scissors").addEventListener("click", () => {
  if (rounds > 0) {
    if (roundsPlayed < rounds) {
      player = "scissors";
      computer = options[Math.floor(Math.random() * options.length)];
      gameLogic(player, computer);
      document.getElementById("player").src = `./images/scissors.svg`;
      setValues(computer);
    } else {
      alert("Game over. Please reset!");
    }
  }

});

document.getElementById("reset-button").addEventListener("click", () => {
  player = "";
  computer = "";
  playerScore = 0;
  computerScore = 0;
  roundsPlayed = 0;
  rounds = 0;
  document.getElementById("player-score").textContent = playerScore;
  document.getElementById("computer-score").textContent = computerScore;
  document.getElementById("result").innerHTML = "";
  document.getElementById("player").src = `./images/hand.svg`;
  document.getElementById("computer").src = `./images/hand.svg`;
});
