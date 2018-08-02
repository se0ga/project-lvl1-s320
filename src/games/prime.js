import playGame from '../game';
import rand from '../utils';

const description = 'Is this number prime?';
const minNumber = 0;
const maxNumber = 100;

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getQuestionAndAnswer = () => {
  const number = rand(minNumber, maxNumber);
  const question = `${number}`;
  const result = isPrime(number);
  const answer = result ? 'yes' : 'no';
  return [question, answer];
};

export default () => {
  playGame(description, getQuestionAndAnswer);
};
