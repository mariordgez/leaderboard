export default class Storage {
  static getScores = async () => {
    const response = await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/MOPWIcjFvO9yMNxd0RRq/scores/'
    );
    const data = await response.json();
    const result = await data.result;
    return result;
  };

  static postToAPI = async (scoreData) => {
    const response = await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/MOPWIcjFvO9yMNxd0RRq/scores/',
      {
        method: 'POST',
        body: scoreData,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }
    );
    const data = response.json;
    const { result } = data;
    return result;
  };
}
