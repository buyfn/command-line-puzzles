import makeGame from '../console-game';

const rules = 'Answer "yes" if the number is even. Answer "no" otherwise.';

const makeQuestion = () => {
  const randomNum = (upperLimit = 10) =>
    Math.round((Math.random() * upperLimit));

  return randomNum();
};

const questionToString = question => String(question);

const isEven = n => n % 2 === 0;

const solveQuestion = question => (isEven(question) ? 'yes' : 'no');

export default makeGame(rules, makeQuestion, questionToString, solveQuestion);
