// Js is single threaded
/*
Ececution Context --->        i.) Global Execution Context, 
                             ii.) Functional Execution Context, 
                            iii.) Eval Execution Context(By avoiding eval and using safer alternatives, you can write more secure and maintainable code in JavaScript.)
*/

/*
Js code runs in two phases --->
     i.) Memory creation phase,
    ii.) Execution phase


*** Everything allocates to 'this' ---> Memory creation phase(Every variables are initialize with 'undefined' and every functions are initialize with their 'definition')  ---> Execution phase 

*** How many times we declare functions?
Every time --> (Memory creation phase and Execution phase) happens recursively. (Note: Everytime a new stack is created for execute recursively called functions.)

*** After completion of every tasks(or, phase) the 'New variable environment'(or, Memory stack) gets deleted(or, removes memory).

*** For every new memory stack ---> (New variable environment + Execution thread) is allocates and after execution of everything those are deleted.

*/

function one(){
    console.log("ONE") ;
    two()
}

function two(){
    console.log("TWO") ;
    three() 
}

function three(){
    console.log("THREE") ;
}

one()
two()
three() 