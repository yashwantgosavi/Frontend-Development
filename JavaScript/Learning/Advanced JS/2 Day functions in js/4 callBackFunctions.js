// function greet(wish) {
//     console.log(`${wish()}, welcome` );
// }

// function sayHi() {
//     return 'hi!';
// }
// greet(sayHi);



function lunch(ans, y) {
    console.log(ans, y);
}

function yes(a, b) {
    return a + b;
}

function no() {
    return 'no';
}

console.log(lunch(yes(10, 5), no()));







// function returing a function
function greet(message) {
    return function (wishes) {
        console.log(`${wishes}, ${message}`);
        
    }
}

greet('welcome')('hummair');


function result(percentage) {
    return function (studentId) {
        console.log(studentId, percentage);
    }
}
let id = 1223456;
let per = 56+'%';
result(id)(per);

