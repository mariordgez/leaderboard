import Score from './score.js';
import ScoreList from './scorelist.js';

export default class Storage {
  static saveList(scoreList) {
    localStorage.setItem('ScoreList', JSON.stringify(scoreList));
  }

  static getList() {
    if (localStorage.getItem('ScoreList') == null) {
      Storage.saveList(new ScoreList());
    }
    const scoreList = Object.assign(
      new ScoreList(),
      JSON.parse(localStorage.getItem('ScoreList')),
    );

    scoreList.setList(
      scoreList.getScores().map((score) => Object.assign(new Score(), score)),
    );

    return scoreList;
  }

  static saveScore(score) {
    const oldList = Storage.getList();
    oldList.addScore(score);
    Storage.saveList(oldList);
  }
}
