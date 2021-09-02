import './style.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import Storage from './storage.js';
import Score from './score.js';
import Display from './display';

const lbName = document.querySelector('.lb-name');
const lbScore = document.querySelector('.lb-score');

const scoreAdd = document.querySelector('.score-add');
const scoreRefresh = document.querySelector('.score-refresh');

document.addEventListener(
  'DOMContentLoaded',
  Display.displayList(Storage.getList().list)
);

const addScore = (event) => {
  event.preventDefault();
  const newScore = new Score(lbName.value, lbScore.value);
  Storage.saveScore(newScore);

  Display.addToUI(newScore);
};

const refreshScore = (event) => {
  event.preventDefault();

  window.location.reload();
};

scoreAdd.addEventListener('click', addScore);
scoreRefresh.addEventListener('click', refreshScore);
