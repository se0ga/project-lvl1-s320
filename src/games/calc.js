import playGame from '../game';
import rand from '../tools/rand';

const DESCRIPTION = 'What is the result of the expression?';
const MIN_NUMBER = 0;
const MAX_NUMBER = 100;
const OPERATIONS = ['+', '-', '*'];

const calculate = (number1, number2, operation) => {
  let result;
  switch (operation) {
    case OPERATIONS[0]:
      result = number1 + number2;
      break;
    case OPERATIONS[1]:
      result = number1 - number2;
      break;
    case OPERATIONS[2]:
      result = number1 * number2;
      break;
    default:
      result = null;
  }
  return result;
};

export default () => {
  const getQuestionAndAnswer = () => {
    const number1 = rand(MIN_NUMBER, MAX_NUMBER);
    const number2 = rand(MIN_NUMBER, MAX_NUMBER);
    const operation = OPERATIONS[rand(0, OPERATIONS.length - 1)];
    const question = `${number1} ${operation} ${number2}`;
    const result = calculate(number1, number2, operation);
    const answer = `${result}`;
    return [question, answer];
  };
  playGame(DESCRIPTION, getQuestionAndAnswer);
};
