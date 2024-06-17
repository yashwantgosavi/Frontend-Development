// Deap Copy vs Shallow copy
const user1 = {
    username :'sara',
    age: 12,
}
const user2= user1;
console.log(user2);

user2.username = 'yash';

// shallow copy
const user2 = {...user1};
console.log(user2);
console.log(user1);

user2.username = "harry";
console.log(user2);
console.log(user1);
