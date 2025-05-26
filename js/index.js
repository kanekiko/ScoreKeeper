"use strict"
window.addEventListener('load', () => {
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

  const resetGame = () => {
    currentScoreOne = 0;
    currentScoreTwo = 0;
    updateScoreDisplay();
    enableButtons();
    saisieCible.value = "7";
    targetScore = 7;
  };

  boutonIncrementUn.addEventListener('click', function () {
    if (!isGameOver && targetScore > 0) {
      currentScoreOne++;
      updateScoreDisplay();
      if (currentScoreOne === targetScore) {
        disableButtons(scoreUn, scoreDeux);
      }
    }
  });

  boutonIncrementDeux.addEventListener('click', function () {
    if (!isGameOver && targetScore > 0) {
      currentScoreTwo++;
      updateScoreDisplay();
      if (currentScoreTwo === targetScore) {
        disableButtons(scoreDeux, scoreUn);
      }
    }
  });
  boutonReinitialiser.addEventListener('click', resetGame);

  updateScoreDisplay();

  const initialTargetValue = parseInt(saisieCible.value);
  if (!isNaN(initialTargetValue) && initialTargetValue > 0) {
    targetScore = initialTargetValue;
  } else {
    saisieCible.value = "7";
    targetScore = 7;
  }
})
