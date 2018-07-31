import playGame from '../game';
import rand from '../tools/rand';

const DESCRIPTION = 'Answer "yes" if number even otherwise answer "no".';
const MIN_NUMBER = 0;
const MAX_NUMBER = 100;

const isEven = number => number % 2 === 0;

export default () => {
  const getQuestionAndAnswer = () => {
    const number = rand(MIN_NUMBER, MAX_NUMBER);
    const question = `${number}`;
    const answer = isEven(number) ? 'yes' : 'no';
    return [question, answer];
  };
  playGame(DESCRIPTION, getQuestionAndAnswer);
};
