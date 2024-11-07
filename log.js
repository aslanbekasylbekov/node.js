const EventEmitter = require('events');
const util = require('util');

class Logger{
    log = (msg) => {
        console.log(msg);
        this.emit('some event', {id:1, text:'Event test exit!'});

    }
}

util.inherits(Logger, EventEmitter);
module.exports = Logger;