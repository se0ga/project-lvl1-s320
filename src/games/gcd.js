import playGame from '../game';
import rand from '../utils';

const description = 'Find the greatest common divisor of given numbers.';
const minNumber = 0;
const maxNumber = 100;

const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};

const getQuestionAndAnswer = () => {
  const number1 = rand(minNumber, maxNumber);
  const number2 = rand(minNumber, maxNumber);
  const question = `${number1} ${number2}`;
  const result = gcd(number1, number2);
  const answer = `${result}`;
  return [question, answer];
};

export default () => {
  playGame(description, getQuestionAndAnswer);
};
