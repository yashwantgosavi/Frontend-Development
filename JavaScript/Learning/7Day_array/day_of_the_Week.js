/*
Write a function 'returnDay' that takes one parameter(number from 1 to 7) and returns the day of the week.
(where 1 is Monday, 2 is Tuesday, 3 is Wednesday, etc).

If the number is less than 1 or greater than 7, the function should return null.
Note: Store the days of the week in the array.
*/

function returnDay(number) {

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

  if (number >= 1 && number <= 7) {
    return days[number-1];
  } else {
    return null;
  }
}

let number = +prompt();
let result = returnDay(number);
document.write(result);
