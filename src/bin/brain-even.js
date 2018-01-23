#!/usr/bin/env node
import { makeGame, getUsername } from '../even-game';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if the number is even. Answer "no" otherwise.');
console.log('May the odds be ever in your favor.');

const player = getUsername();
const goal = 3;

console.log(makeGame(player)(goal));
