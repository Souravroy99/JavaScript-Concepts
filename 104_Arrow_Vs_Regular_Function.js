/*
1.) Arguments objects are not available in 'arrow function'.
*/

// Normal Function
function add(x, y) {
    console.log(arguments) ;
    return (x) ;
}

console.log(add(10, 15)) ;


// Arrow Does not
const arrowFunc = (x, y) => {
    console.log(arguments) ;
    console.log(x+y) ;
} 

arrowFunc(20, 78)