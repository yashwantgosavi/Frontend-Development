# Object
undefined: 'undefined' is the value assigned to the variable that has been declared but
not initialized or defined. A method or statement also returns undefined if the variable
that is being evaluated does not have an assigned value. A function returns undefined if a
value was not returned.

# Classes
Classes are introduced in ECMAScript 2015. These are special functions that allow one to
define prototype-based classes with a clean, nice-looking syntax. It also introduces great
new features which are useful for object-oriented programming.
An example of creating a class is -

class Person{
    constructor(first, last){
        this.firstName = first;
        this.lastName = lastl
    }
}
The way you have defined class above is known as class declaration. In order to create a
new instance of class Person, we do this -

let p1 = new Person("Rakesh","Kumar");


Some points you need to remember -
    ● You define class members inside the class, such as methods or constructor.
    ● By default, the body of class is executed in strict mode.
    ● The constructor method is a special method for creating and initializing an object.
    ● You cannot use the constructor method more than once, else SyntaxError is thrown.
    ● Just like a constructor function, 'new' keyword is required to create a new object.

NOTE: The type of the class is 'function', i.e. typeof(Person) will print ’function’ on the console.


- Class Expression
A class expression is another way to define a class, which is similar to function
expression. They can be named and unnamed both, like -

let Person = Class{};
or
let Person = class Person2{};

The name given to the class expression is local to the class’s body.
Hoisting

Class declarations are not hoisted. If you try to use hoisting, it will return 'not
defined' error.

# Inheritance
The JavaScript class also supports inheritance like other languages such as Java and
C++. To inherit a class you have to use the 'extends' keyword. Eg.,


