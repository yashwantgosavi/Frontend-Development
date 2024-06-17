// constructor will help us to create multiple objects.
function Students(name, rollNo, marks) {
    // var student = {}; //new Object();
    this.name = name;
    this.rollNo = rollNo;
    this.marks = marks;
    // return student;
}
var student1 = new Students('abc', 15, 78);
// javascript engine will indicate that you are calling new as a counstructor
var student2 = new Students('pqr', 30, 50);
console.log(student1);
console.log(student2);