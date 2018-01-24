#!/usr/bin/env node
import { makeGame, getUsername } from '../play-game';
import * as calc from '../games/calc';

console.log('Welcome to the Brain Games!');
console.log(calc.rules);

const player = getUsername();
const goal = 3;

const game = makeGame(player, calc.makeQuestion, calc.questionToString, calc.checkAnswer, goal);

console.log(game());

