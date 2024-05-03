
// 1. 
function sum(arr) {
    return arr.filter(x => x > 20).reduce((acc, cur) => acc + cur, 0);
}

console.log(sum([1, 50, 40, 3, 10]));

// 2.
const getNewArray = function (arr) {
    return arr.filter(x => x.length >= 5 && x.indexOf('a') !== -1);
}

console.log(getNewArray(['apple', 'banana', 'kiwi', 'orange', 'pinepple']));

// 3.
const concat = (...args) => {
    const result = [];
    args.forEach(arr => {
        result.push(...arr);
    });
    return result;
}

console.log(concat('hi', [1,2,3], ['Hello','world']));

// 4.
const students = [
    { name: 'Quincy', grades: [99, 88], courses:['cs301', 'cs303']},
    { name: 'Jason', grades: [29, 38], courses:['cs201', 'cs203']},
    { name: 'Alexis', grades: [79, 78], courses:['cs105', 'cs211'] },
    { name: 'Sam', grades: [91, 82], courses:['cs445', 'cs303'] },
    { name: 'Katie', grades: [66, 77], courses:['cs303', 'cs477'] }
];

function average(arr) {
    return arr
        .filter(x => x.courses.includes('cs303'))
        .map(x => {
            let std = {};
            std[x.name] = x.grades.reduce((acc, cur) => acc + cur, 0) / x.grades.length;
            return std;
        });
}

console.log(average(students));