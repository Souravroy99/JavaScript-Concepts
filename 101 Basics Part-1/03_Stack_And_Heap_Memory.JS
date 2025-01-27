// Stack(We get copy) --> Primitive
// Heap(We get reference)  --> Non-Primitive/ Reference


// Example of stack
let myYouTubeChannel = "SouravRoy" ;
let anotherChannel = "stroy1" ;

console.log(myYouTubeChannel, " --> ", anotherChannel) ;


// Example of Stack
let name_1 = "ROY"
let name_2 = name_1

name_2 = "YOR"

console.log(name_1)
console.log(name_2)


/**************************************************************************************************/


// Example of Heap
let userOne = {
    userName: "Mr. Sourav Roy",
    userEmail: "souravroy@google.com" 
}

let userTwo = userOne ;
userTwo.userName = "Anonymous" ;

userTwo.name = "RAM"

console.log(userOne) ;
console.log(userTwo) ;
