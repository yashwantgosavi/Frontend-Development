# CONSTRUCTOR
You can create objects in JavaScript using curly braces { ... } syntax. But what if you need to
create multiple similar objects. You can either write the same syntax for every object or you
can use the constructor to create objects.

Using { ... } syntax to create multiple objects can create certain inconsistencies in code -
there can be spelling mistakes, the code can become difficult to maintain, changes to all the
objects will be difficult.

To overcome all the above inconsistencies, JavaScript provides a function constructor. The
constructor provides a blueprint/structure for objects. You use this same structure to
create multiple objects.

Constructors technically are regular functions. There is one convention to constructors -
    ● The first letter of the function is capital.

Objects can be created by calling the constructor function with the 'new' keyword.

Using a constructor means that -
    ● all of these objects will be created with the same basic structure.
    ● we are less likely to accidentally make a mistake than if we were creating a whole
    bunch of generic objects by hand.

It is important to always use the new keyword when invoking the constructor.
If new is not used, the constructor may clobber the 'this' which was accidentally passed to it.
In most cases that is the global object (window in the browser or global in Node.). Without
the ‘new’ function will not work as a constructor.

        function Student(first, last, age){
            this.firstName = first;
            this.lasrName = last;
            this.age = age;
        }

        var stu1 = new Student("roshani","bhavsar", 12);
        var stu2 = new Student("jyoti", "mali", 23);

The new keyword is the one that is converting the function call into constructor call and
the following things happen -
1. A brand new empty object gets created
2. The empty object gets linked to the prototype property of that function. (We will
read about prototypes later in this lecture.)
3. The empty object gets bound as this keyword for the execution context of that
function call
4. If that function does not return anything then it implicitly returns this object.

NOTE: The 'this' referred in the constructor bound to the new object being constructed.

EXTRA:
You can get a good read from the link below -
https://javascript.info/constructor-new


# PROTOTYPES
Prototypes are a simple way to share behavior and data between multiple objects. The
prototypes are property of the Object constructor and can be seen from the code below -

Object.prototype

All the objects created in JavaScript are instances of 'Object'. Therefore, all of them share
the 'Object. prototype' method. We can also override these properties, i.e. we can change
them.

Why do you need prototypes? - Sometimes you want to add new properties (or methods) to all the existing objects of a given type. This is possible only by adding the new method to the prototype function.

Since, all the objects share the same prototype chain, the changes done to the Object
prototype is seen by all the instances.
Eg.,
function Student(first, last, age){
    this.firstName = first;
    this.lasrName = last;
    this.age = age;
}

var stu1 = new Student("roshani","bhavsar", 12);
var stu2 = new Student("jyoti", "mali", 23);
Student.prototype.getName = function(){
    return this.name;
}

The below statement will work and produce the name of the object like -
stu1.getName();. // Return “Roshani”

- _proto_ AKA Dunder Proto:
_proto_ points to the prototype object of the constructor function.

When an object is created in JavaScript, the JavaScript engine adds a __proto__ property to
the newly created object. This _proto_ property is equal to the Object's prototype property.

Let's see an example -
function Student(name, age){
    this.name = name;
    this.age= age;
}
var stu1 = new Student("Roshani,23);

If you do check the stu1._proto_ and Student. prototype, then you will see that both of them are the same. Also if you apply strict equal to check if they point at the same location
then it will return true.


Student.prototype === stu1._proto_ // Returns true



