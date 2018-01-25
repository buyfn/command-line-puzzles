import { randomInt, isEven } from '../math';
import makeGame from '..';

const rules = 'Answer "yes" if the number is even. Answer "no" otherwise.';

const makeQuestion = () => {
  const lowerLimit = 0;
  const upperLimit = 100;

  const problem = randomInt(lowerLimit, upperLimit);
  const solution = n => (isEven(n) ? 'yes' : 'no');

  return { problem: String(problem), solution: solution(problem) };
};

export default makeGame(rules, makeQuestion);
