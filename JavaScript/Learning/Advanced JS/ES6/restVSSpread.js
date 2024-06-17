// Spread Operator = ... allows an iterable such as an array or string to be expanded into seperate elements (unpacks the elements),

// const { log } = require("console");

// let numbers = [1, 2, 3, 4, 5];
// let maximum = Math.max(numbers);
// console.log(maximum);

// let username = "bro code";
// let letters = [...username];
// console.log(letters);



// rest parameters = (...rest) allow a function work with a variable number of arguments by bundling then into an array

// spread = expands an array into seperate elements
// rest = bundles seperate elements into an array

function openFridge(...foods) {
    console.log(foods);
}

let food1 = "pizza";
let food2 = "hamburger";
let food3 = "hotdog";
let food4 = "sushi";

openFridge(food1, food2, food3, food4);