// Object Literal

const JsUser = {
    Name/*KEY*/ : "Sourav" /*Value*/,
    "full name": "Sourav Roy",
    age: 20,
    email: "souravroy200418@google.com",
    location: "Jalpaiguri",
    isLoggedIn: false,
    lastLoginDays: ['Tuesday', 'Wednesday']
}

// console.log(JsUser.email);
// console.log(JsUser["email"]); 
// console.log(JsUser["full name"] ,  '\n'); 


// How to access symbols from object
const mySymbol_1 = Symbol() ;
const mySymbol_2 = Symbol() ;


const func = {
    surname: 'roy',
    mySymbol_1: 'kkkkkkkeey', 
    [mySymbol_2]: 'kkey',  
};


// console.log(func["surname"]);
// console.log(func['mySymbol_1']);
// console.log(func[mySymbol_2]); 


/*
*/

//   Change Value of object
JsUser.location = 'Switzerland'
// console.log(JsUser) ;


//--------------Freeze the Object--------------//
// Object.freeze(JsUser) ;
JsUser.location = 'Kharagpur' ;
// console.log(JsUser) ;



/**************************************************************************************************/

// If you want to change value of any key or add new key, don't freeze the object
JsUser.greeting_is_Just_a_variable_name = () => {
    console.log(`Hello everyone this is ${this.Name}.`) ;
}
console.log(JsUser.greeting_is_Just_a_variable_name()) ;


const greeting = function(){
    console.log(`Hello everyone my email is ${JsUser.email}.`) ;
}

// console.log(greeting());
// console.log(greeting);