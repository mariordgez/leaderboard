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

document.addEventListener('DOMContentLoaded', Display.displayList());

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
  Storage.postToAPI(
    JSON.stringify({ user: newScore.user, score: newScore.score })
  ).then(() => {
    console.log(JSON.stringify({ user: newScore.user, score: newScore.score }));
    Display.displayList();
  });
};

const refreshScore = (event) => {
  event.preventDefault();
  window.location.reload();
};
// game ID: m0uJU78hgC1wzCRUBfx8
// new game ID: MOPWIcjFvO9yMNxd0RRq
scoreAdd.addEventListener('click', addScore);
scoreRefresh.addEventListener('click', refreshScore);
