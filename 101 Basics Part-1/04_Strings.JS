// String Interpolation
/*
let Name = "Stroy"
let projectNum = 5 

console.log(`Hello everyone, Good Morning! I hope you all are doing well. My name is ${Name.toUpperCase()} and I have ${projectNum} projects`);
*/


// String Declaration as an object

let gameName = new String("SpiderNinja") ; // Not array, this is object
console.log(gameName.length, gameName[1], typeof gameName, typeof "ABC") 



// Accessing Prototype
console.log(gameName.__proto__) ;


// Other functions/ Methods
console.log(gameName.charAt(6)) ;
console.log(gameName.indexOf('i'))


// Substring
const newString = gameName.substring(1,3)   // (start_Index, end_Index-1)
console.log(newString, typeof newString) 


// Slice
const newSplice = gameName.slice(-4, -1) ;  // (start_Index, end_Index-1)
console.log(newSplice) ;


// Trim --> Extra spaces(start and end)
const newTrimming = "  Hello      " ;
console.log(newTrimming.trimStart() + "Is there any extra space") ; // Start
console.log(newTrimming.trimEnd() + "Is there any extra space") ;  // End
console.log(newTrimming.trim() + "Is there any extra space") ;    // Start + End


// Replace
const url = 'https://souravroy@google.com%100andEvery.com' ;
console.log(url.replace('%100', '-'))


// Finding any keyWord
console.log(url.includes('%100')) ;



// String to Array
console.log(url.split('o'))