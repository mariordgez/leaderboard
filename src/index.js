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
const getgame = () => {
  fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Marios game',
      }),
    }
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => console.log(data))
    .catch((error) => console.log('ERROR'));
};

const setInputFilter = (textbox, inputFilter) => {
  [
    'input',
    'keydown',
    'keyup',
    'mousedown',
    'mouseup',
    'select',
    'contextmenu',
    'drop',
  ].forEach(function (event) {
    textbox.addEventListener(event, function () {
      if (inputFilter(this.value)) {
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty('oldValue')) {
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      } else {
        this.value = '';
      }
    });
  });
};

setInputFilter(lbScore, function (value) {
  return /^\d*\.?\d*$/.test(value); // Allow digits and '.' only, using a RegExp
});

const addScore = (event) => {
  event.preventDefault();
  const newScore = new Score(lbName.value, lbScore.value);
  Storage.saveScore(newScore);
  getgame();

  Display.addToUI(newScore);
};

const refreshScore = (event) => {
  event.preventDefault();

  window.location.reload();
};

scoreAdd.addEventListener('click', addScore);
scoreRefresh.addEventListener('click', refreshScore);
