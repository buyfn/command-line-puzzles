import readlineSync from 'readline-sync';

export const greet = () => {
  const username = readlineSync.question('What is your name, friend?');
  return `Hey, ${username}!`;
};
