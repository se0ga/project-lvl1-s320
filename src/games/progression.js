import playGame from '../game';
import rand from '../utils';

const description = 'What number is missing in this progression?';
const minStartNumber = 0;
const maxStartNumber = 100;
const minStepNumber = 1;
const maxStepNumber = 10;
const progressionLength = 10;

const makeProgression = (start, length, step) => {
  const result = [];
  for (let i = 0; i < length; i += 1) {
    result.push(start + i * step);
  }
  return result;
};

export default () => {
  const getQuestionAndAnswer = () => {
    const start = rand(minStartNumber, maxStartNumber);
    const step = rand(minStepNumber, maxStepNumber);
    const progression = makeProgression(start, progressionLength, step);
    const index = rand(0, progressionLength - 1);
    const answer = `${progression[index]}`;
    progression[index] = '..';
    const question = progression.join(' ');
    return [question, answer];
  };
  playGame(description, getQuestionAndAnswer);
};
