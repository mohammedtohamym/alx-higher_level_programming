#!/usr/bin/node
const { argv } = require('node:process');
// prints first and second args
if (isNaN(argv[2])) {
  console.log('Missing number of occurrence');
} else {
  for (let i = 0; i < Number(argv[2]); i++){
  console.log('C is fun');
  }
}
