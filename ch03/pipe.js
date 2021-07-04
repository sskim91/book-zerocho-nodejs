const fs = require('fs');

const readStream = fs.createReadStream('readme3.txt');
const writeStream = fs.createWriteStream('writeme3.txt');
readStream.pipe(writeStream);

//어떻게 보면 파일 복사
//readme3.txt 파일을 읽어서 writeme3.txt에 써라.
