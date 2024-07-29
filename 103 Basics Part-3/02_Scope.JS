// var ---> Global Scope
// let, const ---> Block Scope
// In JS execution is line by line happens

function one(){
    const userName = "Roy" ;

    function two(){
        const website = "Youtube";
        console.log(userName) ;
    }
    // console.log(website) ;
    two() ;

}
one() ;



/*--------------------------------------------Hoisting--------------------------------------------*/

console.log("Before : ", addone(8)) ;

function addone(num) {
    return num+1 ;
}

console.log("After : ", addone(9)) ;


// console.log("Before : ", addTwo(88)) ;
const addTwo = function(num) {   // This is called 'Expression' not function. In expression 'Before declaration is not applicable'.
    return (num+2) ;
}

console.log("After : ", addTwo(98)) ;