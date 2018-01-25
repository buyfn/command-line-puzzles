import { cons, car, cdr } from 'hexlet-pairs';
import { randomInt } from '../math';
import makeGame from '../console-game';

const rules = 'Enter solution to the math problem.';

const makeQuestion = () => {
  const lowerLimit = 0;
  const upperLimit = 10;
  const opcodes = {
    0: '+',
    1: '-',
    2: '*',
  };

  const op = opcodes[randomInt(0, 2)];
  const a = randomInt(lowerLimit, upperLimit);
  const b = randomInt(lowerLimit, upperLimit);

  return cons(op, cons(a, b));
};

const questionToString = question =>
  `${car(cdr(question))} ${car(question)} ${cdr(cdr(question))}`;

const solveQuestion = (question) => {
  const op = car(question);
  const a = car(cdr(question));
  const b = cdr(cdr(question));
  const mapping = {
    '+': (x, y) => x + y,
    '-': (x, y) => x - y,
    '*': (x, y) => x * y,
  };

  return mapping[op](a, b);
};

export default makeGame(rules, makeQuestion, questionToString, solveQuestion);
