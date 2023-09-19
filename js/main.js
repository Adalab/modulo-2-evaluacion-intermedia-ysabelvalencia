'use strict';

console.log('hola :)');

///----------Query Selectors------///

const chooseShape = document.querySelector('.js-choose-shape');
const btnPlay = document.querySelector('.js-btn-play');
const textResult = document.querySelector('.js-text-result');
// const userPlayer = document.querySelector('.js-user-player');
// const computer = document.querySelector('.js-pc-player');
// let userPoints = 0;
// let computerPoints = 0;

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
}

function userVsPc(userChoose, pcChoose) {
  if (userChoose === 'scissor' && pcChoose === 'paper') {
    textResult.innerHTML = '¡Has Ganado!';
  } else if (userChoose === 'rock' && pcChoose === 'scissor') {
    textResult.innerHTML = '¡Has Ganado!';
  } else if (userChoose === 'paper' && pcChoose === 'rock') {
    textResult.innerHTML = '¡Has Ganado!';
  } else if (userChoose === pcChoose) {
    textResult.innerHTML = 'Empate';
  } else {
    textResult.innerHTML = 'Perdiste';
  }
}

///----------Funciones manejadoras eventos----------///

function handleClickPlay() {
  userChoose();
  pcChoose();
  userVsPc(userChoose, pcChoose);
}

///----------Eventos----------///

btnPlay.addEventListener('click', handleClickPlay);
