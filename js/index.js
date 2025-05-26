"use strict"

const boutonIncrementUn = document.querySelector(".btn-inc-1");
const boutonIncrementDeux = document.querySelector(".btn-inc-2");
const scoreUn = document.querySelector(".score-1");
const scoreDeux = document.querySelector(".score-2");
const boutonReinitialiser = document.querySelector(".btn-reset");
const saisieCible = document.querySelector("#cible");

let currentScoreOne = 0;
let currentScoreTwo = 0;
let targetScore = 7;
let isGameOver = false;

const updateScoreDisplay = () => {
  scoreUn.textContent = currentScoreOne;
  scoreDeux.textContent = currentScoreTwo;
};

const disableButtons = (winnerDisplay, loserDisplay) => {
  boutonIncrementUn.classList.add("disabled");
  boutonIncrementDeux.classList.add("disabled");
  winnerDisplay.classList.add("gagnant");
  loserDisplay.classList.add("perdant");
  isGameOver = true;
};

const enableButtons = () => {
  boutonIncrementUn.classList.remove("disabled");
  boutonIncrementDeux.classList.remove("disabled");
  scoreUn.classList.remove("gagnant");
  scoreDeux.classList.remove("perdant");
  scoreUn.classList.remove("perdant");
  scoreDeux.classList.remove("gagnant");
  isGameOver = false;
};