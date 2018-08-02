import playGame from '../game';
import rand from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no".';
const minNumber = 0;
const maxNumber = 100;

const isEven = number => number % 2 === 0;

const getQuestionAndAnswer = () => {
  const number = rand(minNumber, maxNumber);
  const question = `${number}`;
  const answer = isEven(number) ? 'yes' : 'no';
  return [question, answer];
};

export default () => {
  playGame(description, getQuestionAndAnswer);
};
