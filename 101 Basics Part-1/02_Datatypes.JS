"use strict" ; // (Default) Treat all JS code as newer version

// number => 2^53
// string => ""
// boolean => true/false
// null => standalone value
// undefined => Not assign
// symbol => unique

// object => 

console.log(typeof null) ;
console.log(typeof(undefined)) ;


/*-------------------------------Datatype Conversion-------------------------------*/
/*
let score = "a33a" ;
console.log(typeof score) ;

let strToNum = Number(score) ;
console.table([strToNum, typeof strToNum, Number(null), Number(undefined), String(undefined)]) ;

let val1 = " ", val2 = "" ;
let toBoolVal1 = Boolean(val1) ;
let toBoolVal2 = Boolean(val2) ;

console.log(toBoolVal1) ;
console.log(toBoolVal2) ;
*/


/*---------------------------------Operations------------------------------------*/
/*
console.log("1" + 2) ;
console.log(1 + "2") ;
console.log("1" + 2 + 2) ;
console.log(1 + 2 + "2") ;

console.log(+true) ;
console.log(-true) ;
console.log(+"") ;
*/


//  Equality check and comparison operators are works differently. Comparisons convert 'null' to a number, treating it as 0.

console.log(null == 0) ; // Equality check
console.log(null > 0) ;  // Comparison operator
console.log(null <= 0) ; // Comparison operator
console.log(null >= 0) ; // Comparison operator



// === --> Datatype + value
// == --> value



// How can we access data and allocate their memory, in this basis there are two type of data ---> i.) Primitive, ii.) Non-Primitive 

/*
    Primitive--> 7 types(accessing them by call by value) ---> String, Number, Boolean, undefined, symbol, null, BigInt
*/

/*
    Reference/ Non-Primitive(Their return type is object) --> Array, Objects, Functions
*/


const bigNumber = 1231231231231231231231231231238473625348753878378783478783478711111111000000000022222222222888888333333333377744444444466666665555551111111n ;
console.log(bigNumber , " ---> ", typeof bigNumber) ;

const myFunc = function(){
    console.log("Hello Guys") ;
    return true;
}

myFunc() ;
console.log(typeof myFunc) ;  // Function --> Object function
console.log(typeof myFunc()) ;