// ARRAYS are helpful when handling lists of data
//instead of making a ton of similarly named variables
//create data structure to holdon to them

let students = ['Sami','Chris','Jade']

// indexes:     0     1      2   3
let learners = [24, 'Jade', true, []]     

//In javascript you can include diff data types in the same array

learners[0] = 20  //this targets the value at the 0 index and reassigns it to 4

// you can access the length property using consolelog(arrayname.propety)

// console.log(learners[0]) // value at the 0 index is 24
// console.log(learners.length)

 //Note: you can nest an array within an array such as index 3 above

//PUSH method       (adds to end of an array in order)
//this method mutates or changes the array (not making a copy or otherwise)
 learners.push('Nathan','Kristy','Henry','Ronald')

//POP method          (removes the last element from the END of array)
     //learners.pop()           // if you leave the () empty, it will still work 
    //let removedValue = learners.pop()

//SHIFT method       (removed from begining)
//UNSHIFT method      (adds to the beginning of array)

//spread operator ...arrayname
//takes contents of an array and 
//puts it in a new container, 
//not nesting the actual array, ONLY the contents
// let everybody = [...learners, ...students] 

// console.log(everybody)


//rest parameters 
// looks exactly like spread but the location is they are placed in the parameter list in a function
//allows you to have an unlimited amount of parameters

// function add(...numbers){
//     console.log(numbers)
// }

// add(4, 5, 6, 7, 13, 16, 25, 100)

// Lab EXERCISE 1

function maxOfTwoNumbers(a,b)
        {
            if(a>b){
                 return a;
            }else if(b>a){
                return b;
            } else 
                return a;
                 
        }

console.log( maxOfTwoNumbers(17, 2) )

//Exercise 2

// const maxOfThree = function (a, b, c){
//     if(a>b && a>c){
//         return a;
//     }
//     else if (b>a && b>c){
//         return b;
//     }else if (c>a && c>b){
//         return c;
// }}

// console.log(maxOfThree(15, 5, 17))

//Exercise 3

// let vowels = ['a','e','i','o','u']

// function isCharAVowel (z){
    
//      if (vowels.includes(z)){
//         return true;} 
//      else{
//         return false;}
//}
// console.log(isCharAVowel(3))

// Exercise 4

// const sumArray = (array) => {
//     let sum = 0;
//     for(let i = 0 ;i < array.length;i++){
//         sum += array[i];    
//     }
//     return sum;
// }
// console.log(sumArray([1,2,3]))
// const Street = [100, 102, 104, 106, 108]
// console.log(sumArray(Street))

//Exercise 5

// function multiplyArray(arr){
//     let prod = 1;
//     for( let i =0; i < arr.length; i++){
//         prod *= arr[i]; 
//     }
//     return prod
// }

// //console.log(multiplyArray([1,2,3]))
// console.log(multiplyArray([2,3,4,5]))


//Exercise 6

// numArgs = function(){
//     return 
// }
