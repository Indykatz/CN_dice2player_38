// Dice game JS

const textArea_1 = document.getElementById("textArea_1");
const textArea_2 = document.getElementById("textArea_2");

const restart = document.getElementById("restart");

// const player1 = document.getElementById("player1");
// const player2 = document.getElementById("player2");

// const rolldice = document.getElementById("rolldice");
const p1count = document.getElementById("p1_count");
// const p1roll = document.getElementById("p1_roll");
const p1score = document.getElementById("p1_score");
const p2count = document.getElementById("p2_count");
// const p2roll = document.getElementById("p2_roll");
const p2score = document.getElementById("p2_score");

// game var
let p1gameCount = 0;
let p1gameScore = 0;
let p1diceRoll = 0;

let p2gameCount = 0;
let p2gameScore = 0;
let p2diceRoll = 0;

// player 1 dots
// dice dot elements
const p1_d1 = document.getElementById("p1_d1");
const p1_d2 = document.getElementById("p1_d2");
const p1_d3 = document.getElementById("p1_d3");
const p1_d5 = document.getElementById("p1_d5");
const p1_d7 = document.getElementById("p1_d7");
const p1_d8 = document.getElementById("p1_d8");
const p1_d9 = document.getElementById("p1_d9");

// player 2 dots
// dice dot elements
const p2_d1 = document.getElementById("p2_d1");
const p2_d2 = document.getElementById("p2_d2");
const p2_d3 = document.getElementById("p2_d3");
const p2_d5 = document.getElementById("p2_d5");
const p2_d7 = document.getElementById("p2_d7");
const p2_d8 = document.getElementById("p2_d8");
const p2_d9 = document.getElementById("p2_d9");

// event listener for new game
restart.addEventListener("click", () => {
  textArea_2.textContent = "Let's Play";
  newGameFunc();
});

// new game function
const newGameFunc = () => {
  p1gameCount = 0;
  p1gameScore = 0;
  p2gameCount = 0;
  p2gameScore = 0;
  p1count.textContent = p1gameCount;
  p1score.textContent = p1gameScore;
  p2count.textContent = p2gameCount;
  p2score.textContent = p2gameScore;
  textArea_2.textContent = `${p1gameScore} : ${p2gameScore}`;
};

p1_d5.addEventListener("click", () => {
  if (p1gameScore < 21 && p1diceRoll != 1 && p1count.textContent != `-`) {
    p1rollDiceFunc();
  }
});

p2_d5.addEventListener("click", () => {
  if (p2gameScore < 21 && p2diceRoll != 1 && p2count.textContent != `-`) {
    p2rollDiceFunc();
  }
});

// random Dice roll function
const p1diceNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
// random Dice roll function
const p2diceNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// roll dice function
const p1rollDiceFunc = () => {
  p1diceRoll = p1diceNumber(1, 6);
  if (p1diceRoll == 1) {
    p1oneRolled();
  } else {
    p1logScore();
  }
};

// roll dice function
const p2rollDiceFunc = () => {
  p2diceRoll = p2diceNumber(1, 6);
  if (p2diceRoll == 1) {
    p2oneRolled();
  } else {
    p2logScore();
  }
};

// oneRolled  function
const p1oneRolled = () => {
  textArea_2.textContent = `ROLLED A 1 GAME OVER : ${p2gameScore}`;
};

// oneRolled  function
const p2oneRolled = () => {
  player2.textContent = `${p1gameScore} : ROLLED A 1 GAME OVER`;
};

// next round function
const p1logScore = () => {
  p1gameCount += 1;
  p1count.textContent = p1gameCount;
  // p1roll.textContent = p1diceRoll;
  p1gameScore += p1diceRoll;
  p1score.textContent = p1gameScore;
  if (p1gameScore > 21) {
    player1.textContent = `GAME LOST YOU SCORED ${p1gameScore}`;
  } else {
    if (p1gameScore == 21) {
      player1.textContent = `GAME WON YOU SCORED ${p1gameScore}`;
    }
  }
};

// next round function
const p2logScore = () => {
  p2gameCount += 1;
  p2count.textContent = p2gameCount;
  // p2roll.textContent = p2diceRoll;
  p2gameScore += p2diceRoll;
  p2score.textContent = p2gameScore;
  if (p2gameScore > 21) {
    player2.textContent = `GAME LOST YOU SCORED ${p2gameScore}`;
  } else {
    if (p2gameScore == 21) {
      player2.textContent = `GAME WON YOU SCORED ${p2gameScore}`;
    }
  }
};
