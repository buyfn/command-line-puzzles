import { randomInt, arithmeticSeq } from '../math';
import makeGame from '..';

const rules = 'What number is missing from this progression?';

const makeQuestion = () => {
  const lowerLimit = 0;
  const upperLimit = 100;
  const first = randomInt(lowerLimit, upperLimit);

  const minDiff = 1;
  const maxDiff = 10;
  const diff = randomInt(minDiff, maxDiff);

  const length = 10;
  const i = randomInt(0, length - 1);

  const seq = arithmeticSeq(first, length, diff);
  const solution = String(seq[i]);
  seq[i] = '..';

  return { problem: seq.join(' '), solution };
};

export default makeGame(rules, makeQuestion);
