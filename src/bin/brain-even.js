#!/usr/bin/env node
import { makeGame, getUsername } from '../play-game';
import * as even from '../games/even';

console.log('Welcome to the Brain Games!');
console.log(even.rules);
console.log('May the odds be ever in your favor.');

const player = getUsername();
const goal = 3;

const game = makeGame(player, even.makeQuestion, even.questionToString, even.checkAnswer, goal);

console.log(game());
