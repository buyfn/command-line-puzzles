import readlineSync from 'readline-sync';

const generateQuestion = () => {
  const upperLimit = 100;
  return Math.round(Math.random() * upperLimit);
};

const getUserInput = message => () => readlineSync.question(`${message} `);

const getAnswer = () => getUserInput('Your answer:')();

const getUsername = () => getUserInput('What\'s your name, buddy?')();

const isCorrect = (userAnswer, predicate, number) =>
  (userAnswer === 'yes' && predicate(number)) ||
  (userAnswer === 'no' && !predicate(number));

const isEven = n => (n % 2 === 0);

const makeGame = player => (goal) => {
  let score = 0;
  let questionNum;
  let userAnswer;

  while (score < goal) {
    questionNum = generateQuestion();
    console.log(`Question: ${questionNum}`);
    userAnswer = getAnswer();

    if (isCorrect(userAnswer, isEven, questionNum)) {
      score += 1;
      console.log('Correcto!');
    } else {
      return `Better luck next time, ${player}.`;
    }
  }

  return `You win, ${player}!`;
};

export { makeGame, getUsername };
