import { cons, car, cdr } from 'hexlet-pairs';

export const rules = 'Enter solution to the math problem.';

export const makeQuestion = () => {
  const randomNum = (upperLimit = 10) =>
    Math.round((Math.random() * upperLimit));

  let op;

  const randomOp = Math.floor(Math.random() * 3);
  switch (randomOp) {
    case 0:
      op = '+';
      break;
    case 1:
      op = '-';
      break;
    default:
      op = '*';
  }

  return cons(op, cons(randomNum(), randomNum()));
};

export const questionToString = question =>
  `${car(cdr(question))} ${car(question)} ${cdr(cdr(question))}`;

const solveQuestion = (question) => {
  const op = car(question);
  const a = car(cdr(question));
  const b = cdr(cdr(question));
  let res;

  switch (op) {
    case '+':
      res = a + b;
      break;
    case '-':
      res = a - b;
      break;
    default:
      res = a * b;
  }

  return res;
};

export const checkAnswer = question => answer =>
  answer === String(solveQuestion(question));

