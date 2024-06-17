//======= objects 
// Student

let anupam = {
    name: 'anupam',
    age: 28,
    phoneNo: 123456789,
    gender: 'male',
    address: {
        road: 'Mumbai Agra Road',
        city: 'Nashik'
    }
};
let jyoti = {
    name: 'jyoti',
    age: 28,
    phoneNo: 123456789,
    gender: 'female',
    address: {
        road: 'Mumbai Agra Road',
        city: 'Nashik'
    }
}

// Courses
let webDevelopment = {
    name: 'jyoti',
    age: 28,
    phoneNo: 123456789,
    gender: 'female',
    address: {
        road: 'Mumbai Agra Road',
        city: 'Nashik'
    }
}

// Array
let student = [jyoti,];
let courses = [];
let institute = [];

function arrayCheck(p) {


    for (let i = 0; i <= student.length; i++) {
        if (p === i) {

            return;
        } else {
            document.write("not Found");
        }
    }

    return;
}
let userInput = +prompt();
let stundentOutput = arrayCheck(userInput);


document.write(stundentOutput +'<br>');

