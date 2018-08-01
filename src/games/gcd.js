import playGame from '../game';
import rand from '../tools/rand';

const DESCRIPTION = 'Find the greatest common divisor of given numbers.';
const MIN_NUMBER = 0;
const MAX_NUMBER = 100;

const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};

export default () => {
  const getQuestionAndAnswer = () => {
    const number1 = rand(MIN_NUMBER, MAX_NUMBER);
    const number2 = rand(MIN_NUMBER, MAX_NUMBER);
    const question = `${number1} ${number2}`;
    const result = gcd(number1, number2);
    const answer = `${result}`;
    return [question, answer];
  };
  playGame(DESCRIPTION, getQuestionAndAnswer);
};
