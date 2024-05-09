
class Student {
    constructor(studentId) {
        this.studentId = studentId;
        this.answers = [];
        this.questions = [];
    }

    addAnswer(answer) {
        this.answers.push(answer);
    }

    addStudentQuestion(question) {  
        this.questions.push(question);
    }
}

class Question {
    constructor(qId, correctAnswer) {
        this.qId = qId;
        this.correctAnswer = correctAnswer;
    }

    checkAnswer(answer) {
        return this.correctAnswer === answer;
    }
}

class Quiz {
    constructor(questions, students) {
        this.questions = questions;
        this.students = students;
    }

    scoreStudentBySid(studentId) {
        let student = this.students.find(s => s.studentId === studentId);
        
        return student
            .answers
            .filter((answer) => this.questions.find(x => x.qId === answer.qId).checkAnswer(answer.correctAnswer))
            .length;
    }

    getAverageScore() {
        return this.students
            .reduce((acc, student, i, arr) => acc + (this.scoreStudentBySid(student.studentId) / arr.length), 0);
    }

}







const student1 = new Student(10);
student1.addAnswer(new Question(2, 'a'));
student1.addAnswer(new Question(3, 'b'));
student1.addAnswer(new Question(1, 'b'));
const student2 = new Student(11);
student2.addAnswer(new Question(3, 'b'));
student2.addAnswer(new Question(2, 'a'));
student2.addAnswer(new Question(1, 'd'));
const students = [student1, student2];
const questions =[new Question(1, 'b'), new Question(2, 'a'), new
Question(3, 'b')];
const quiz = new Quiz(questions, students);
let scoreforStudent10 = quiz.scoreStudentBySid(10);
console.log(scoreforStudent10); //Expected Result: 3
let scoreforStudent11 = quiz.scoreStudentBySid(11);
console.log(scoreforStudent11); //Expected Result: 2
let average = quiz.getAverageScore();
console.log(average); //Expected Reuslt: 2.5