// const student1 = {
//     id: 1,
//     name: "heheer",
//     subjects: [],
    
// }

function Student(id, name, subjects=[]) {
    this.id = id;
    this.name = name;
    this.subjects = subjects;
}

Student.prototype.addSubject = function(subject) {
    this.subjects =[...this.subjects, subject]; 
}

const student1 = new Student(1, 'heheer', ['Computer']);

student1.addSubject('Math');

console.log(student1.subjects);

