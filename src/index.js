import './style.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

const lbName = document.querySelector('.lb-name');
const lbScore = document.querySelector('.lb-score');

const scoreAdd = document.querySelector('.score-add');
const scoreRefresh = document.querySelector('.score-refresh');

const addScore = (event) => {
  event.preventDefault();
  const newScore = new Task(lbName.value, lbScore.value);
  Storage.saveTask(newScore);

  UI.addToUI(newTask);
  UI.checkTask();
  UI.buttonTask();
};

const scoreRefresh = (event) => {
  event.preventDefault();

  window.location.reload();
};

scoreAdd.addEventListener('click', addScore);
scoreRefresh.addEventListener('click', scoreRefresh);
