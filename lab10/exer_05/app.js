// app.js
const getName = require('./pattern1');

getName();

/*
    The error is "getName is not a function"
    explanation: The function getName is not being exported as a function, 
        it is being exported as a property of the module.exports object. So the correct way to call it
        is by using the property name. (getName.getName())
*/