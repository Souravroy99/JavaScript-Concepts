let a ; // undefined: Declared(Memory is created in execution context) but, no value is assigned.
console.log(a) ;

console.log(b) ; // Not defined: Memory is created in execution context


/* Bad Practice*/
let x = undefined;
console.log(x);