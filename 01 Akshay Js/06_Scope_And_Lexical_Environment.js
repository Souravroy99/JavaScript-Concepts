/*
Scope: Scope in JavaScript refers to the context or environment in which variables, functions, and objects are accessible or visible.
*/



function a() {
    var b = 10;
    c();

    function c() {
        console.log(b);
    }
}

a();

/*
From the above code:
    Lexical parent of "function b" is "function a".
    Lexical parent of "function a" is "Global Object".
    Lexical parent of "Global Object" is "NULL".

*/