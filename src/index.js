import readlineSync from 'readline-sync';

const greet = () => {
  const username = readlineSync.question('What is your name, friend? ');
  return `Hey, ${username}!`;
};

export default greet;
