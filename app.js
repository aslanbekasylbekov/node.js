const fs = require('fs');
fs.readFile('./text.txt', 'utf8', (error,data) => {
    fs.mkdirSync('./files',()=>{});
    fs.writeFileSync('./files/text1.txt',`${data} New text!`,(error)=>{
        error ? console.log(error) : null;
    });
});
