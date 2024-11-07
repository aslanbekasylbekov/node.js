const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream('./text.txt');
const writeStream = fs.createWriteStream('./new_text')
const compressStream = zlib.createGzip();

// readStream.on('data', (chunk) => {
//     writeStream.write(chunk)
// })
const handleError = ()=>{
    console.log('Error');
    readStream.destroy();
    writeStream.end('Finished with error...');
}
readStream
    .on('error', handleError)
    .pipe(compressStream)
    .pipe(writeStream)
    .on('error', handleError)