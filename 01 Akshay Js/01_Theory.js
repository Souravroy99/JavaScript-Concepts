/*
JS is a "synchronous" and "single threaded" language.

Everything in JS happens inside of "Global Execution Context".

Execution context is divides in mainly two parts/phases ---> 
    i.) Phase 1: Memory creation part/ Variable environment (This contains, every variable and functions in key-value pair)
    ii.) Phase 2: Execution part/ Thread of execution (Everything executes line by line)

What do you mean by "synchronous" ---> Execution happens in specific order
What do you mean by "single threaded" ---> Executes single command at a time 



*/
var n = 2;

function square(num) { // parameter is --> num
    var ans = num*num;
    return ans;
}

var square2 = square(n); // argument is --> n
var square4 = square(4); // argument is --> 4

console.log(square2, square4);


/*
**For the first time: "Global Execution Context" occurs, and remain untill the whole file executes.

**Whenever: Any function invoked, then "Functional Execution Context" occurs.
*/

/* From the above code:

    All the memory is arranged inside of stack(called as, call stack)

        Phase1: Memory Creation Phase      \\       Phase2: Code Execution Phase
                                           \\
        ** All the variables are assign    \\                                         
            with undefined                 \\                         
        ** All the functions are assign    \\     **In this phase all the variables are assign with their actual values                                      
            with it's whole defination     \\                         
                                           \\
        ** n: undefined                    \\      n: 2                                 
        ** square: { whole definition...}  \\      square: { whole definition... }                                                                     
        ** square2: undefined              \\      Here, invocation of function happens means, again, Memory Creation Phase and Execution Phase occurs --->       Phase1: MCP    \\      Phase2: CEP             
        ** square4: undefined              \\      Here, invocation of function happens means, again, Memory Creation Phase and Execution Phase occurs --->     num: undefined   \\    num: value
                                           \\  So,                                                                                                              ans: undefined   \\    ans: num*num
                                           \\      square2: 4                                                                                                                    \\    return ans (After complition of Code Execution Phase, all the memory is freed up)
                                           \\      square4: 16

    Now, the code execution phase is empty, so all the memories are freed up.

*/



/*
Eval Execution Context: The eval() function in JavaScript is a powerful and often controversial feature that allows you to execute a string of JavaScript code within the current execution context.
*/
eval("var x = 2 * 5");
console.log(x); // 10