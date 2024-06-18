#!/usr/bin/node
const { argv } = require('node:process');
let argCount = 0;
// print process.argv
argv.forEach((val, index) => {
  argCount++;
});

// prints only the first arguments it gets or 'No argument'
if (argCount === 2) {
  console.log('No argument');
} else {
  console.log(argv[2]);
}
