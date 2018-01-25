import readlineSync from 'readline-sync';

const getUserInput = message => () => readlineSync.question(`${message} `);

const getAnswer = () => getUserInput('Your answer:')();

const getUsername = () => getUserInput('But first, tell me your name:')();

const makeGame = (rules, makeQuestion, goal = 3) => () => {
  console.log('Welcome to the Brain Games!');
  console.log(`${rules}\n`);
  const player = getUsername();

  const playRound = (score) => {
    if (score >= goal) {
      return `\nYou win, ${player}!`;
    }

    const question = makeQuestion();
    console.log(`\nQuestion: ${question.problem}`);
    const userAnswer = getAnswer();

    if (userAnswer === question.solution) {
      console.log('Correcto!');
      return playRound(score + 1);
    }

    return `\nBetter luck next time, ${player}.`;
  };

  return playRound(0);
};

export default makeGame;
