import readlineSync from 'readline-sync';

const getUserInput = message => () => readlineSync.question(`${message} `);

const getAnswer = () => getUserInput('Your answer:')();

const getUsername = () => getUserInput('What\'s your name, buddy?')();

const isCorrect = (userAnswer, checker) => checker(userAnswer);

const makeGame = (makeQuestion, questionToString, checkAnswer, goal = 3) => () => {
  console.log('Welcome to the Brain Games!');
  const player = getUsername();
  let score = 0;
  let question;
  let userAnswer;

  while (score < goal) {
    question = makeQuestion();
    console.log(`Question: ${questionToString(question)}`);
    userAnswer = getAnswer();

    if (isCorrect(userAnswer, checkAnswer(question))) {
      score += 1;
      console.log('Correcto!');
    } else {
      return `Better luck next time, ${player}.`;
    }
  }

  return `You win, ${player}!`;
};

export default makeGame;
