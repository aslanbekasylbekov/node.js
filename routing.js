const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = 3000;

const server = http.createServer((req,res)=>{
    console.log('Server request');
    res.setHeader('Content-Type', 'text/html');
    if (req.url = '/'){
        fs.readFile('./')
    }
    // res.write('<head><link rel="stylesheet" href="#"></head>');

    // res.write('<h1>Hello, world</h1>');
    // res.write('<p>My name is P-Daddy</p>');
    // res.end();

});
server.listen(PORT,'localhost',(error)=>{
    error ? console.log(error) : console.log(`listening port ${PORT}`);
})