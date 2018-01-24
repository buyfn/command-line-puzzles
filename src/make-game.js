import makeGame from './console-game';
import * as calc from './games/calc';
import * as even from './games/even';

const brainCalc = makeGame(calc.rules, calc.makeQuestion, calc.questionToString, calc.checkAnswer);
const brainEven = makeGame(even.rules, even.makeQuestion, even.questionToString, even.checkAnswer);

export { brainCalc, brainEven };
