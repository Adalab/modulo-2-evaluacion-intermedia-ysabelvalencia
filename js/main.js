'use strict';

console.log('hola :)');

///----------Query Selectors------///

const chooseShape = document.querySelector('.js-choose-shape');
const btnPlay = document.querySelector('.js-btn-play');
const btnReset = document.querySelector('.js-btn-reset');
const textResult = document.querySelector('.js-text-result');
const userPlayer = document.querySelector('.js-user-player');
const computerPlayer = document.querySelector('.js-pc-player');
let userPoints = 0;
let computerPoints = 0;
let games = 0;

///----------Funciones----------///
function userChoose() {
  const userChooseValue = chooseShape.value;
  return userChooseValue;
}

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function pcChoose() {
  const randomNumber = getRandomNumber(9);
  let pcChooseValue = '';

  if (randomNumber <= 3) {
    pcChooseValue = 'rock';
  } else if (randomNumber >= 7) {
    pcChooseValue = 'paper';
  } else {
    pcChooseValue = 'scissor';
  }

  return pcChooseValue;
  console.log(randomNumber);
}

function userVsPc(userChoose, pcChoose) {
  if (userChoose === 'scissor' && pcChoose === 'paper') {
    textResult.innerHTML = '¡Has Ganado!';
    userPoints++;
  } else if (userChoose === 'rock' && pcChoose === 'scissor') {
    textResult.innerHTML = '¡Has Ganado!';
    userPoints++;
  } else if (userChoose === 'paper' && pcChoose === 'rock') {
    textResult.innerHTML = '¡Has Ganado!';
    userPoints++;
  } else if (userChoose === pcChoose) {
    textResult.innerHTML = 'Empate';
  } else {
    textResult.innerHTML = 'Perdiste';
    computerPoints++;
  }
}

function showPoints() {
  userPlayer.innerHTML = userPoints;
  computerPlayer.innerHTML = computerPoints;
}

function endGame() {
  games++;
  if (games === 10) {
    btnPlay.classList.add('hidden');
    btnReset.classList.remove('hidden');
  }
}

///----------Funciones manejadoras eventos----------///

function handleClickPlay() {
  const userChoice = userChoose();
  const pcChoice = pcChoose();
  userVsPc(userChoice, pcChoice);
  showPoints();
  endGame();
}

console.log();

///----------Eventos----------///

btnPlay.addEventListener('click', handleClickPlay);

// btnReset.addEventListener('click', handleClickReset);
