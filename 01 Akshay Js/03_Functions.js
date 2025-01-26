var x = 1;
a();
b();

console.log(x);

function a() {
    var x = 2;
    console.log(x); 
}

function b() {
    var x = 3;
    console.log(x);
}



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