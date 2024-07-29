// Singleton ---> Object Creation

// const tinderUser = new Object() ; // Singleton Object
const tinderUser = {} ; // Non Singleton Object

tinderUser.id = "123abc" ;
tinderUser.name = "Sam" ;
tinderUser.isLoggedIn = false ;

// console.log(tinderUser) ; 



/*---------------------------------------Nested Object---------------------------------------*/

const regularUser = {
    email: "AnyRandom@gmail.com",
    fullName: {
        user_AKA: "Stroy",
        userFullName: {
            firstName: "Sourav",
            secondName: "Roy"
        },
    },
}

// console.log(regularUser["email"])
// console.log(regularUser.fullName.userFullName.firstName) ;




/*-------------------------------------------Object Merge-------------------------------------------*/

const obj1 = {
    1: 'a',
    2: 'b',
}

const obj2 = {
    3: 'c',
    4: 'b',
}

const Merge_Obj = {...obj1, ...obj2} 
console.log(Merge_Obj) 


const Merge_Obj2 = Object.assign({}, obj1, obj2) ;  // Every object value assign to the first object(In this case this is the empty object)
console.log(Merge_Obj2) ;
console.log(obj1)




//  Keys and Values accessing from Object ---> Return type ==> Array
console.log(Object.keys(tinderUser)) ;
console.log(Object.values(tinderUser)) ;
console.log(Object.entries(tinderUser)) ;



console.log(tinderUser.hasOwnProperty('id')) ;
console.log(tinderUser.hasOwnProperty('ID')) ;