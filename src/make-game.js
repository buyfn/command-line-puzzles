import makeGame from './console-game';
import * as calc from './games/calc';
import * as even from './games/even';
import * as gcd from './games/gcd';

const brainCalc = makeGame(calc.rules, calc.makeQuestion, calc.questionToString, calc.checkAnswer);
const brainEven = makeGame(even.rules, even.makeQuestion, even.questionToString, even.checkAnswer);
const brainGCD = makeGame(gcd.rules, gcd.makeQuestion, gcd.questionToString, gcd.checkAnswer);

export { brainCalc, brainEven, brainGCD };
