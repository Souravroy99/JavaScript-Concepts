console.log(typeof(this), "And this: ", this);
console.log(typeof(module.exports), "And  module.exports: ", module.exports);
console.log(this === module.exports);

console.log(`\n"this" is not equal to just {}`);





/*
Shortest JS Program: Empty JS file
Inside of empty JS file: A "Global Execution Context", a "Global Object"(Window) is created

** "this": This is current instant(or reference) of current Object

** Perfect definition: When a method is called on an object, "this" points to the object from which the method was called.

** Global Object: 
            i.) In Browser: Window
            ii.) In Node Environment: Empty object

** "this":
        i.) In Browser: this === window
        ii.) In Node Environment: this === module.exports
*/