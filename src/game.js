import readlineSync from 'readline-sync';

const NUMBER_OF_ATTEMPTS = 3;

const askName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};

export default (description, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const name = askName();

  for (let i = 0; i < NUMBER_OF_ATTEMPTS; i += 1) {
    const data = getQuestionAndAnswer();
    const question = data[0];
    const rightAnswer = data[1];

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (rightAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
