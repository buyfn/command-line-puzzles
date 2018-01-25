import { randomInt, isEven } from '../math';
import makeGame from '../console-game';

const rules = 'Answer "yes" if the number is even. Answer "no" otherwise.';

const makeQuestion = () => {
  const lowerLimit = 0;
  const upperLimit = 100;
  return randomInt(lowerLimit, upperLimit);
};

const questionToString = question => String(question);

const solveQuestion = question => (isEven(question) ? 'yes' : 'no');

export default makeGame(rules, makeQuestion, questionToString, solveQuestion);
