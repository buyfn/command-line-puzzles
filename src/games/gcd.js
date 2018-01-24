import { cons, car, cdr } from 'hexlet-pairs';

const gcd = (a, b) => {
  const iter = (big, small) => {
    if (small === 0) {
      return big;
    }

    return iter(small, big % small);
  };

  return iter(Math.max(a, b), Math.min(a, b));
};

export const rules = 'Enter greates common divisor of given numbers';

export const makeQuestion = () => {
  const randomNum = (upperLimit = 20) =>
    Math.round((Math.random() * upperLimit));

  return cons(randomNum(), randomNum());
};

export const questionToString = question => `${car(question)} ${cdr(question)}`;

const solveQuestion = question => gcd(car(question), cdr(question));

export const checkAnswer = question => answer =>
  answer === String(solveQuestion(question));
