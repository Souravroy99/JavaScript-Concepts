/*
let myDate =  new Date() ;
console.log(typeof myDate) ;

console.log(myDate) ;
console.log(myDate.toString()) ;
console.log(myDate.toISOString()) ;
console.log(myDate.toJSON()) ;
console.log(myDate.toLocaleDateString()) ;
console.log(myDate.toLocaleTimeString()) ;
*/


/*
let myCreatedDate = new Date(2004, 4, 18, 22, 1, 100) ; // Year, Month(0-based), Date, Hour, Minute, Second
console.log(myCreatedDate.toDateString()) ;
console.log(myCreatedDate.toLocaleDateString()) ;
console.log(myCreatedDate.toLocaleString()) ;
console.log(myCreatedDate.toTimeString()) ;
*/


/*
let createDate = new Date("04-02-2024");  // MM-DD-YYYY
console.log(createDate.toString());


let myTimeStamp = Date.now();
console.log(myTimeStamp);  
console.log(createDate.getTime());

// Milisecond to Year
console.log("Year :", Math.floor(Date.now()/(1000*3600*24*366))) ;
console.log('Miliseconds :', 52 * 12 * 30 * 24 * 3600 * 1000)


let newDate = new Date() ;

console.log(newDate.getDay()) ;   // 1--->Monday
console.log(newDate.getMinutes()) ;
console.log(newDate.getMonth() + 1) ; // 0-based
console.log(newDate.getFullYear()) ;



let search = new Date() ;
let week = search.toLocaleDateString("default", {
    weekday : "long", 
    // weekday : "short" ,
    // weekday : "narrow", 
    
});

console.log(search.toLocaleDateString()) ;
console.log(week) ;

*/