// We can able to use 'this' inside of object

const user = {
    name: 'Sourav',
    price: 111,

    welcomeMessage1: function(){
        console.log(`\n${this.name}, welcome!\n`) ;
        console.log('this:', this)   // 'this' is the instance of the current object
    },

    welcomeMessage2: () => {
        console.log(`\n${this.name}, welcome!\n`) ;
        console.log('this:', this)   // In arrow function 'this is empty'.
    }
}
 
// user.welcomeMessage1();
// user.welcomeMessage2();


user.name = 'Sam';
// user.welcomeMessage1();
// user.welcomeMessage2();


// // Note:              Global Object in Browser is 'Window'.
// console.log(this)  // Global Object in Node is 'Empty Object'



// Function declaration Method 1
function code1() {
    console.log(this) ;     // Doubtfull behaviour of 'this'.
}

// Function declaration Method 2
const code2 = function(){
    console.log(this) ;     // Doubtfull behaviour of 'this'.
}

// Function declaration Method 3 --> Using arrow function
const code3 = () => {
    console.log(this) ;     // Doubtfull behaviour of 'this'.
}


// Implicit Return --> We do not need to write 'return' keyword explicitly
// Function declaration Method 4
const code4 = (num1, num2) => (num1 + num2)


// code1() ;
// code2() ;
// code3() ;
// console.log(code4(2, 98)) ;


// Function declaration Method 5 
// 'Immediately Invoked Function Expression' (IIFE)

// We should use semicolon at the end of IIFE as well as at the start of IIFE

;
(()=>{
    console.log("Hello Sourav 1") 
})() 
;

(()=>{
    console.log("Hello Sourav Roy 2") ;
})(); 