function add(num1, ...args) // Rest operator or Spread operator
{
    let val=0 ;
    for(let i=0 ; i<args.length ; i++)
        val += args[i] ;
    return val ;
}

console.log(add(1, 3, 5, -4, 6));

//---------------------------Fact---------------------------//
/*
function abc(x, y) { // Here, x and y are known as parameters
    // Nothing
}
abc(x,y) ; // Here, x and y are called as arguments
*/



// // Objects in Function
// const user = {
//     userName: "Stroy",
//     price: 1,
// }

// function handleObj(anyObj){
//     console.log(`${anyObj.userName} will be prove that he is the ${anyObj.price}.`) ;
// }

// handleObj(user) ;

// handleObj({
//     userName: "RROOYY",
//     price: 100,
// })


// const myArr = [1,2,3,4,5] ;

// function arrFunc(getArr){
//     return getArr[1] ;
// }

// console.log(arrFunc([2,1,3,4])) ;
// console.log(arrFunc(myArr)) ;