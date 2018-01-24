export const rules = 'Answer "yes" if the number is even. Answer "no" otherwise.';

export const makeQuestion = () => {
  const randomNum = (upperLimit = 10) =>
    Math.round((Math.random() * upperLimit));

  return randomNum();
};

export const questionToString = question => String(question);

const isEven = n => n % 2 === 0;

const solveQuestion = question => (isEven(question) ? 'yes' : 'no');

export const checkAnswer = question => answer =>
  answer === solveQuestion(question);
