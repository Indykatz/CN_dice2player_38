// Dice game JS

const textArea_1 = document.getElementById("textArea_1");
const player1_text = document.getElementById("player1_text");
const player2_text = document.getElementById("player2_text");
const restart = document.getElementById("restart");
const p1count = document.getElementById("p1_count");
const p1score = document.getElementById("p1_score");
const p2count = document.getElementById("p2_count");
const p2score = document.getElementById("p2_score");

// game var
// let p1gameCount = 0;
let p1gameScore = 0;
let p1diceRoll = 0;

// let p2gameCount = 0;
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
  newGameFunc();
});

// new game function
const newGameFunc = () => {
  p1gameScore = 0;
  p2gameScore = 0;
  player1_text.textContent = "-";
  player2_text.textContent = "-";
  player1_text.textContent = `${p1gameScore}`;
  player2_text.textContent = `${p2gameScore}`;
};

p1_d5.addEventListener("click", () => {
  if (p1gameScore < 21 && p1diceRoll != 1 && player1_text.textContent != `-`) {
    p1rollDiceFunc();
  }
});

p2_d5.addEventListener("click", () => {
  if (p2gameScore < 21 && p2diceRoll != 1 && player2_text.textContent != `-`) {
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
  p1_diceResult();
  if (p1diceRoll == 1) {
    p1oneRolled();
  } else {
    p1logScore();
  }
};

// roll dice function
const p2rollDiceFunc = () => {
  p2diceRoll = p2diceNumber(1, 6);
  p2_diceResult();
  if (p2diceRoll == 1) {
    p2oneRolled();
  } else {
    p2logScore();
  }
};

// oneRolled  function
const p1oneRolled = () => {
  player1_text.textContent = `ROLLED A 1 GAME OVER`;
};

// oneRolled  function
const p2oneRolled = () => {
  player2_text.textContent = `ROLLED A 1 GAME OVER`;
};

// next round function
const p1logScore = () => {
  p1gameScore += p1diceRoll;
  player1_text.textContent = p1gameScore;
  if (p1gameScore > 21) {
    player1_text.textContent = `GAME LOST YOU SCORED ${p1gameScore}`;
  } else {
    if (p1gameScore == 21) {
      player1_text.textContent = `GAME WON YOU SCORED ${p1gameScore}`;
    }
  }
};

// next round function
const p2logScore = () => {
  p2gameScore += p2diceRoll;
  player2_text.textContent = p2gameScore;
  if (p2gameScore > 21) {
    player2_text.textContent = `GAME LOST YOU SCORED ${p2gameScore}`;
  } else {
    if (p2gameScore == 21) {
      player2_text.textContent = `GAME WON YOU SCORED ${p2gameScore}`;
    }
  }
};

// dice faces
// dice face pattern
const p1_df1 = [p1_d5];
const p1_df2 = [p1_d1, p1_d9];
const p1_df3 = [p1_d3, p1_d5, p1_d7];
const p1_df4 = [p1_d1, p1_d3, p1_d7, p1_d9];
const p1_df5 = [p1_d1, p1_d3, p1_d5, p1_d7, p1_d9];
const p1_df6 = [p1_d1, p1_d2, p1_d3, p1_d7, p1_d8, p1_d9];

const p1_diceFaceList = [p1_df1, p1_df2, p1_df3, p1_df4, p1_df5, p1_df6];

const p1_diceResult = () => {
  p1_resetDice();
  let searchFor = p1_diceFaceList[p1diceRoll - 1];
  let dItems = searchFor;
  for (let i = 0; i < dItems.length; i++) {
    console.log(dItems[i]);
    dItems[i].style.backgroundColor = "#fff";
  }
};

const p1_resetDice = () => {
  p1_d1.style.backgroundColor = "#2a5a97";
  p1_d2.style.backgroundColor = "#2a5a97";
  p1_d3.style.backgroundColor = "#2a5a97";
  p1_d5.style.backgroundColor = "#2a5a97";
  p1_d7.style.backgroundColor = "#2a5a97";
  p1_d8.style.backgroundColor = "#2a5a97";
  p1_d9.style.backgroundColor = "#2a5a97";
};

// dice two

const p2_df1 = [p2_d5];
const p2_df2 = [p2_d1, p2_d9];
const p2_df3 = [p2_d3, p2_d5, p2_d7];
const p2_df4 = [p2_d1, p2_d3, p2_d7, p2_d9];
const p2_df5 = [p2_d1, p2_d3, p2_d5, p2_d7, p2_d9];
const p2_df6 = [p2_d1, p2_d2, p2_d3, p2_d7, p2_d8, p2_d9];

const p2_diceFaceList = [p2_df1, p2_df2, p2_df3, p2_df4, p2_df5, p2_df6];

const p2_diceResult = () => {
  p2_resetDice();
  let searchFor = p2_diceFaceList[p2diceRoll - 1];
  let dItems = searchFor;
  for (let i = 0; i < dItems.length; i++) {
    console.log(dItems[i]);
    dItems[i].style.backgroundColor = "#fff";
  }
};

const p2_resetDice = () => {
  p2_d1.style.backgroundColor = "#f49446";
  p2_d2.style.backgroundColor = "#f49446";
  p2_d3.style.backgroundColor = "#f49446";
  p2_d5.style.backgroundColor = "#f49446";
  p2_d7.style.backgroundColor = "#f49446";
  p2_d8.style.backgroundColor = "#f49446";
  p2_d9.style.backgroundColor = "#f49446";
};
