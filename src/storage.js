import Score from './score.js';
import ScoreList from './scorelist.js';

export default class Storage {
  // game ID: m0uJU78hgC1wzCRUBfx8
  getScores = async () => {
    const response = await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/m0uJU78hgC1wzCRUBfx8/scores/'
    );
    const data = await response.json();
    const result = await data.result;
    return result;
  };

  postToAPI = async (scoreData) => {
    const response = await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/m0uJU78hgC1wzCRUBfx8/scores/',
      {
        method: 'POST',
        body: scoreData,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }
    );
    const data = await response.json;
    const { result } = data;
    return result;
  };
}
