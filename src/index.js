import './style.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import Storage from './storage.js';
import Score from './score.js';
import Display from './display.js';

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
  ].forEach((event) => {
    textbox.addEventListener(event, function () {
      if (inputFilter(this.value)) {
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (Object.prototype.hasOwnProperty.call('oldValue')) {
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      } else {
        this.value = '';
      }
    });
  });
};

setInputFilter(lbScore, (value) => /^\d*\.?\d*$/.test(value));

const addScore = (event) => {
  event.preventDefault();
  const newScore = new Score(lbName.value, lbScore.value);
  Storage.postToAPI(
    JSON.stringify({ user: newScore.user, score: newScore.score }),
  ).then(() => {
    Display.displayList();
  });
};

const refreshScore = (event) => {
  event.preventDefault();
  window.location.reload();
};

// new game ID: MOPWIcjFvO9yMNxd0RRq
scoreAdd.addEventListener('click', addScore);
scoreRefresh.addEventListener('click', refreshScore);
