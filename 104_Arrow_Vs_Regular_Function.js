/*****************1.) 'Arguments' objects are not available in 'arrow function'.*****************/

// // Normal Function + Arrow Function
// function add(x, y) {
//     console.log(arguments) ;

//     const arrowFunc = (x, y) => {

//         console.log(arguments) ;  /*
//         That means, 
//             i.) Arrow functions do not have their own arguments object, 
//             ii.) They inherit arguments from the nearest non-arrow 
//             function in their scope.
//         */

//         console.log(x+y) ;
//     } 
    
//     arrowFunc(20, 70)

//     return (x+y) ;
// }

// console.log(add(10, 15)) ;





/*****************2.) arrow functions do not have their own 'this'.*****************/

// let userInfo = {
//     name: 'Stroy',

//     fullName_Regular() {
//         console.log(`${this.name} sabka katega! __Regular__`)
//     },

//     fullName_Arrow: () => {
//         console.log(`${this.name} sabka katega! __Arrow__`)
//     }
// }

// userInfo.fullName_Regular() ;
// userInfo.fullName_Arrow() ;





/*******************3.) arrow functions are not constructable.*******************/
function carDekho(name) {
    this.brand = name + " Regular";
}

const carDekho_Arrow = (name) => {
    this.brand = name + " Arrow";
}

const car1 = new carDekho('Lamborghini');
const car2 = new carDekho_Arrow('Ferrari');

console.log(car1.brand);
console.log(car2.brand);




/*******************4.) Implicit return is allowed.*******************/

// In arrow functions, we can omit the curly braces {} when the function body contains a single expression. The value of that expression is implicitly returned. This is known as an "implicit return."