import playGame from '../game';
import rand from '../utils';

const description = 'Balance the given number.';
const minNumber = 10;
const maxNumber = 10000;

const getBalance = (number) => {
  const string = `${number}`;
  const quantity = string.length;
  let sum = 0;
  for (let i = 0; i < quantity; i += 1) {
    sum += Number(string.charAt(i));
  }
  const filler = Math.floor(sum / quantity);
  const result = new Array(quantity).fill(filler);
  const remainder = sum % quantity;
  for (let i = 0; i < remainder; i += 1) {
    const index = quantity - i - 1;
    result[index] += 1;
  }
  return result.join('');
};

const getQuestionAndAnswer = () => {
  const number = rand(minNumber, maxNumber);
  const question = `${number}`;
  const answer = getBalance(number);
  return [question, answer];
};

export default () => {
  playGame(description, getQuestionAndAnswer);
};
