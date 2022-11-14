/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
import readlineSync from 'readline-sync';

// eslint-disable-next-line import/prefer-default-export

export const sayHello = () => {
  console.log('Welcome to the Brain Games!\nMay I have your name?');
  const name = readlineSync.question('Your answer: ');
  console.log(`Hello, ${name}`);
};

// eslint-disable-next-line import/prefer-default-export
