const fs = require('fs');

let data = fs.readFileSync('./readme.txt');
console.log('1번', data.toString());
data = fs.readFileSync('./readme.txt');
console.log('2번', data.toString());
data = fs.readFileSync('./readme.txt');
console.log('3번', data.toString());
data = fs.readFileSync('./readme.txt');
console.log('4번', data.toString());

//서버 초기화 작업 시에나 사용할 때 좋음.