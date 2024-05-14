console.log('start');

setTimeout(() => console.log('timeout 1'), 0);

setTimeout(() => {

    console.log('timeout 2')

    process.nextTick(() => console.log('nextTick 3'));

}, 0);

setTimeout(() => console.log('timeout 3'), 0);

new Promise((resolve, reject) => resolve('Hello')).then(() => console.log('Promise...1'));

new Promise((resolve, reject) => resolve('Hello')).then(() => console.log('Promise...2'));

process.nextTick(() =>  console.log('nextTick 1'));

process.nextTick(() =>  console.log('nextTick 2'));

console.log('end');

/*
    First we have the text 'start' and 'end' printed to the console as they are synchronous code.
    Then we have the ticks 1 and 2 as they are the next ones in the queue.
    Then we have the promises 1 and 2 as they are the next ones in the queue.
    Then we have the timeouts 1 and 2 as the next queue.
    Then we have a new tick because the timeout 2 created it and put it as the next one in the queue.
    Finally we have the timeout 3 to close the queue.
*/