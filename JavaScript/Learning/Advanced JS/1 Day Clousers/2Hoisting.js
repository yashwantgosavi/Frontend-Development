console.log(`username: ${userName}`);
console.log(`userAge: ${userAge}`);

greetUser(userName);

var userName = 'Tom';
var userAge = 10;
console.log(`username: ${userName}`);
console.log(`userAge: ${userAge}`);

function greetUser(name) {
  var greet = 'I hope you are doing fine.';
  console.log(`hello ${name}, ${greet}`);
  var currentYear = 2030;
  const year = currentYear - userAge;
  return `Your birth year is ${year}`;
}
var birthYear = greetUser(userName);
console.log(birthYear);
