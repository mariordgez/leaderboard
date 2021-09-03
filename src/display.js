import Storage from './storage.js';

const leaderboard = document.querySelector('.leaderboard');
export default class Display {
  static addToUI(score) {
    const lbDiv = document.createElement('div');
    lbDiv.classList.add('lb');
    lbDiv.classList.add('lb-li');

    const lbLi = document.createElement('li');
    lbLi.classList.add('lb-item');
    lbLi.innerText = `${score.user}: ${score.score}`;
    lbDiv.appendChild(lbLi);
    leaderboard.appendChild(lbDiv);
  }

  static clearList() {
    leaderboard.innerHTML = '';
  }

  static displayList = async () => {
    Display.clearList();
    const arr = await Storage.getScores();
    arr.forEach((score) => {
      Display.addToUI(score);
    });
  };
}
