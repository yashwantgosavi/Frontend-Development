// map()

const inputs = [1, 2, 3, 4, 5, 6];
// const squareArray = inputs.map(function (currentElement, index, arr) {
//     return currentElement * currentElement;
// });

// const squareArray = inputs.map((num) => num * num);

// console.log(squareArray);



// const a = inputs.map(function (b, index) {
//     return index + ':' + `${b +'='}` + b * b ;
// })

const a = inputs.map((num, index) => index +':' + num * num);

console.log(a)