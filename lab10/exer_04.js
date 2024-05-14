var message = 'Hello World';

function logMessage() {

    console.log(this.message);

}

logMessage();

/*
    Node output: undefined
    Browser output: Hello World
    Explanation: In node, the global object is not the same as in the browser because it uses "strict mode". 
        In the browser, the global object is the window object. 
*/