// 'Immediately Invoked Function Expression' (IIFE)

// Named IIFE
(function(name){
    console.log(`Hello ${name}, this is named IIFE.`)
})('Stroy');


// Unnamed IIFE
((Name)=> {
    console.log(`Hello ${Name}, this is unnamed IIFE.`)
})('Sourav') ;



// Arrow functions must be either assigned to a variable or used within an expression like a callback function or an 'Immediately Invoked Function Expression' (IIFE). 

/*
Why 'IIFE'?

i.) For immediately execution
ii.) For neglecting the pollution of global scope we should use 'IIFE'.

*/