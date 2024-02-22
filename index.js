const franc = require('franc');
const lang = require('./nodejs-langs');
const input = [];
let result;

for (let i = 2; i < process.argv.length; i++) {
  input.push(process.argv[i]);
}

result = franc(input.join(' '));

console.log(lang.where('3', result).name);
