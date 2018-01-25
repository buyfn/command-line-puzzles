import { cons, car, cdr } from 'hexlet-pairs';
import makeGame from '../console-game';

const gcd = (a, b) => {
  const iter = (big, small) => {
    if (small === 0) {
      return big;
    }

    return iter(small, big % small);
  };

  return iter(Math.max(a, b), Math.min(a, b));
};

const rules = 'Enter greates common divisor of given numbers';

const makeQuestion = () => {
  const randomNum = (upperLimit = 20) =>
    Math.round((Math.random() * upperLimit));

  return cons(randomNum(), randomNum());
};

const questionToString = question => `${car(question)} ${cdr(question)}`;

const solveQuestion = question => gcd(car(question), cdr(question));

export default makeGame(rules, makeQuestion, questionToString, solveQuestion);
