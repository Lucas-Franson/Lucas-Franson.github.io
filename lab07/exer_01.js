let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        this.students.forEach(function (student) {
            console.log(this.title + ": " + student);
        });
    },
    showList1: function () { // Answer 01
        this.students.forEach((student) => {
            console.log(this.title + ": " + student);
        });
    },
    showList2: function () { // Answer 02
        this.students.forEach(((student) => {
            console.log(this.title + ": " + student);
        }).bind(this));
    },
    showList3: function () { // Answer 03
        this.students.forEach((s) => ((student) => {
            console.log(this.title + ": " + student);
        }).call(this, s));
    },
    showList4: function () { // Answer 04
        this.students.forEach((s) => ((student) => {
            console.log(this.title + ": " + student);
        }).apply(this, [s]));
    },
    showList5: function () { // Answer 05
        const self = this;
        this.students.forEach(function (student) {
            console.log(self.title + ": " + student);
        });
    }
};

group.showList5();