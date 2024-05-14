const fs = require('fs');


fs.readFile('hello.txt', () => {

    console.log('readFile....');

});

setTimeout(() => console.log('timeout'), 0);

setImmediate(() => console.log('Immediate'));

/* 
    First we have the timeout because it starts the queue in Timer callbacks.
    Then the readfile because the next callback is the I/O callbacks.
    Finally we have the immediate because it is the last one in the queue.
*/
