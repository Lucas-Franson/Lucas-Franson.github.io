const result = (function(exports, module){

    exports = module.exports;

    exports.firstname = 'John';

    module.exports.lastname = 'Smith';

    exports = {

        getFullName: function(){

            console.log('John Smith')

        }

    }

    return module.exports;

}).apply(null, [null, {exports: {}}]);

console.log(result);

/*
    The output of the code will be:
    { firstname: 'John', lastname: 'Smith' }
    explanation: The code is using the module.exports
*/