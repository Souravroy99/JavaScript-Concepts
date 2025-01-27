// Collection of multiple(mix of different datatypes) elements
// Resizable
// In JS array-copy-operation create shallow copies

// Deep Copy ---> A deep copy of an object is a copy whose properties do not share the same references
// Shallow Copy ---> A Shallow copy of an object is a copy whose properties shares the same references


/*
const arr1 = [0,1,2,3,4] ;                                                      
// console.log(typeof arr1, arr1) ;

const arr2 = new Array(10, 20 , 30 , 40, 50) ;
// console.log(typeof arr2, arr2) ;

arr2.shift() ;
arr2.shift() ;

arr2.push(100) ;

console.log(arr2) ;

console.log(arr2.includes(19), " AND : ", arr2.indexOf(19), "So this is not present inside of arr2") ;


// Array to String  ---> Using 'join()' function
const arrayToString = arr2.join() ;
console.log(typeof arrayToString, " --->>> ", arrayToString) ; // Array to string
console.log(arrayToString[2])


//  String to Array ---> Using .split(',') , But in the array all the elements are string
const stringToArray = arrayToString.split(',') ; 
console.log(typeof stringToArray, " --->>> ", stringToArray) ;


*/

/*--------------------------Slice VS Splice--------------------------*/
const myarr = new Array(5,6,7,8,9) ;
console.log("Original : ", myarr) ;


const mYn1 = myarr.slice(1, 3) ;     // (Start Index, End Index-1)
console.log("Slice: ", mYn1) ;
console.log("Original After SLICE: ", myarr) ;


const mYn2 = myarr.splice(2, 2) ;  // (Start Index, Number of elements) // Splice can Manipulate our original array
console.log("Splice: ", mYn2) ;
console.log("Original After SPLICE : ", myarr) ;
/*
*/