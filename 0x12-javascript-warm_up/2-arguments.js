#!/usr/bin/node
const { argv } = require('node:process');
let argCount = 0;
// print process.argv
argv.forEach((val, index) => {
  argCount++;
});
if (argCount === 2) {
  console.log('No argument');
} else if (argCount === 3) {
  console.log('Argument fonnd');
} else {
  console.log('Arguments found');
}
