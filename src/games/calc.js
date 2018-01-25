import { cons, car, cdr } from 'hexlet-pairs';
import { randomInt } from '../math';
import makeGame from '..';

const rules = 'Enter solution to the math problem.';

const makeQuestion = () => {
  const lowerLimit = 0;
  const upperLimit = 10;
  const opMap = {
    0: cons('+', (x, y) => x + y),
    1: cons('-', (x, y) => x - y),
    2: cons('*', (x, y) => x * y),
  };

  const op = opMap[randomInt(0, 2)];
  const a = randomInt(lowerLimit, upperLimit);
  const b = randomInt(lowerLimit, upperLimit);

  const problem = `${a} ${car(op)} ${b}`;
  const solution = cdr(op)(a, b);

  return { problem, solution: String(solution) };
};

export default makeGame(rules, makeQuestion);
