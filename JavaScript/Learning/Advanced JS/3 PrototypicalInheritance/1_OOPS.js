var student1 = {
    name: 'abc',
    rollNo: 24,
    marks: 50
};

var student2 = {
    name: 'xyz',
    rollNo: 24,
    marks: 50
};
console.log(student1);

function createStudents(name, rollNo, marks) {
    var student = {}; //new Object();
    student.name = name;
    student.rollNo = rollNo;
    student.marks = marks;
    return student;
}
var student1 = createStudents('abc',15,78);
var student2 = createStudents('pqr', 30, 50);
console.log(student1);