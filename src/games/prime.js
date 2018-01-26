import { randomInt, isPrime } from '../math';
import makeGame from '..';

const rules = 'Type "yes" if given number is prime. Type "no" otherwise.';

const makeQuestion = () => {
  const lowerLimit = 1;
  const upperLimit = 100;

  const problem = randomInt(lowerLimit, upperLimit);
  const solution = isPrime(problem) ? 'yes' : 'no';

  return { problem: String(problem), solution };
};

export default makeGame(rules, makeQuestion);
