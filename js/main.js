'use strict';

// mensajes

// ¡Vamos a Jugar!.

// Empate. --Cuando la jugadora introduzca un movimiento que coincida con al movimiento aleatorio se

// ¡Has Ganado!. Cuando la jugadora introduzca un movimiento que gane al movimiento aleatorio

// ¡Has perdido!. Cuando la jugadora introduzca un movimiento que falle al movimiento aleatorio
///////////////////////////////////////////////////////////

/* . Generar un número aleatorio entre 1 y 9 con la ayuda de Math.random y Math.ceil. Puedes usar la
siguiente función, copia estas 3 líneas de código en vuestro JS y no las modifiquéis:

function getRandomNumber(max) {
 return Math.ceil(Math.random() * max);
} */

/////////////////////////////////////////////////////////////////////
/*
. Generar un movimiento aleatorio y para eso puedes seguir las siguientes indicaciones:
si el número aleatorio generado en el paso anterior es menor o igual que 3 el movimiento es
piedra
si el número aleatorio generado es mayor o igual que 7 el movimiento es papel
y sino, el movimiento generado es tijera
. Comparar el movimiento que la jugadora ha seleccionado con el movimiento que ha generado la
computadora y pintar las pistas correspondientes en la pantalla.
*/

console.log('hola :)');

///----------Query Selectors------///

const chooseShape = document.querySelector('.js-choose-shape');
const btnPlay = document.querySelector('.js-btn-play');
const textResult = document.querySelector('.js-text-result');
const userPlayer = document.querySelector('.js-user-player');
const computer = document.querySelector('.js-pc-player');
let userPoints = 0;
let computerPoints = 0;

///----------Funciones----------///
function userChoose() {
  const userChooseValue = userPlayer.value;
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

function userVsPc (){
    if
}

///----------Funciones manejadoras eventos----------///

function handleClickPlay() {
  console.log();
}

///----------Eventos----------///

btnPlay.addEventListener('click', handleClickPlay);
