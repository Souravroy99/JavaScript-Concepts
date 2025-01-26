/* Example 1: Proper function */

getName();
console.log(x);
console.log(getName);

var x = 7;
function getName(){
    console.log("Hello 3rd year STROY");
}


/* Example 2: Assignment of regular function */

var y = 10;

// getName1();
console.log(y);
console.log(getName1);

var getName1 = function(){
    console.log("Hello 3rd year Sourav");
}


/* Example 3: Assignment of Arrow function */

var z = 15;

getName2();
console.log(z);
console.log(getName2);

var getName2 = () => {
    console.log("Hello 3rd year ROY");
}



/*
So, in simple words: Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope (either the global scope or function scope) during the compilation phase, before the code execution.
*/