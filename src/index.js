import readlineSync from 'readline-sync';

const getUserInput = message => () => readlineSync.question(`${message} `);

const getAnswer = () => getUserInput('Your answer:')();

const getUsername = () => getUserInput('What\'s your name, buddy?')();

const makeGame = (rules, makeQuestion, goal = 3) => () => {
  console.log('Welcome to the Brain Games!');
  console.log(rules);

  const player = getUsername();
  let score = 0;
  let question;
  let userAnswer;

  while (score < goal) {
    question = makeQuestion();
    console.log(`Question: ${question.problem}`);
    userAnswer = getAnswer();

    if (userAnswer === question.solution) {
      score += 1;
      console.log('Correcto!');
    } else {
      return `Better luck next time, ${player}.`;
    }
  }

  return `You win, ${player}!`;
};

export default makeGame;
