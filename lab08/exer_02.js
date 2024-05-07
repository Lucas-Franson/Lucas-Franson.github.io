
function Student(firstname, lastname, grades) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.grades = grades;
}

Student.prototype.inputNewGrade = function(grade) {
    this.grades.push(grade);
}

Student.prototype.computeAverage = function() {
    return this.grades.reduce((a, b, i, arr) => a + (b / arr.length), 0);
}

let john = new Student('John', 'Doe', []);
student.inputNewGrade(90);
student.inputNewGrade(80);
student.inputNewGrade(70);
console.log(student.computeAverage());

let jane = new Student('Jane', 'Doe', [77, 83, 85]);
student2.inputNewGrade(90);
console.log(student2.computeAverage());