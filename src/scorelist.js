export default class ScoreList {
  constructor() {
    this.list = [];
  }

  addScore(score) {
    this.list.push(score);
  }

  setList(list) {
    this.list = list;
    return this.list;
  }

  getScores() {
    return this.list;
  }
}
