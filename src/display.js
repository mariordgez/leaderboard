const leaderboard = document.querySelector('.leaderboard');
export default class Display {
  static addToUI(score) {
    const lbDiv = document.createElement('div');
    lbDiv.classList.add('lb');
    lbDiv.classList.add('lb-li');

    const lbLi = document.createElement('li');
    lbLi.classList.add('lb-item');
    lbLi.innerText = `${score.name}: ${score.score}`;
    lbDiv.appendChild(lbLi);
    leaderboard.appendChild(lbDiv);
  }

  static displayList = (arr) => {
    arr.forEach((score) => {
      Display.addToUI(score);
    });
  };
}
