import { randomInt } from '../math';
import makeGame from '..';

const rules = `Balance a number. To be balanced, a number must:
1. Not have difference between any two digits greater than 1;
2. Not have a smaller digit follow a larger digit.`;

const isBalanced = (n) => {
  const digits = n.split('');
  digits.sort();
  return (digits[digits.length - 1] - digits[0] <= 1) &&
    (n === digits.join(''));
};

const balance = (n) => {
  const digits = n.split('');
  if (isBalanced(n)) {
    return n;
  }

  digits.sort();
  digits[0] = parseInt(digits[0], 10) + 1;
  digits[digits.length - 1] = parseInt(digits[digits.length - 1], 10) - 1;
  digits.sort();
  return balance(digits.join(''));
};

const makeQuestion = () => {
  const lowerLimit = 10;
  const upperLimit = 9999;

  const problem = String(randomInt(lowerLimit, upperLimit));
  const solution = balance(problem);

  return { problem, solution };
};

export default makeGame(rules, makeQuestion);
