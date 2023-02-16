// classes === constructor functions
// classes - create objects with shared methods

// function Student() {}

class Student {
    constructor(id, name, subjects = []) {
        this.id = id;
        this.name = name;
        this.subjects = subjects;
    }

    getStudentName() {
        return `Student: ${this.name}`;
    }

    addSubject() {}
}

const student1 = new Student(1, 'heheer');
console.log(Student.prototype.addSubject);