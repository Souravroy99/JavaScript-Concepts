// Stack(We get copy) --> Primitive
// Heap(We get reference)  --> Non-Primitive/ Reference


// Example of stack
let myYouTubeChannel = "SouravRoy" ;
let anotherChannel = "stroy1" ;

console.log(myYouTubeChannel, " --> ", anotherChannel) ;


// Example of Heap
let userOne = {
    userName: "Mr. Sourav Roy",
    userEmail: "souravroy@google.com" 
}

let userTwo = userOne ;
userTwo.userName = "Anonymous" ;

console.log(userOne) ;
console.log(userTwo) ;
