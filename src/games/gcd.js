import { randomInt, gcd } from '../math';
import makeGame from '..';

const rules = 'Enter greatest common divisor of given numbers.';

const makeQuestion = () => {
  const lowerLimit = 1;
  const upperLimit = 30;

  const a = randomInt(lowerLimit, upperLimit);
  const b = randomInt(lowerLimit, upperLimit);

  const problem = `${a} ${b}`;
  const solution = gcd(a, b);

  return { problem, solution: String(solution) };
};

export default makeGame(rules, makeQuestion);
