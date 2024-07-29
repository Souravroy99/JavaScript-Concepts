const marvel_heroes = ['Thor', "IronMan", "Spiderman"] ;
const dc_heroes = ['Superman', 'Flash', 'Batman'] ;

// Merge two arrays

//  *** Approach 1 'Concat' function ***  " concat "
const mergeArray1 = marvel_heroes.concat(dc_heroes) ;
// console.log(mergeArray1) ; 


//  *** Approach 2 ---> Spread Operation ***  " spread operator "
const mergeArray2 = [...marvel_heroes , ...dc_heroes] ;
const mergeArray3 = [1 , ...[2,3,4] , 5] ;
// console.log(mergeArray2) ;
// console.log(mergeArray3) ;


// //  *** Approach 3 ***  " flat "
const mergeArray4 = [1,2,3,[4,5,6],5,6,8,[7,8,9,[10,11]] , mergeArray2] ;
const real_another_array = mergeArray4.flat(Infinity) ;

// console.log(mergeArray4) ;
// console.log('This is real_another_array ', real_another_array) ;




/******************************************************************************************************/

// .isArray
console.log(Array.isArray(['Sourav'])) ;
console.log(Array.isArray('Sourav')) ;



// .from --> It Creates Array ---> It creates an array where each character of the string becomes an element.

// console.log(Array.from("ST RO Y111"))
// console.log(Array.from(525, 10)); // Error 
// console.log(Array.from({Name: "Sourav"}))  // When you pass an object to Array.from(), it tries to convert it into an array. However, since {Name: "Sourav"} is not an iterable object (like an array or a string), the output will be an empty array [].


// .of ---> Create Array ---> It creates an array with the elements.
// console.log(Array.of(10, 30, 60, 20, -199, true, "Roy"));
// console.log(Array.of({Name: 'tag'}));



// Array to String
let array = [1, 2, 3, 4, -5, 0];

let string = array.join('');
console.log('STRING : ', string);

// String to Array
array = string.split('');
console.log('ARRAY : ', array);