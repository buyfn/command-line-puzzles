import { cons, car, cdr } from 'hexlet-pairs';
import { randomInt, gcd } from '../math';
import makeGame from '../console-game';

const rules = 'Enter greates common divisor of given numbers';

const makeQuestion = () => {
  const lowerLimit = 1;
  const upperLimit = 30;

  const a = randomInt(lowerLimit, upperLimit);
  const b = randomInt(lowerLimit, upperLimit);

  return cons(a, b);
};

const questionToString = question => `${car(question)} ${cdr(question)}`;

const solveQuestion = question => gcd(car(question), cdr(question));

export default makeGame(rules, makeQuestion, questionToString, solveQuestion);
