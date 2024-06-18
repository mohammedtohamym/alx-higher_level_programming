#!/usr/bin/node
const { argv } = require('node:process');
// prints first and second args
if (isNaN(argv[2])) {
  console.log('Not a number');
} else {
  console.log(`My number: ${argv[2]}`);
}
