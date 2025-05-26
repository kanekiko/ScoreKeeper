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