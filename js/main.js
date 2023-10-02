'use strict';

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
    paintHTML('¡Has Ganado!');
    userPoints++;
  } else if (userChoose === 'rock' && pcChoose === 'scissor') {
    paintHTML('¡Has Ganado!');
    userPoints++;
  } else if (userChoose === 'paper' && pcChoose === 'rock') {
    paintHTML('¡Has Ganado!');
    userPoints++;
  } else if (userChoose === pcChoose) {
    paintHTML('Empate');
  } else {
    paintHTML('¡Has perdido!');
    computerPoints++;
  }
}

function paintHTML(message) {
  textResult.innerHTML = message;
}

function showPoints() {
  userPlayer.innerHTML = userPoints;
  computerPlayer.innerHTML = computerPoints;
}

function endGame() {
  games++;
  if (games >= 10) {
    btnPlay.classList.add('hidden');
    btnReset.classList.remove('hidden');
  }
}

///----------Funciones manejadoras eventos----------///

function handleClickPlay(event) {
  event.preventDefault();
  const userChoice = userChoose();
  const pcChoice = pcChoose();
  userVsPc(userChoice, pcChoice);
  showPoints();
  endGame();
}

function handleClickReset(event) {
  event.preventDefault();
  btnPlay.classList.remove('hidden');
  btnReset.classList.add('hidden');
  paintHTML('Vamos a jugar');
  userPoints = 0;
  computerPoints = 0;
  games = 0;
  showPoints();
  endGame();
}
///----------Eventos----------///

btnPlay.addEventListener('click', handleClickPlay);

btnReset.addEventListener('click', handleClickReset);
