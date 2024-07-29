let num = Number(100) ;
// console.log(typeof num) ;

let balance = new Number(1234) ; // Object

// To String
// console.log(balance.toString().length) ;  // String

// To Fixed
// console.log(typeof(balance.toFixed(2))) ; // String


// To Precision
let otherNum = 678.776 ;
// console.log(otherNum.toPrecision(10)) ;  // String
// console.log(otherNum.toPrecision(5)) ;  // String


// To Local String
let hundreds = 1000000000 ;
// console.log(hundreds.toLocaleString()) ;
// console.log(hundreds.toLocaleString('en-IN')) ;
// console.log(hundreds.toLocaleString('en-US')) ;


// console.log(Number.MAX_VALUE)
// console.log(Number.MAX_SAFE_INTEGER)



/*----------------------------------------------MATHS----------------------------------------------*/

console.log(Math) ;
console.log(Math.abs(-199)) ;
console.log(Math.round(4.5)) ;
console.log(Math.floor(4.9999)) ;
console.log(Math.ceil(4.00001)) ;
console.log(Math.sqrt(26)) ;
console.log(Math.pow(4,4)) ;
console.log(Math.min(26, -3, 1, 6, 8)) ;
console.log(Math.max(26, -3, 1, 6, 8)) ;
console.log(Math.PI) ;


console.log(Math.random()) ;  // 0 <= Value <= 1
console.log(Math.floor(Math.random()*10)+1) ;


// For any given range
let min = 13, max = 21 ;
let randomValue = Math.floor((Math.random()*(max-min+1)) + min) ;
console.log(randomValue) ;
