/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
import readlineSync from 'readline-sync';

let name;
const sayHello = () => {
  console.log('Welcome to the Brain Games!\nMay I have your name?');
  name = readlineSync.question('Your answer: ');
  console.log(`Hello, ${name}`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

const checkNumber = () => {
  let count = 0;
  while (count < 3) {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');

    let correctAnswer;
    const isEven = (randomNumber % 2 === 0);
    if (isEven) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }

    if ((isEven && (userAnswer === 'yes')) || (!isEven && (userAnswer === 'no'))) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'\nLet's try again, ${name}!`);
      count = 0;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export { sayHello, checkNumber };
