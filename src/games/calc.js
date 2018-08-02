import playGame from '../game';
import rand from '../utils';

const description = 'What is the result of the expression?';
const minNumber = 0;
const maxNumber = 100;
const operations = ['+', '-', '*'];

const calculate = (number1, number2, operation) => {
  let result;
  switch (operation) {
    case operations[0]:
      result = number1 + number2;
      break;
    case operations[1]:
      result = number1 - number2;
      break;
    case operations[2]:
      result = number1 * number2;
      break;
    default:
      result = null;
  }
  return result;
};

const getQuestionAndAnswer = () => {
  const number1 = rand(minNumber, maxNumber);
  const number2 = rand(minNumber, maxNumber);
  const operation = operations[rand(0, operations.length - 1)];
  const question = `${number1} ${operation} ${number2}`;
  const result = calculate(number1, number2, operation);
  const answer = `${result}`;
  return [question, answer];
};

export default () => {
  playGame(description, getQuestionAndAnswer);
};
