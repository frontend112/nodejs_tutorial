const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./newFolder/first.txt', 'utf-8');
const second = readFileSync('./newFolder/second.txt', 'utf-8');

console.log(first, second);
writeFileSync('./newFolder/result-sync.txt', `here is the result : ${first}, ${second}`)
